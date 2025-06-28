import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"
import { ResumeDownload } from "./resume-download"

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Resume</h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <FileText className="h-16 w-16 text-primary" />
              </div>
              <CardTitle className="text-2xl">Download My Resume</CardTitle>
              <p className="text-muted-foreground">
                Get a detailed overview of my experience, skills, and achievements
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <ResumeDownload />
              <p className="text-sm text-muted-foreground mt-4">Last updated: December 2024</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
