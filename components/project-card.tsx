import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  category: string
}

export function ProjectCard({ title, description, tags, category }: ProjectCardProps) {
  return (
    <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            {category}
          </Badge>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-600 hover:bg-gray-50">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <a
          href="#"
          className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 transition-colors"
        >
          Learn More <ExternalLink className="h-3 w-3" />
        </a>
      </CardFooter>
    </Card>
  )
}
