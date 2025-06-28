import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Youtube, ArrowDown, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-float" />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-accent-200 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-primary-300 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <Badge
              variant="secondary"
              className="mb-4 hover:scale-105 transition-transform duration-300 bg-primary-100 text-primary-700 border-primary-200"
            >
              <Sparkles className="h-3 w-3 mr-1" />
              DevOps & Cloud Engineer
            </Badge>

            <h1 className="text-4xl lg:text-7xl font-bold mb-6 font-display">
              <span className="gradient-text">Alan Thomas</span>
            </h1>

            <p className="text-xl lg:text-2xl text-secondary-600 mb-8 max-w-2xl leading-relaxed">
              Building <span className="text-primary-600 font-semibold">Secure</span>,{" "}
              <span className="text-accent-600 font-semibold">Scalable</span> Cloud Systems
              <br />
              <span className="text-sm lg:text-lg text-secondary-500 font-mono">Terraform • AWS • Kubernetes</span>
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button
                asChild
                size="lg"
                className="hover-lift bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg"
              >
                <a href="#contact">
                  Get In Touch
                  <ArrowDown className="h-4 w-4 ml-2 animate-bounce-gentle" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover-lift border-primary-200 hover:border-primary-300 hover:bg-primary-50 bg-transparent"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { href: "https://github.com/ALANTHOMAS98", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/alan-thomas-736b44270/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://www.youtube.com/@Latvian_Achayan", icon: Youtube, label: "YouTube" },
                { href: "mailto:alanthoma98@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover-glow hover:scale-110 transition-all duration-300 hover:bg-primary-50"
                >
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center animate-fade-in-down">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-slow" />
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-accent-500 p-2 hover-glow">
                <Image
                  src="/alan-profile.jpeg"
                  alt="Alan Thomas"
                  width={300}
                  height={300}
                  className="rounded-full object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg animate-float">
                <Badge variant="secondary" className="bg-success text-white">
                  Available
                </Badge>
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-2 shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Badge variant="secondary" className="bg-primary text-white">
                  3+ Years
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <ArrowDown className="h-6 w-6 text-secondary-400" />
      </div>
    </section>
  )
}
