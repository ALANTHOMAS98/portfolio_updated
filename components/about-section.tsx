export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a DevOps & Cloud Engineer with 3+ years of experience designing secure, scalable cloud infrastructure
              on AWS and Azure. Skilled in Docker, Kubernetes, Terraform, and CI/CD pipelines, with a strong focus on
              automation, cost optimization, and system hardening. I specialize in delivering secure and scalable
              cloud-native systems, consistently driving automation and reliability across deployments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Currently pursuing my Master's in Telecommunication Technologies and Networks Management at Riga Technical
              University, specializing in Internet Routing Security with research focus on BGP Hijacking and Route Leak
              Analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
