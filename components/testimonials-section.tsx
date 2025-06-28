import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Joby John",
      title: "Manager - Business Analysis @ EY",
      credential: "CSPO",
      date: "June 27, 2025",
      relationship: "Worked together at Polus Solutions",
      content:
        "I've had the pleasure of working closely with Alan Thomas at Polus, where he consistently demonstrated deep expertise in both DevOps and cybersecurity. Alan isn't just technically sound—he's someone who brings calm, clarity, and strategic thinking even in the most high-pressure environments.\n\nFrom building robust CI/CD pipelines to tightening infrastructure security, Alan's contributions have been instrumental in driving both operational efficiency and risk mitigation. His ability to balance speed with security is rare and invaluable—especially in a fast-paced product environment.\n\nWhat sets Alan apart is his proactive mindset. He doesn't wait for problems to escalate—he anticipates, investigates, and solves them at the root. Whether it's container orchestration, compliance audits, or incident response, he's the person you want in charge.\n\nIf you're looking for someone who can lead cloud infrastructure and security with equal mastery, Alan is that person. Highly recommend him for any organization that values resilience, automation, and best-in-class engineering practices.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Suraj Jith Kizhakkethil",
      title: "Founder – Digital Marketing | Pilvera Infotech",
      credential: "",
      date: "June 26, 2025",
      relationship: "Marketing Manager + Peer at RTU",
      content:
        "I met Alan at Riga Technical University and quickly realized that he is a multi-talented individual with a clear vision for his future. I was truly impressed by his skills in computer science, especially considering that his academic background is in electronics and communication engineering.\n\nHe chose to follow his passion by stepping into a different field, which shows his determination and adaptability. Alan is not only highly skilled but also a genuinely supportive and caring person.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Ilgar Jafarli",
      title: "Student at Riga Technical University",
      credential: "",
      date: "June 26, 2025",
      relationship: "DevOps Workshop Peer",
      content:
        "Alan is very strong motivated student and DevOps engineer. We together worked on DevOps workshops in order to inform students' societies about opportunities and DevOps itself. Alan conducted the main DevOps workshop part, prepared lists of attendees and did all the marketing affairs of this event among students.\n\nI strongly appreciate the willingness to make more people educated about DevOps and opportunities in that industry. In conclusion, I offer my highest recommendation for Alan. His exceptional motivation, technical proficiency, and collaborative spirit distinguish him as a promising DevOps professional and a dedicated student. I am confident that he will excel in any academic or professional environment he chooses to pursue.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Rahana Raju",
      title: "Master's Student – Embedded Systems @ Hochschule Wismar",
      credential: "",
      date: "June 23, 2025",
      relationship: "Junior from MBC College",
      content:
        "I had the privilege of knowing Alan during our time in the Electronics and Communication Engineering department. Alan consistently stood out for his leadership and dedication.\n\nAs the Department Student Coordinator, he facilitated smooth communication between faculty and students, and his organizational skills were evident when he led the successful execution of Navritri 2020, a national-level project competition.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Albert Shaju",
      title: "Software Engineer – Nexiva Services",
      credential: "",
      date: "June 23, 2025",
      relationship: "Worked together at Nexiva",
      content:
        "I had the privilege of working with Alan at Nexiva Services, where he consistently impressed everyone with his depth of knowledge in DevOps and cloud infrastructure.\n\nAlan played a key role in streamlining our CI/CD pipelines, introducing automation practices that drastically improved deployment speed and reliability.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      {testimonial.credential && (
                        <Badge variant="secondary" className="text-xs">
                          {testimonial.credential}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{testimonial.title}</p>
                    <p className="text-xs text-muted-foreground mb-2">
                      {testimonial.date} • {testimonial.relationship}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm leading-relaxed whitespace-pre-line">{testimonial.content}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
