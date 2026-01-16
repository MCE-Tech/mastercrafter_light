import React, { useEffect } from "react";

export default function SpotlightIndexPage() {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-primary/20 to-blue-400 transform -skew-y-3" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-4 gradient-text">
            The Spotlight Index
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Empowering Artists, Assuring Clients
        </p>
          <div className="w-16 h-1 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Where Performance Meets Validations</h2>
        <p className="text-xl text-center text-muted-foreground mb-8 max-w-2xl mx-auto">The Spotlight Index is <strong>India’s first structured evaluation platform for indie musicians, acoustic bands, and live performers</strong> — blending <strong>real gigs, expert feedback, and a transparent scoring system</strong> to help you grow as an artist and stand out in the live music scene.</p>
        <p className="text-lg text-center mb-10 max-w-2xl mx-auto">This isn't just a stage. It’s your <strong>music career accelerator.</strong></p>

        <h2 className="text-2xl font-bold mb-4 text-center">Why Join The Spotlight Index?</h2>
        <p className="mb-4 text-lg text-center">As an emerging artist, your talent deserves more than just applause — it deserves <strong>recognition, direction, and real bookings.</strong></p>
        <ul className="list-disc list-inside mb-8 text-lg max-w-2xl mx-auto">
          <li><strong>Perform live</strong> at curated events before a real audience</li>
          <li>Receive <strong>professional feedback</strong> from music experts and clients</li>
          <li>Build a <strong>verified artist profile</strong> with a Craft Score out of 100</li>
        </ul>
        <blockquote className="mb-10 text-xl text-muted-foreground max-w-2xl mx-auto border-l-4 pl-4">Grow your confidence, credibility, and career — one live set at a time.</blockquote>

        <h2 className="text-2xl font-bold mb-4 text-center">How it Works</h2>
        <ol className="list-decimal list-inside mb-8 text-lg max-w-2xl mx-auto">
          <li>Apply to Perform at an upcoming Spotlight Index event —&gt; <a href="https://forms.gle/bN3naYfytBQcS5Mw5" target="_blank" rel="noopener"><strong>Click Here to apply</strong></a></li>
          <li>We create or update your <strong>Master Crafters artist portfolio (Mandatory)</strong></li>
          <li>You <strong>perform live</strong> in a supportive open-mic format</li>
          <li>A <strong>diverse panel of judges</strong> (music experts, clients & select audience) evaluates your performance</li>
          <li>Judges score you across <strong>12 key parameters</strong> (each out of 10)</li>
          <li>Your total <strong>Craft Score (out of 100)</strong> is calculated</li>
          <li>The score appears on your <strong>Master Crafters profile</strong>, boosting your credibility</li>
          <li>After the show, we <strong>jam, connect, and celebrate music</strong></li>
        </ol>

        <h2 className="text-2xl font-bold mb-4 text-center">The Craft Score System</h2>
        <details className="mb-8 max-w-2xl mx-auto">
          <summary className="font-semibold cursor-pointer">Click on arrow to expand</summary>
          <p className="mb-2"><strong>Evaluation, not judgment. Growth, not perfection.</strong></p>
          <p className="mb-4">Each artist is evaluated across <strong>12 Craft Parameters</strong>, grouped into three core areas:</p>
          <h3 className="font-bold mb-2">Performance Quality</h3>
          <table className="w-full mb-4 text-left border-collapse">
            <tbody>
              <tr><th>Vocal Skills</th><td>Pitch, control, expression</td></tr>
              <tr><th>Instrumental Skills</th><td>Skill and synergy of musicians / Instrumentalists</td></tr>
              <tr><th>Song Arrangement</th><td>Smooth transitions and creative flow of the song</td></tr>
              <tr><th>Stage Presence</th><td>Charisma, body language, audience engagement</td></tr>
              <tr><th>Crowd Engagement</th><td>Interaction, vibe, connection with Audience</td></tr>
              <tr><th>Song Choices</th><td>Relevance to event vibe and crowd</td></tr>
              <tr><th>Sound Setup Management</th><td>Handling of live sound, mic check and simulated sound issues</td></tr>
            </tbody>
          </table>
          <h3 className="font-bold mb-2">Professionalism</h3>
          <table className="w-full mb-4 text-left border-collapse">
            <tbody>
              <tr><th>Professionalism</th><td>Respectful behavior, communication, and preparedness.</td></tr>
              <tr><th>Punctuality</th><td>Timely arrival, setup, and readiness for the performance.</td></tr>
            </tbody>
          </table>
          <h3 className="font-bold mb-2">Audience Impact & Portfolio Value</h3>
          <table className="w-full mb-4 text-left border-collapse">
            <tbody>
              <tr><th>Audience Reaction</th><td>Real-time crowd energy and attention</td></tr>
              <tr><th>Adaptability</th><td>Handling requests, tech issues, or mood shifts</td></tr>
              <tr><th>Reality Check</th><td>Alignment of live show vs your online portfolio</td></tr>
            </tbody>
          </table>
          <blockquote className="mb-4 text-muted-foreground border-l-4 pl-4">All parameters are scored out of 10 by multiple judges.<br/><br/>The final Craft Score (out of 100) is published on your profile.</blockquote>
        </details>

        <h2 className="text-2xl font-bold mb-4 text-center">Who Is This For?</h2>
        <h3 className="font-bold mb-2 text-center">Artists, Bands & Musicians</h3>
        <p className="mb-4 text-lg text-center">Whether you're a <strong>solo performer, acoustic duo, or new band</strong>, this platform is designed for you.</p>
        <ul className="list-disc list-inside mb-8 text-lg max-w-2xl mx-auto">
          <li>Perform live.</li>
          <li>Get scored by pros.</li>
          <li>Improve your stage game.</li>
          <li>Build trust with future clients.</li>
        </ul>
        <blockquote className="mb-10 text-xl text-muted-foreground max-w-2xl mx-auto border-l-4 pl-4">No politics. No gatekeeping. Just <strong>pure music and measurable growth.</strong></blockquote>

        <h3 className="font-bold mb-2 text-center">Clients and Event Planners</h3>
        <p className="mb-4 text-lg text-center">Looking to book <strong>credible live performers</strong> without the guesswork?</p>
        <ul className="list-disc list-inside mb-8 text-lg max-w-2xl mx-auto">
          <li>Discover <strong>verified artists</strong> with proven stage presence</li>
          <li>View artist portfolios with <strong>real Craft Scores</strong></li>
          <li>Be part of the <strong>Judge Panel</strong> and shape India’s next-gen talent</li>
        </ul>
        <blockquote className="mb-10 text-xl text-muted-foreground max-w-2xl mx-auto border-l-4 pl-4">Book with confidence. Support real growth.</blockquote>

        <h2 className="text-2xl font-bold mb-4 text-center">Ready to Get On Stage?</h2>
        <ul className="list-disc list-inside mb-8 text-lg max-w-2xl mx-auto">
          <li><strong>Artists</strong>:<br/>Apply for the next Spotlight Index round and start building your music legacy.<br/><em>Eligibility Criteria: Must have Portfolio with Master Crafters. To create portfolio —&gt; <a href="https://forms.gle/9Vyq9BMkeFqyiFmX7" target="_blank" rel="noopener"><strong>Click here</strong></a></em></li>
          <li><strong>Clients & Judges:</strong><br/>Want to partner, book, or join the judging panel?</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-center">Our Industry Experts</h2>
        <aside className="bg-secondary/10 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-2 text-center">📞 Ready to Book the Right Artist?</h3>
          <p className="mb-2 text-center">Planning a performance or hosting an event?</p>
          <p className="mb-2 text-center">Get in touch for <strong>availability, pricing, and customized options</strong> tailored to your needs.</p>
          <p className="mb-2 text-center">📧 Email: <a href="mailto:mastercrafters.ent@gmail.com" className="underline">mastercrafters.ent@gmail.com</a></p>
          <p className="mb-2 text-center">📱 Phone: <a href="tel:+918329303275" className="underline">+91 8329303275</a></p>
          <h4 className="font-semibold mt-4 mb-2 text-center">Follow Us on</h4>
          <ul className="list-none text-center">
            <li><a href="https://www.instagram.com/mastercrafters.events/" target="_blank" rel="noopener" className="underline">Instagram</a></li>
            <li><a href="https://www.youtube.com/@mastercrafters.events" target="_blank" rel="noopener" className="underline">YouTube</a></li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
