import type { ReactNode } from "react"
import { Music } from "lucide-react"

interface CTASectionLayoutProps {
  title: React.ReactNode
  subtitle?: string
  children: ReactNode
  gradientFrom?: string
  gradientTo?: string
  className?: string
}

export function CTASectionLayout({
  title,
  subtitle,
  children,
  gradientFrom = "primary",
  gradientTo = "secondary",
  className = "",
}: CTASectionLayoutProps) {
  return (
    <section className={`py-16 md:py-20 lg:py-24 relative overflow-hidden ${className}`}>
      <div className="container px-4 md:px-6 relative z-10">
        <div
          className={`max-w-5xl mx-auto bg-gradient-to-r from-${gradientFrom} to-${gradientTo} rounded-3xl overflow-hidden shadow-2xl`}
        >
          <div className="relative p-8 md:p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-x-12 translate-y-12" />
            <div className="relative flex flex-col items-center text-center space-y-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Music className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{title}</h2>
              {subtitle && <p className="text-white/80">{subtitle}</p>}
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}