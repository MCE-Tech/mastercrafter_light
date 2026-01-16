import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor?: string
  borderColor?: string
  className?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor = "primary",
  borderColor = "primary",
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`light-card rounded-xl p-6 transition-all duration-200 hover:shadow-lg border border-${borderColor}/20 hover:border-${borderColor}/40 ${className}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-full bg-${iconColor}/10`}>
          <Icon className={`h-6 w-6 text-${iconColor}`} />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}