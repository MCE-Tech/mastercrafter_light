interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col items-center text-center space-y-4 mb-12 ${className}`}>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-xl max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}