import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  level: number
  color: "cyan" | "pink" | "purple"
}

export function SkillBadge({ name, level, color }: SkillBadgeProps) {
  const colorClasses = {
    cyan: "border-cyan-500/50 bg-cyan-900/20",
    pink: "border-pink-500/50 bg-pink-900/20",
    purple: "border-purple-500/50 bg-purple-900/20",
  }

  const progressColorClasses = {
    cyan: "bg-cyan-500",
    pink: "bg-pink-500",
    purple: "bg-purple-500",
  }

  const textColorClasses = {
    cyan: "text-cyan-300",
    pink: "text-pink-300",
    purple: "text-purple-300",
  }

  return (
    <div
      className={cn(
        "border p-3 rounded-md relative overflow-hidden transition-all duration-300 hover:scale-105",
        colorClasses[color],
      )}
    >
      <div className="relative z-10">
        <div className="text-lg font-bold mb-2">{name}</div>
        <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
          <div className={cn("h-full rounded-full", progressColorClasses[color])} style={{ width: `${level}%` }}></div>
        </div>
        <div className={cn("text-right text-xs mt-1", textColorClasses[color])}>{level}%</div>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 -mr-8 -mt-8 opacity-10">
        <div
          className={cn(
            "w-full h-full rounded-full shadow-lg",
            color === "cyan"
              ? "bg-cyan-500 shadow-cyan-500/50"
              : color === "pink"
                ? "bg-pink-500 shadow-pink-500/50"
                : "bg-purple-500 shadow-purple-500/50",
          )}
        ></div>
      </div>
      <div className="absolute bottom-0 left-0 text-4xl opacity-5 font-bold">{name}</div>
    </div>
  )
}
