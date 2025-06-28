"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import html2pdf from "html2pdf.js"

export function ResumeDownload() {
  // Since you uploaded your resume, let's use the direct URL you provided
  const resumeUrl =
    "https://x2acit8lt4zdobc0.public.blob.vercel-storage.com/AlanThomas_CV_3YEARS_DEVOPS-uiSblqnJpSLk6rtm8bV8OJ2j5I06rU.pdf"

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Alan_Thomas_Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const generateAndDownloadPDF = async () => {
    try {
      // Create the exact CV content as HTML with precise styling to match your original
      const resumeHTML = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            @page {
              margin: 0.75in;
              size: A4;
            }
            body {
              font-family: Arial, sans-serif;
              font-size: 11px;
              line-height: 1.4;
              margin: 0;
              padding: 0;
              color: #000;
            }
            .header {
              text-align: left;
              margin-bottom: 20px;
            }
            .name {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .title {
              font-size: 11px;
              margin-bottom: 10px;
              line-height: 1.3;
            }
            .contact-info {
              font-size: 10px;
              line-height: 1.5;
            }
            .section-title {
              font-size: 12px;
              font-weight: bold;
              margin: 18px 0 10px 0;
              text-transform: uppercase;
            }
            .job-entry {
              margin-bottom: 15px;
            }
            .job-header {
              margin-bottom: 5px;
            }
            .job-dates-location {
              font-size: 10px;
              margin-bottom: 2px;
            }
            .company-name {
              font-weight: bold;
              font-size: 11px;
              margin-bottom: 2px;
            }
            .job-title {
              font-size: 11px;
              margin-bottom: 5px;
            }
            .job-points {
              margin: 0;
              padding-left: 0;
              list-style: none;
            }
            .job-points li {
              margin-bottom: 3px;
              position: relative;
              padding-left: 12px;
              text-align: justify;
            }
            .job-points li:before {
              content: "•";
              position: absolute;
              left: 0;
              top: 0;
            }
            .skills-section {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 12px;
              margin-top: 10px;
            }
            .skill-item {
              margin-bottom: 8px;
            }
            .skill-title {
              font-weight: bold;
              margin-bottom: 3px;
            }
            .skill-content {
              font-size: 10px;
              line-height: 1.3;
            }
            .languages {
              margin-top: 10px;
            }
            .language-item {
              margin-bottom: 4px;
              font-weight: bold;
              font-size: 11px;
            }
            .language-cert {
              font-weight: normal;
              font-size: 10px;
              margin-left: 0;
            }
            .project-header {
              display: flex;
              justify-content: space-between;
              align-items: baseline;
              margin-bottom: 5px;
            }
            .project-title {
              font-weight: bold;
              font-size: 11px;
            }
            .project-date {
              font-size: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="name">ALAN THOMAS</div>
            <div class="title">DevOps & Cloud Engineer | Kubernetes | AWS | Terraform | CI/CD</div>
            <div class="contact-info">
              alanthoma98@gmail.com<br><br>
              +371 25126667<br><br>
              Marijas iela 1-9, Riga, Latvia<br><br>
              linkedin.com/in/alan-thomas-736b44270<br><br>
              https://medium.com/@alanthecloudarchitect<br><br>
              github.com/ALANTHOMAS98
            </div>
          </div>

          <div class="section-title">PROFESSIONAL SUMMARY</div>
          <div>
            DevOps Engineer with 3+ years of experience designing secure, scalable cloud infrastructure on AWS and Azure. Skilled in Docker, Kubernetes, Terraform, and CI/CD pipelines, with a strong focus on automation, cost optimization, and system hardening. I specialize in delivering secure and scalable cloud-native systems, consistently driving automation and reliability across deployments. Open to relocation: UAE | Europe | Remote.
          </div>

          <div class="section-title">WORK EXPERIENCE</div>
          
          <div class="job-entry">
            <div class="job-dates-location">06/2025 – present<br>Remote</div>
            <div class="company-name">Pilvera Infotech Solutions</div>
            <div class="job-title">Founder & IT Consultant</div>
            <ul class="job-points">
              <li>Designed and simulated 5+ cloud-native architectures targeting >99.9% uptime and rapid deployment</li>
              <li>Built CI/CD templates using GitLab CI, Docker, and Terraform, reducing setup time by 40%</li>
              <li>Developed internal delivery and uptime metrics, improving incident detection speed by 15%</li>
            </ul>
          </div>

          <div class="job-entry">
            <div class="job-dates-location">06/2025 – present<br>Remote</div>
            <div class="company-name">Nexiva Services</div>
            <div class="job-title">Senior DevOps Engineer</div>
            <ul class="job-points">
              <li>Architected 5+ cloud-native CI/CD pipelines on Kubernetes (EKS/AKS), cutting deployment time by 60% and increasing release frequency by 3x.</li>
              <li>Led Terraform and Helm-based infra automation, reducing manual errors by 85% and enabling consistent IaC provisioning across environments.</li>
              <li>Collaborated with cross-functional teams to implement cost-optimized CI/CD workflows, saving ~$10K/year in cloud infrastructure expenses.</li>
            </ul>
          </div>

          <div class="job-entry">
            <div class="job-dates-location">04/2021 – 08/2023<br>Trivandrum, India</div>
            <div class="company-name">Polus Solutions</div>
            <div class="job-title">DevOps Engineer</div>
            <ul class="job-points">
              <li>Received Spot Award (Sep 2022) for automating deployment pipelines, achieving an 80% reduction in release time.</li>
              <li>Deployed containerized services via Kubernetes (EKS/AKS), maintaining 99.9% uptime for production environments.</li>
              <li>Improved incident response times by 50% through ELK & Nagios integration and real-time alerting with Prometheus & Grafana.</li>
              <li>Hardened security posture with Fortinet firewall setup and OS-level lockdown, reducing vulnerability exposure by 70%.</li>
              <li>Integrated Shibboleth SSO and Active Directory, enhancing user authentication security and simplifying access control for 50+ users.</li>
            </ul>
          </div>

          <div class="section-title">PROJECTS</div>
          <div class="job-entry">
            <div class="project-header">
              <div class="project-title">Serverless Web Application on AWS</div>
              <div class="project-date">08/2024 – 08/2024</div>
            </div>
            <ul class="job-points">
              <li>Developed a fully serverless To-Do app using AWS Lambda and API Gateway, eliminating the need for server management and achieving 100% operational overhead reduction.</li>
              <li>Integrated AWS DynamoDB with auto-scaling, achieving <100ms latency for 500+ simulated user requests, ensuring high scalability and reliability.</li>
              <li>Used CloudFormation for 100% IaC-based deployments, cutting manual setup effort by 90% and boosting repeatability.</li>
              <li>Set up real-time observability with CloudWatch, improving incident detection speed by 50% through actionable logs and alarms.</li>
              <li>Enforced IAM least-privilege policies, enhancing access security and reducing misconfigurations by 70%.</li>
            </ul>
          </div>

          <div class="section-title">EDUCATION AND TRAINING</div>
          
          <div class="job-entry">
            <div class="job-dates-location">09/2023 – Present<br>Riga, Latvia</div>
            <div class="company-name">MASTERS IN TELECOMMUNICATION TECHNOLOGIES AND NETWORKS MANAGEMENT</div>
            <div class="job-title">Riga Technical University</div>
            <ul class="job-points">
              <li>Specializing in Internet Routing Security with a research focus on BGP Hijacking and Route Leak Analysis to improve the resilience of global internet infrastructure.</li>
              <li>Delivered a DevOps & Cloud workshop attended by 30+ students.</li>
            </ul>
          </div>

          <div class="job-entry">
            <div class="job-dates-location">08/2016 – 08/2020<br>Kerala, India</div>
            <div class="company-name">BACHELORS OF TECHNOLOGY IN ELECTRONICS AND COMMUNICATION</div>
            <div class="job-title">APJ Abdul Kalam Technological University</div>
            <ul class="job-points">
              <li>Acted as Student Coordinator (ECE) for 100+ peers, leading communication and coordination for 10+ academic and extracurricular events.</li>
              <li>Led a national-level competition (Navritri 2020) with participation from 20+ universities, enhancing technical leadership and project planning skills.</li>
              <li>As Active Member of NSS, IEEE, and IEDC, contributed to 5+ technical initiatives and 3+ community outreach programs improving team collaboration and visibility.</li>
            </ul>
          </div>

          <div class="section-title">SKILLS</div>
          <div class="skills-section">
            <div class="skill-item">
              <div class="skill-title">Cloud</div>
              <div class="skill-content">AWS (EKS, EC2, S3, Route53, CloudFormation), Azure (AKS), basic GCP</div>
            </div>
            <div class="skill-item">
              <div class="skill-title">CI/CD</div>
              <div class="skill-content">Jenkins, GitLab CI, ArgoCD, GitHub Actions</div>
            </div>
            <div class="skill-item">
              <div class="skill-title">Security</div>
              <div class="skill-content">IAM, Fortinet, Firewall (Linux/Windows), SSO (Shibboleth), VPC Security, SSL/TLS</div>
            </div>
            <div class="skill-item">
              <div class="skill-title">Tools</div>
              <div class="skill-content">Git, VS Code, Jira, Postman, VMware, VirtualBox</div>
            </div>
            <div class="skill-item">
              <div class="skill-title">Containers & IaC</div>
              <div class="skill-content">Docker, Kubernetes, Helm, Terraform, Ansible, AWS CDK</div>
            </div>
            <div class="skill-item">
              <div class="skill-title">Monitoring & Observability</div>
              <div class="skill-content">ELK Stack, Prometheus, Grafana, Nagios, CloudWatch</div>
            </div>
          </div>
          <div class="skill-item" style="margin-top: 8px;">
            <div class="skill-title">Scripting/Automation</div>
            <div class="skill-content">Bash, Git, Linux/Windows Admin, basic Python</div>
          </div>

          <div class="section-title">LANGUAGE SKILLS</div>
          <div class="languages">
            <div class="language-item">MALAYALAM</div>
            <div class="language-item">HINDI</div>
            <div class="language-item">ENGLISH</div>
            <div class="language-cert">EF SET English Certificate – CEFR Level C2 (Proficient)</div>
            <div class="language-item">LATVIAN</div>
          </div>
        </body>
        </html>
      `

      // Configure html2pdf options for exact layout
      const options = {
        margin: 0.75,
        filename: "Alan_Thomas_Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
        },
        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "portrait",
        },
      }

      // Generate and download PDF
      html2pdf().set(options).from(resumeHTML).save()
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Error generating PDF. Please try again.")
    }
  }

  return (
    <div className="text-center">
      <Button size="lg" className="w-full sm:w-auto" onClick={downloadResume}>
        <Download className="h-4 w-4 mr-2" />
        Download Resume (PDF)
      </Button>
      <p className="text-sm text-muted-foreground mt-2">Professional PDF from Vercel Blob Storage</p>
    </div>
  )
}
