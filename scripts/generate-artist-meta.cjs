const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '..', 'src', 'data', 'artists.tsx');
const outRoot = path.join(__dirname, '..', 'public', 'artist');

const text = fs.readFileSync(dataFile, 'utf8');

// optional base URL for absolute links, e.g. https://example.com
const rawBase = process.env.BASE_URL || '';
const baseUrl = rawBase.replace(/\/$/, '');

// build import map: varName -> importPath
const importRegex = /import\s+(\w+)\s+from\s+['\"](.+?)['\"]/g;
const imports = {};
let m;
while ((m = importRegex.exec(text))) {
  imports[m[1]] = m[2];
}
console.log('Found imports:', Object.keys(imports).length);

// extract array content
const arrMatch = text.match(/const\s+artistsData[\s\S]*?=\s*\[([\s\S]*?)\];/);
if (!arrMatch) {
  console.error('Could not find artistsData array in', dataFile);
  process.exit(1);
}

const itemsText = arrMatch[1];
// split top-level objects roughly by closing brace of each item
const rawItems = itemsText.split(/\n\s*},\s*\n\s*{/g).map((s) => s.replace(/^\s*{?/, '').replace(/}?,?\s*$/, ''));
console.log('Parsed item chunks:', rawItems.length);

function extractQuoted(field, txt) {
  let re = new RegExp(field + '\\s*:\\s*"([^"\\n]+)"', 'm');
  let found = txt.match(re);
  if (found) return found[1].trim();
  re = new RegExp(field + "\\s*:\\s*'([^'\\n]+)'", 'm');
  found = txt.match(re);
  if (found) return found[1].trim();
  return undefined;
}

function extractIdent(field, txt) {
  const re = new RegExp(field + "\\s*:\\s*([A-Za-z0-9_]+)", 'm');
  const found = txt.match(re);
  return found ? found[1].trim() : undefined;
}

if (!fs.existsSync(outRoot)) fs.mkdirSync(outRoot, { recursive: true });

rawItems.forEach((item, idx) => {
  const name = extractQuoted('name', item);
  const slug = extractQuoted('slug', item);
  const bio = extractQuoted('bio', item) || '';
  const artistType = extractQuoted('artistType', item) || '';
  const imageVar = extractIdent('image', item);

  console.log(`Item ${idx}: name=${name || 'MISSING'} slug=${slug || 'MISSING'} imageVar=${imageVar || 'NONE'}`);
  console.log('Snippet:', item.slice(0,240).replace(/\n/g,' '));

  if (!slug || !name) {
    console.warn('Skipping item due to missing name or slug');
    return;
  }

  // resolve image path from imports map
  let imagePath = '';
  if (imageVar && imports[imageVar]) {
    // normalize ../assets/... -> /src/assets/...
    const imp = imports[imageVar];
    imagePath = imp.replace(/^\.\./, '/src');
  }

  // build absolute URLs when BASE_URL provided
  const ogImageAbs = imagePath ? (baseUrl ? `${baseUrl}${imagePath}` : imagePath) : '';
  const pageUrl = baseUrl ? `${baseUrl}/artist/${slug}` : `/artist/${slug}`;

  const outDir = path.join(outRoot, slug);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const title = `${name} — ${artistType}`;
  const description = (bio || '').replace(/\n+/g, ' ').replace(/"/g, '&#34;');
  const ogImage = ogImageAbs || '';

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    ${ogImage ? `<meta property="og:image" content="${ogImage}" />` : ''}
    <meta property="og:url" content="${pageUrl}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    ${ogImage ? `<meta name="twitter:image" content="${ogImage}" />` : ''}
    <link rel="canonical" href="${baseUrl ? pageUrl : `/artist/${slug}`}" />
  </head>
  <body>
    <p>Redirecting to artist page…</p>
    <script>location.href = '/artist/${slug}';</script>
  </body>
</html>`;

  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  console.log('Wrote', path.join('/public/artist', slug, 'index.html'));
});

console.log('Artist meta generation complete');
