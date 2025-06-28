import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Heart } from "lucide-react"
import Image from "next/image"

export function BlogSection() {
  const blogPosts = [
    {
      title: "Automated CI/CD Pipeline for a Microservices E-commerce App on AWS EKS",
      excerpt:
        "In this step-by-step beginner-friendly guide, we'll build a complete CI/CD pipeline for a containerized e-commerce application using AWS EKS, Docker, and modern DevOps practices.",
      image: "/blog-thumbnails/cicd-pipeline.png",
      date: "3 days ago",
      readTime: "12 min read",
      claps: "8",
      tags: ["AWS", "EKS", "CI/CD", "Microservices"],
      url: "https://medium.com/@alanthecloudarchitect",
    },
    {
      title: "Deploy Scalable Kubernetes Apps with Terraform & GitOps using ArgoCD on AWS EKS",
      excerpt:
        "In this guide, we'll walk through how to provision an Amazon EKS cluster using Terraform, and then set up GitOps-style deployments with ArgoCD for scalable application management.",
      image: "/blog-thumbnails/kubernetes-terraform.png",
      date: "3 days ago",
      readTime: "15 min read",
      claps: "4",
      tags: ["Terraform", "ArgoCD", "GitOps", "Kubernetes"],
      url: "https://medium.com/@alanthecloudarchitect",
    },
    {
      title: "Build a Serverless To-Do App on AWS Using Lambda, API Gateway & DynamoDB—No Server Needed!",
      excerpt:
        "In this article, you'll learn how to build a fully serverless To-Do application using AWS Lambda, API Gateway, and DynamoDB. Perfect for understanding serverless architecture patterns.",
      image: "/blog-thumbnails/serverless-todo.png",
      date: "5 days ago",
      readTime: "10 min read",
      claps: "12",
      tags: ["Serverless", "AWS Lambda", "DynamoDB", "API Gateway"],
      url: "https://medium.com/@alanthecloudarchitect",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Blog Articles</h2>

        {/* Author info */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
              </div>
              <CardTitle className="text-2xl">Alanthomas on Medium</CardTitle>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                DevOps & Cloud engineer sharing insights on AWS, automation, CI/CD, and tech careers. Building scalable
                solutions, one blog at a time.
              </p>
              <div className="flex justify-center gap-4 text-sm text-muted-foreground mt-2">
                <span>4 followers</span>
                <span>•</span>
                <span>Latest articles</span>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild size="lg">
                <a href="https://medium.com/@alanthecloudarchitect" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Follow on Medium
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-1 mb-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {post.date} • {post.readTime}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Heart className="h-4 w-4" />
                    <span>{post.claps} claps</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read More
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <a href="https://medium.com/@alanthecloudarchitect" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              View All Articles on Medium
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
