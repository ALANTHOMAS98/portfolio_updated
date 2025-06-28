import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ProjectsSection } from "@/components/projects-section"
import { YouTubeSection } from "@/components/youtube-section"
import { BlogSection } from "@/components/blog-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ResumeSection } from "@/components/resume-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <YouTubeSection />
      <BlogSection />
      <TestimonialsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
