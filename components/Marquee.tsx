import { cn } from "@/lib/utils"

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  vertical?: boolean
  repeat?: number
  speed?: number // Speed in seconds
  [key: string]: any
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  speed = 40, // Default speed (higher means slower)
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      style={{ "--duration": `${speed}s` } as React.CSSProperties} // Dynamic speed
      className={cn(
        "group flex overflow-hidden p-2 [--gap:0.30rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "mb-1 flex shrink-0 justify-around [gap:var(--gap)]",
              {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
              }
            )}
            style={{ animationDuration: `var(--duration)` }} // Apply speed dynamically
          >
            {children}
          </div>
        ))}
    </div>
  )
}
