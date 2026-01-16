"use client"

import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PlanFeature {
  text: string
  included: boolean
  note?: string
}

interface PlanCardProps {
  name: string
  description: string
  price: string
  period: string
  features: PlanFeature[]
  buttonText: string
  buttonColor?: string
  highlighted?: boolean
  className?: string
}

export function PlanCard({
  name,
  description,
  price,
  period,
  features,
  buttonText,
  buttonColor = "[#8a2be2]",
  highlighted = false,
  className = "",
}: PlanCardProps) {
  return (
    <div
      className={`card-artists rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg ${highlighted ? "ring-2 ring-primary" : ""} ${className}`}
    >
      <div className="p-6 bg-[#8a2be2]/20">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 text-3xl font-bold">
          {price}
          <span className="text-sm font-normal text-muted-foreground">/{period}</span>
        </div>
      </div>
      <div className="p-6">
        <Button className={`w-full bg-${buttonColor} hover:bg-${buttonColor}/90 mb-6`}>
          {buttonText}
        </Button>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              {feature.included ? (
                <Check className="h-4 w-4 text-green-500 shrink-0" />
              ) : (
                <X className="h-4 w-4 text-red-500 shrink-0" />
              )}
              <span className={feature.included ? "" : "text-muted-foreground"}>
                {feature.text}
                {feature.note && (
                  <span className="text-xs text-muted-foreground"> {feature.note}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}