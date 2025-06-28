import { Download } from "lucide-react"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Resume</h2>
        <div className="max-w-xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Download className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">Download My Resume</CardTitle>
              <p className="text-muted-foreground">
                Get a detailed overview of my experience, skills, and achievements
              </p>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <Button asChild className="px-6">
                <a href="/alan-resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume (PDF)
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Professional PDF from Vercel Blob Storage
              </p>
              <p className="text-xs text-muted-foreground">
                Last updated: December 2024
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

