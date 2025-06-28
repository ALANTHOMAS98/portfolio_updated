import { FileDownIcon } from "lucide-react"

export const ResumeSection = () => {
  return (
    <section className="py-20" id="resume">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-white dark:bg-zinc-900 rounded-xl shadow-md p-8 text-center border border-gray-200 dark:border-zinc-700">
          <div className="flex justify-center mb-4">
            <FileDownIcon className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Download My Resume</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Get a detailed overview of my experience, skills, and achievements
          </p>
          <a
            href="/alan-resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
            Download Resume (PDF)
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Professional PDF from Vercel Blob Storage
          </p>
          <p className="text-sm text-gray-500">Last updated: December 2024</p>
        </div>
      </div>
    </section>
  )
}

