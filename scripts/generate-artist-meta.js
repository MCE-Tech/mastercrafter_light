const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '..', 'src', 'data', 'artists.tsx');
const outRoot = path.join(__dirname, '..', 'public', 'artist');

const text = fs.readFileSync(dataFile, 'utf8');

// build import map: varName -> importPath
const importRegex = /import\s+(\w+)\s+from\s+['"](.+?)['"]/g;
const imports = {};
let m;
while ((m = importRegex.exec(text))) {
  imports[m[1]] = m[2];
}

// extract array content
const arrMatch = text.match(/const\s+artistsData[\s\S]*?=\s*\[([\s\S]*?)\];/);
if (!arrMatch) {
  console.error('Could not find artistsData array in', dataFile);
  process.exit(1);
}

const itemsText = arrMatch[1];
// split top-level objects roughly by closing brace of each item
const rawItems = itemsText.split(/\n\s*},\s*\n\s*{/g).map((s) => s.replace(/^\s*{?/, '').replace(/}?,?\s*$/, ''));

function extract(field, txt) {
  const re = new RegExp(field + '\\s*:\\s*[`\"\']?([\s\S]*?)[`\"\']?\\s*(,|$)', 'm');
  const found = txt.match(re);
  return found ? found[1].trim() : undefined;
}

if (!fs.existsSync(outRoot)) fs.mkdirSync(outRoot, { recursive: true });

rawItems.forEach((item) => {
  const name = extract('name', item);
  const slug = extract('slug', item);
  const bio = extract('bio', item) || '';
  const artistType = extract('artistType', item) || '';
  const imageVar = extract('image', item);

  if (!slug || !name) return;

  // resolve image path from imports map
  let imagePath = '';
  if (imageVar && imports[imageVar]) {
    // normalize ../assets/... -> /src/assets/...
    const imp = imports[imageVar];
    imagePath = imp.replace(/^\.\./, '/src');
  }

  const outDir = path.join(outRoot, slug);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const title = `${name} — ${artistType}`;
  const description = (bio || '').replace(/\n+/g, ' ').replace(/"/g, '&#34;');
  const ogImage = imagePath || '';

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
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    ${ogImage ? `<meta name="twitter:image" content="${ogImage}" />` : ''}
    <link rel="canonical" href="/artist/${slug}" />
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
