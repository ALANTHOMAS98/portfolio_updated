import { list } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const files = await list()

    // Look for any PDF file that contains "resume", "cv", or "Alan" in the name
    const resumeFile = files.blobs.find((blob) => {
      const filename = blob.pathname.toLowerCase()
      return (
        (filename.includes("resume") ||
          filename.includes("cv") ||
          filename.includes("alan") ||
          filename.includes("devops") ||
          blob.pathname.includes("resume/")) &&
        filename.endsWith(".pdf")
      )
    })

    if (resumeFile) {
      return NextResponse.json({ url: resumeFile.url })
    } else {
      return NextResponse.json({ url: null }, { status: 404 })
    }
  } catch (error) {
    console.error("Error getting resume URL:", error)
    return NextResponse.json({ error: "Failed to get resume URL" }, { status: 500 })
  }
}
