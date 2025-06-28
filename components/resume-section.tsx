export const ResumeSection = () => {
  return (
    <section className="py-20" id="resume">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4">Resume</h2>
        <p className="mb-4">
          Click the button below to download my latest resume (PDF).
        </p>
        <a
          href="/alan-resume.pdf"
          download
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}

