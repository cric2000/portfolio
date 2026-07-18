import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight md:leading-tight max-w-[800px]">
        {title}
      </h2>
      {description && (
        <p className="text-base text-muted-foreground max-w-2xl mt-2 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
