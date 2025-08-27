interface SkillBadgeProps {
  name: string
  level: number
  category: string
}

export function SkillBadge({ name, level, category }: SkillBadgeProps) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <div className="text-center">
        <div className="text-lg font-semibold mb-2 text-gray-900">{name}</div>
        <div className="text-sm text-gray-500 mb-3">{category}</div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${level}%` }}
          ></div>
        </div>
        <div className="text-sm font-medium text-blue-600">{level}%</div>
      </div>
    </div>
  )
}
