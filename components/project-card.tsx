import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  color: "cyan" | "pink" | "purple"
}

export function ProjectCard({ title, description, tags, color }: ProjectCardProps) {
  const colorClasses = {
    cyan: "border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]",
    pink: "border-pink-500/50 hover:border-pink-400 hover:shadow-[0_0_15px_rgba(255,0,255,0.3)]",
    purple: "border-purple-500/50 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(128,0,255,0.3)]",
  }

  const titleColorClasses = {
    cyan: "text-cyan-400",
    pink: "text-pink-400",
    purple: "text-purple-400",
  }

  return (
    <Card className={cn("bg-black/80 border transition-all duration-300 overflow-hidden group", colorClasses[color])}>
      <div className="relative overflow-hidden h-24 flex items-center justify-center">
        <div
          className={cn(
            "absolute inset-0 opacity-20",
            color === "cyan"
              ? "bg-[linear-gradient(45deg,rgba(0,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(0,255,255,0.2)_50%,rgba(0,255,255,0.2)_75%,transparent_75%,transparent)]"
              : color === "pink"
                ? "bg-[linear-gradient(45deg,rgba(255,0,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,0,255,0.2)_50%,rgba(255,0,255,0.2)_75%,transparent_75%,transparent)]"
                : "bg-[linear-gradient(45deg,rgba(128,0,255,0.2)_25%,transparent_25%,transparent_50%,rgba(128,0,255,0.2)_50%,rgba(128,0,255,0.2)_75%,transparent_75%,transparent)]",
          )}
          style={{ backgroundSize: "20px 20px" }}
        ></div>
        <div
          className={cn(
            "text-4xl font-bold",
            color === "cyan" ? "text-cyan-500" : color === "pink" ? "text-pink-500" : "text-purple-500",
          )}
        >
          {title.charAt(0).toUpperCase()}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className={cn("text-xl font-bold mb-2", titleColorClasses[color])}>{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className={cn(
                "text-xs border-opacity-50",
                color === "cyan"
                  ? "border-cyan-500 text-cyan-300"
                  : color === "pink"
                    ? "border-pink-500 text-pink-300"
                    : "border-purple-500 text-purple-300",
              )}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <a
          href="https://yourprojecturl.com" // Replace with your actual project URL
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "text-xs flex items-center gap-1 transition-colors",
            color === "cyan"
              ? "text-cyan-400 hover:text-cyan-300"
              : color === "pink"
                ? "text-pink-400 hover:text-pink-300"
                : "text-purple-400 hover:text-purple-300",
          )}
        >
          View Project <ExternalLink className="h-3 w-3" />
        </a>
      </CardFooter>
    </Card>
  )
}
