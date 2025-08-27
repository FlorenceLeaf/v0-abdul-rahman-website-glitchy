import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProfessionalHeader } from "@/components/professional-header"
import { AboutSection } from "@/components/about-section"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <ProfessionalHeader />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-2">AR</div>
                <div className="text-sm text-blue-500 uppercase tracking-wider font-medium">Developer</div>
              </div>
            </div>

            <div className="text-center lg:text-left flex-1">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">Abdul Rahman</h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-600 leading-relaxed">
                Python Developer & AI/ML Solutions Specialist
              </p>
              <p className="text-lg mb-8 text-gray-500 max-w-2xl">
                Experienced in artificial intelligence, machine learning integration, cloud computing, and network
                administration. Passionate about creating innovative solutions that bridge technology and real-world
                applications.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <a href="#contact">Get In Touch</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  asChild
                >
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
              <div className="flex gap-4 justify-center lg:justify-start mt-8">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <a href="https://github.com/FlorenceLeaf" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/abdul-rahman-alrn8686260775/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <a href="mailto:defender1503@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dedicated developer with expertise in Python programming, AI/ML solutions, and cloud technologies
            </p>
          </div>
          <AboutSection />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Technical Skills</h2>
            <p className="text-xl text-gray-600">Technologies and tools I work with</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <SkillBadge name="Python" level={85} category="Programming" />
            <SkillBadge name="Azure" level={80} category="Cloud" />
            <SkillBadge name="Networking" level={85} category="Infrastructure" />
            <SkillBadge name="AI & ML" level={80} category="Data Science" />
            <SkillBadge name="Computer Vision" level={85} category="AI" />
            <SkillBadge name="Cloud Computing" level={75} category="Infrastructure" />
            <SkillBadge name="System Administration" level={80} category="Operations" />
            <SkillBadge name="AutoCAD" level={70} category="Design" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Projects</h2>
            <p className="text-xl text-gray-600">A selection of my recent work and contributions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Waive - Gesture Recognition System"
              description="Advanced hand gesture recognition software enabling hands-free device control using computer vision and MediaPipe. Designed for presentation environments and accessibility applications."
              tags={["Python", "Computer Vision", "MediaPipe", "OpenCV"]}
              category="AI/ML"
            />
            <ProjectCard
              title="Interactive Text-Based Game"
              description="A narrative-driven mini-game featuring multiple story paths and karma-based decision making. Demonstrates advanced Python programming and user experience design."
              tags={["Python", "Game Development", "Storytelling", "UI/UX"]}
              category="Software Development"
            />
            <ProjectCard
              title="Enterprise VM Management System"
              description="Comprehensive virtual machine deployment and management solution with Windows Server administration, Active Directory integration, and network configuration."
              tags={["Windows Server", "Active Directory", "Virtualization", "Networking"]}
              category="Infrastructure"
            />
            <ProjectCard
              title="Network Infrastructure Setup"
              description="Design and implementation of enterprise-grade network infrastructure including LAN/VLAN configuration, gateway management, and security protocols."
              tags={["Networking", "VLAN", "Security", "Infrastructure"]}
              category="Networking"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
            <p className="text-xl text-gray-600">Let's discuss how we can work together on your next project</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300">© {new Date().getFullYear()} Abdul Rahman. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="mailto:defender1503@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                defender1503@gmail.com
              </a>
              <div className="flex gap-4">
                <a
                  href="https://github.com/FlorenceLeaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdul-rahman-alrn8686260775/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
