"use server"

import { put, list, del } from "@vercel/blob"
import { revalidatePath } from "next/cache"

export async function uploadFile(formData: FormData) {
  try {
    const file = formData.get("file") as File
    if (!file) {
      throw new Error("No file provided")
    }

    const blob = await put(file.name, file, {
      access: "public",
    })

    revalidatePath("/admin")
    return { success: true, url: blob.url, message: "File uploaded successfully" }
  } catch (error) {
    console.error("Upload error:", error)
    return { success: false, message: "Failed to upload file" }
  }
}

export async function uploadResume(formData: FormData) {
  try {
    const file = formData.get("resume") as File
    if (!file) {
      throw new Error("No resume file provided")
    }

    // Delete existing resume if it exists
    const existingFiles = await list({ prefix: "resume/" })
    for (const file of existingFiles.blobs) {
      await del(file.url)
    }

    const blob = await put(`resume/Alan_Thomas_Resume.pdf`, file, {
      access: "public",
    })

    revalidatePath("/admin")
    revalidatePath("/")
    return { success: true, url: blob.url, message: "Resume uploaded successfully" }
  } catch (error) {
    console.error("Resume upload error:", error)
    return { success: false, message: "Failed to upload resume" }
  }
}

export async function getResumeUrl() {
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

    return resumeFile?.url || null
  } catch (error) {
    console.error("Error getting resume URL:", error)
    return null
  }
}

export async function listFiles() {
  try {
    const files = await list()
    return files.blobs
  } catch (error) {
    console.error("Error listing files:", error)
    return []
  }
}

export async function deleteFile(url: string) {
  try {
    await del(url)
    revalidatePath("/admin")
    return { success: true, message: "File deleted successfully" }
  } catch (error) {
    console.error("Delete error:", error)
    return { success: false, message: "Failed to delete file" }
  }
}
