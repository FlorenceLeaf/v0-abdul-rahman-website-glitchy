import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlitchText } from "@/components/glitch-text"
import { TerminalSection } from "@/components/terminal-section"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"
import { CyberHeader } from "@/components/cyber-header"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background grid effect - CSS only */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#ff00ff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="relative z-10">
        <CyberHeader />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden border-b border-pink-500/30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
          <div className="max-w-5xl mx-auto relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-lg overflow-hidden border-2 border-cyan-500 shadow-[0_0_15px_rgba(0,255,255,0.5)] flex items-center justify-center bg-gradient-to-br from-blue-900/30 to-purple-900/30">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(0,255,255,0.1)_50%,rgba(0,255,255,0.1)_75%,transparent_75%,transparent)] [background-size:20px_20px] animate-pulse"></div>
                <div className="text-center z-10">
                  <div className="text-5xl font-bold text-cyan-400 mb-2">&lt;/&gt;</div>
                  <div className="text-xs text-pink-400 uppercase tracking-widest">Abdul_Rahman</div>
                </div>
              </div>

              <div className="text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600">
                  <GlitchText>Abdul_Rahman</GlitchText>
                </h1>
                <p className="text-xl md:text-2xl mb-6 text-cyan-300/80">
                  <span className="text-pink-500">&gt;</span> Python Programmer <span className="text-pink-500">|</span>{" "}
                  Artificial Intelligence and Machine Learning Integration/Solutions{" "}
                  <span className="text-pink-500">|</span> Cloud and Networking Enthusiast
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-md border-cyan-500 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300"
                    asChild
                  >
                    <a href="https://github.com/FlorenceLeaf" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-md border-pink-500 text-pink-400 hover:bg-pink-950 hover:text-pink-300"
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
                    variant="outline"
                    size="icon"
                    className="rounded-md border-purple-500 text-purple-400 hover:bg-purple-950 hover:text-purple-300"
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
        <section id="about" className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 border-b border-cyan-500/50 pb-2 inline-block text-cyan-400">
              <span className="text-pink-500">&gt;</span> ABOUT_ME
            </h2>
            <TerminalSection />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4 bg-gradient-to-b from-transparent to-purple-900/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 border-b border-pink-500/50 pb-2 inline-block text-pink-400">
              <span className="text-cyan-500">&gt;</span> SKILLS.exe
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillBadge name="Python" level={80} color="cyan" />
              <SkillBadge name="Azure" level={75} color="pink" />
              <SkillBadge name="Networking" level={80} color="purple" />
              <SkillBadge name="AI&ML solutions" level={75} color="cyan" />
              <SkillBadge name="Computer Vision" level={75} color="pink" />
              <SkillBadge name="Cloud" level={70} color="purple" />
              <SkillBadge name="Algorithmic Solutions" level={65} color="cyan" />
              <SkillBadge name="Neural Networks" level={60} color="pink" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 border-b border-purple-500/50 pb-2 inline-block text-purple-400">
              <span className="text-cyan-500">&gt;</span> PROJECTS.sys
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ProjectCard
                title="Waive"
                description="A Hand Symbol and Gesture Recognition Software for hands-free control of devices and systems."
                tags={["Python", "Computer Vision", "Mediapipe"]}
                color="cyan"
              />
              <ProjectCard
                title="Text Based Mini Game"
                description="A Text based Mini Game with Alternate Endings Depending on The Players Choices And AccumiLated Karma."
                tags={["Python", "Canvas", "StoryTelling"]}
                color="pink"
              />
              <ProjectCard
                title="VM Deplayment And Managment With Windows Administration and Active Directory"
                description="Deplayment of Virtual Machines and Installing Windows With Systems Administraton and Networking set-up."
                tags={["Next.js", "Prisma", "Auth.js"]}
                color="purple"
              />
              <ProjectCard
                title="NeonChat"
                description="Real-time messaging app with cyberpunk aesthetics and encryption."
                tags={["Firebase", "React", "Encryption"]}
                color="cyan"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 bg-gradient-to-b from-transparent to-blue-900/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 border-b border-cyan-500/50 pb-2 inline-block text-cyan-400">
              <span className="text-pink-500">&gt;</span> CONTACT.sys
            </h2>
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-pink-500/30 text-center">
          <p className="text-cyan-400/70">
            <span className="text-pink-500">&copy;</span> {new Date().getFullYear()}{" "}
            <span className="text-pink-500">Abdul_Rahman</span> <span className="text-pink-500">|</span> All rights
            reserved
          </p>
          <p className="text-xs text-cyan-400/50 mt-2">
            Contact:{" "}
            <a href="mailto:defender1503@gmail.com" className="text-pink-500 hover:text-pink-400">
              Thanks for Visiting
            </a>{" "}
            <span className="text-pink-500">|</span>Made by Florence Hosted on Vercel
          </p>
        </footer>
      </div>
    </div>
  )
}
