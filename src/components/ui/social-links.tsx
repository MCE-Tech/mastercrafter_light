export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`text-white/80 ${className}`}>
      <h3 className="font-medium mb-2">Follow Us on</h3>
      <div className="flex justify-center gap-4">
        <a href="#" className="hover:text-white transition-colors">
          Instagram (@mastercrafters.events)
        </a>
        <a href="#" className="hover:text-white transition-colors">
          YouTube Master Crafters
        </a>
      </div>
    </div>
  )
}