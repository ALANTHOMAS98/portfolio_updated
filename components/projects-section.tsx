import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Zap, Shield, Gauge } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Infrastructure as Code (IaC) with ArgoCD GitOps",
      description:
        "Provisioned and managed AWS EKS with Terraform, integrated GitOps using ArgoCD, packaged applications with Helm, and used Prometheus + Grafana for monitoring.",
      technologies: ["AWS EKS", "Terraform", "ArgoCD", "Helm", "Prometheus", "Grafana"],
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Serverless To-Do App on AWS",
      description:
        "Used AWS Lambda, API Gateway, DynamoDB, S3, IAM, CloudFormation, and CloudWatch to build a secure, scalable, and serverless application backend.",
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudFormation", "CloudWatch"],
      icon: Shield,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Automated CI/CD for Microservices App",
      description:
        "Built and deployed an e-commerce app using Docker + Kubernetes on AWS EKS with Jenkins, GitLab CI, Ansible, and ELK stack for observability.",
      technologies: ["Docker", "Kubernetes", "AWS EKS", "Jenkins", "GitLab CI", "Ansible", "ELK Stack"],
      icon: Gauge,
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Real-world DevOps and cloud infrastructure projects showcasing modern practices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="h-full flex flex-col hover-lift group border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    <project.icon className="h-6 w-6" />
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="text-xs bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200 cursor-default"
                      style={{ animationDelay: `${index * 0.2 + techIndex * 0.05}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="flex-1 hover-glow border-primary-200 hover:border-primary-300 hover:bg-primary-50 bg-transparent"
                  >
                    <a href="https://github.com/ALANTHOMAS98" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 hover-glow border-accent-200 hover:border-accent-300 hover:bg-accent-50 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
