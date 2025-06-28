import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Container, GitBranch, Shield, Monitor, Code } from "lucide-react"

export function TechStackSection() {
  const techStack = {
    Cloud: {
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      technologies: ["AWS", "Azure", "GCP (basic)"],
    },
    "Containers & IaC": {
      icon: Container,
      color: "from-purple-500 to-pink-500",
      technologies: ["Docker", "Kubernetes", "Helm", "Terraform", "Ansible"],
    },
    "CI/CD": {
      icon: GitBranch,
      color: "from-green-500 to-emerald-500",
      technologies: ["Jenkins", "GitLab CI", "ArgoCD", "GitHub Actions"],
    },
    "Monitoring & Observability": {
      icon: Monitor,
      color: "from-orange-500 to-red-500",
      technologies: ["ELK Stack", "Prometheus", "Grafana", "Nagios", "CloudWatch"],
    },
    Security: {
      icon: Shield,
      color: "from-red-500 to-pink-500",
      technologies: ["IAM", "Fortinet", "SSO (Shibboleth)", "SSL/TLS"],
    },
    "Scripting/Tools": {
      icon: Code,
      color: "from-indigo-500 to-purple-500",
      technologies: ["Bash", "Python (basic)", "Git", "VS Code", "Postman", "Jira", "VMware", "VirtualBox"],
    },
  }

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">Tech Stack</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, secure cloud infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([category, { icon: Icon, color, technologies }], index) => (
            <Card
              key={category}
              className="h-full hover-lift group border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-r ${color} text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary-600 transition-colors duration-300">
                    {category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="hover:scale-105 transition-transform duration-200 hover:bg-primary-100 hover:text-primary-700 cursor-default"
                      style={{ animationDelay: `${index * 0.1 + techIndex * 0.05}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
