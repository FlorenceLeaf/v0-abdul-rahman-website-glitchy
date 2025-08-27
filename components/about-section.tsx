import { Card, CardContent } from "@/components/ui/card"
import { Code, Cloud, Network, Cpu } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Software Development",
      description:
        "Experienced in Python programming with a focus on creating robust, scalable applications and innovative solutions.",
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Specialized in computer vision, neural networks, and AI integration for real-world applications.",
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description:
        "Proficient in Azure cloud services, virtualization, and system administration for enterprise environments.",
    },
    {
      icon: Network,
      title: "Network Administration",
      description: "Hands-on experience with LAN/VLAN setup, network security, and infrastructure management.",
    },
  ]

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Professional Background</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              I am a dedicated Python developer with extensive experience in artificial intelligence, machine learning
              integration, and cloud computing solutions. My passion lies in creating innovative technologies that solve
              real-world problems.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a strong foundation in system administration and networking, I bring a comprehensive understanding of
              both software development and infrastructure management to every project.
            </p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Key Achievements</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Developed advanced gesture recognition software for hands-free device control
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Implemented enterprise VM management systems with Active Directory integration
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Designed and deployed secure network infrastructures for various organizations
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Created interactive applications combining storytelling with advanced programming
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2 text-gray-900">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
