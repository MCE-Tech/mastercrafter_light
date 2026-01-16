import React from "react"
import { Button } from "../components/ui/button"

export default function VibeVedaPage() {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-primary/20 to-secondary/20 transform -skew-y-3" />
      <div className="container px-4 md:px-6 relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-4 gradient-text">About VibeVeda</h1>
        <p className="text-xl text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Step into a space where art flows freely, music heals, and soulful expression takes center stage.
        </p>
        <div className="prose prose-lg mx-auto mb-10 text-center">
          <p><strong>VibeVeda</strong> is more than just an open mic — it’s a consciously curated experience where emerging voices, seasoned artists, and spontaneous collaborations come together to create magic. And after all the performances, everyone becomes part of a musical jam session.</p>
          <p>From heartfelt music and powerful poetry to beatboxing, dance, and stand-up comedy — <strong>VibeVeda is a celebration of art, raw expression, and artistic connection.</strong></p>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Why Join VibeVeda?</h2>
        <ul className="list-disc list-inside mb-8 text-lg max-w-2xl mx-auto text-center">
          <li>Discover a conscious space for raw and real performances</li>
          <li>Perform or watch a handpicked lineup of unique artists</li>
          <li>Connect with a creative community of like-minded souls</li>
          <li>End the night with a spontaneous <strong>jam session</strong> filled with shared rhythms and pure energy</li>
          <li>Be part of something you’ll want to relive on and off stage</li>
        </ul>
        <blockquote className="mb-10 text-xl text-muted-foreground max-w-2xl mx-auto border-l-4 pl-4">Whether you're a performer or just love great vibes, <strong>VibeVeda</strong> is where you belong.</blockquote>
        <h2 className="text-2xl font-bold mb-4 text-center">Want to Perform at VibeVeda?</h2>
        <p className="mb-4 text-lg text-center">If you’re a <strong>musician, poet, dancer, beatboxer, comedian, or any live performer</strong>, this is your stage</p>
        <ul className="list-disc list-inside mb-8 text-lg max-w-2xl mx-auto">
          <li>🎟️ <strong>No registration charges for performers</strong></li>
          <li>📝 <strong>Limited slots available for every VibeVeda Edition</strong></li>
          <li><strong>✅ Performers shortlisted based on performance quality & profile</strong></li>
        </ul>
        <blockquote className="mb-10 text-xl text-muted-foreground max-w-2xl mx-auto border-l-4 pl-4">Grow your confidence, credibility, and career — one live set at a time.</blockquote>
        <h2 className="text-2xl font-bold mb-4 text-center">Want to Attend as an Audience?</h2>
        <p className="mb-4 text-lg text-center">Come for the vibe, stay for the art. Experience an evening filled with live performances, spontaneous collabs, and community energy.</p>
        <ul className="list-disc list-inside mb-8 text-lg max-w-2xl mx-auto">
          <li>🎫 <strong>General Pass:</strong> Starts from ₹299</li>
          <li>🤝 <strong>Referral Pass:</strong> Starts from ₹199</li>
          <li>🎵 <strong>Jam session included for all guests</strong></li>
        </ul>
        <blockquote className="mb-10 text-xl text-muted-foreground max-w-2xl mx-auto border-l-4 pl-4">VibeVeda — where your art heals your soul.</blockquote>
        <aside className="bg-secondary/10 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-2">📞 Stay Updated for Next VibeVeda?</h3>
          <p className="mb-2">Have questions? Want to know about the next lineup or event details?</p>
          <p className="mb-2">We’d love to hear from you.</p>
          <p className="mb-2">📧 Email: <a href="mailto:mastercrafters.ent@gmail.com" className="underline">mastercrafters.ent@gmail.com</a></p>
          <p className="mb-2">📱 Phone: <a href="tel:+918329303275" className="underline">+91 8329303275</a></p>
          <h4 className="font-semibold mt-4 mb-2">Follow Master Crafters for Updates & Artist Features</h4>
          <ul className="list-none">
            <li><a href="https://www.instagram.com/mastercrafters.events/" target="_blank" rel="noopener" className="underline">Instagram</a></li>
            <li><a href="https://www.youtube.com/@mastercrafters.events" target="_blank" rel="noopener" className="underline">YouTube</a></li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
