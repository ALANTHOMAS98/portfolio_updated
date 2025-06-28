import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/ALANTHOMAS98" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/alan-thomas-736b44270/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://medium.com/@alanthecloudarchitect" target="_blank" rel="noopener noreferrer">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.youtube.com/@Latvian_Achayan" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:alanthoma98@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
          {/* Removed admin panel link for security */}
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Alan Thomas | Powered by v0</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
