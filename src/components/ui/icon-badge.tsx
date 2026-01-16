import type { LucideIcon } from "lucide-react"

interface IconBadgeProps {
  icon: LucideIcon
  color?: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export function IconBadge({ icon: Icon, color = "primary", size = "md", className = "" }: IconBadgeProps) {
  const sizeClasses = {
    sm: "p-2 h-4 w-4",
    md: "p-3 h-6 w-6",
    lg: "p-4 h-8 w-8",
  }
  return (
    <div className={`rounded-full bg-${color}/20 ${className}`}>
      <Icon className={`text-${color} ${sizeClasses[size]}`} />
    </div>
  )
}