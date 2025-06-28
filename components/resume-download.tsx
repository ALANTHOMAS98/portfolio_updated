// components/resume-download.tsx

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResumeDownload() {
  return (
    <Button asChild className="px-6">
      <a href="/alan-resume.pdf" download>
        <Download className="mr-2 h-4 w-4" />
        Download Resume (PDF)
      </a>
    </Button>
  )
}

