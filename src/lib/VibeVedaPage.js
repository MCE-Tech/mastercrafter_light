// VibeVedaPage.js
// This file contains the content and structure for the VibeVeda information page.

export const vibeVedaContent = `
<div style="max-width: 700px; margin: 2rem auto; padding: 2rem; background: #fff; border-radius: 1.5rem; box-shadow: 0 2px 24px rgba(0,0,0,0.07); text-align: center; font-family: 'Inter', 'Segoe UI', Arial, sans-serif;">
  <h1 style="font-size:2.5rem; font-weight:700; margin-bottom:1rem; background: linear-gradient(90deg,#a855f7,#f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">About VibeVeda</h1>
  <p style="font-size:1.2rem; color:#6b7280; margin-bottom:1.5rem;">Step into a space where art flows freely, music heals, and soulful expression takes center stage.</p>
  <p style="margin-bottom:1rem;"><strong>VibeVeda</strong> is more than just an open mic — it’s a consciously curated experience where emerging voices, seasoned artists, and spontaneous collaborations come together to create magic. And after all the performances, everyone becomes part of a musical jam session.</p>
  <p style="margin-bottom:2rem;">From heartfelt music and powerful poetry to beatboxing, dance, and stand-up comedy — <strong>VibeVeda is a celebration of art, raw expression, and artistic connection.</strong></p>

  <h2 style="font-size:1.5rem; font-weight:600; margin-bottom:1rem;">Why Join VibeVeda?</h2>
  <ul style="text-align:left; margin:0 auto 2rem auto; max-width:500px; font-size:1.1rem;">
    <li>Discover a conscious space for raw and real performances</li>
    <li>Perform or watch a handpicked lineup of unique artists</li>
    <li>Connect with a creative community of like-minded souls</li>
    <li>End the night with a spontaneous <strong>jam session</strong> filled with shared rhythms and pure energy</li>
    <li>Be part of something you’ll want to relive on and off stage</li>
  </ul>
  <blockquote style="font-size:1.1rem; color:#6b7280; border-left:4px solid #a855f7; padding-left:1rem; margin-bottom:2rem;">Whether you're a performer or just love great vibes, <strong>VibeVeda</strong> is where you belong.</blockquote>

  <h2 style="font-size:1.5rem; font-weight:600; margin-bottom:1rem;">Want to Perform at VibeVeda?</h2>
  <p style="margin-bottom:1rem;">If you’re a <strong>musician, poet, dancer, beatboxer, comedian, or any live performer</strong>, this is your stage</p>
  <ul style="text-align:left; margin:0 auto 2rem auto; max-width:500px; font-size:1.1rem;">
    <li>🎟️ <strong>No registration charges for performers</strong></li>
    <li>📝 <strong>Limited slots available for every VibeVeda Edition</strong></li>
    <li><strong>✅ Performers shortlisted based on performance quality & profile</strong></li>
  </ul>
  <blockquote style="font-size:1.1rem; color:#6b7280; border-left:4px solid #a855f7; padding-left:1rem; margin-bottom:2rem;">Grow your confidence, credibility, and career — one live set at a time.</blockquote>

  <h2 style="font-size:1.5rem; font-weight:600; margin-bottom:1rem;">Want to Attend as an Audience?</h2>
  <p style="margin-bottom:1rem;">Come for the vibe, stay for the art. Experience an evening filled with live performances, spontaneous collabs, and community energy.</p>
  <ul style="text-align:left; margin:0 auto 2rem auto; max-width:500px; font-size:1.1rem;">
    <li>🎫 <strong>General Pass:</strong> Starts from ₹299</li>
    <li>🤝 <strong>Referral Pass:</strong> Starts from ₹199</li>
    <li>🎵 <strong>Jam session included for all guests</strong></li>
  </ul>
  <blockquote style="font-size:1.1rem; color:#6b7280; border-left:4px solid #a855f7; padding-left:1rem; margin-bottom:2rem;">VibeVeda — where your art heals your soul.</blockquote>

  <aside style="background:#f3f3f3;padding:1.5em;border-radius:1em; margin-bottom:0;">
    <h3 style="font-size:1.2rem; font-weight:600; margin-bottom:0.5rem;">📞 Stay Updated for Next VibeVeda?</h3>
    <p style="margin-bottom:0.5rem;">Have questions? Want to know about the next lineup or event details?</p>
    <p style="margin-bottom:0.5rem;">We’d love to hear from you.</p>
    <p style="margin-bottom:0.5rem;">📧 Email: <a href="mailto:mastercrafters.ent@gmail.com">mastercrafters.ent@gmail.com</a></p>
    <p style="margin-bottom:0.5rem;">📱 Phone: <a href="tel:+918329303275">+91 8329303275</a></p>
    <h4 style="font-weight:600; margin-top:1rem; margin-bottom:0.5rem;">Follow Master Crafters for Updates & Artist Features</h4>
    <ul style="list-style:none; padding-left:0;">
      <li><a href="https://www.instagram.com/mastercrafters.events/" target="_blank">Instagram</a></li>
      <li><a href="https://www.youtube.com/@mastercrafters.events" target="_blank">YouTube</a></li>
    </ul>
  </aside>
</div>
`;

export function loadVibeVedaContent(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = vibeVedaContent;
  }
}
