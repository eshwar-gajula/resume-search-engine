import type { Job } from "@/types/job"

export const mockJobs: Job[] = [
  {
    id: "job-1",
    title: "Senior Frontend Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA (Remote)",
    experienceRange: "5-8 years",
    summary: "Build scalable web applications using React and Next.js for our growing platform.",
    description: `We're looking for a Senior Frontend Engineer to join our engineering team. You'll be responsible for building and maintaining our web applications, working closely with designers and backend engineers to deliver exceptional user experiences.

Key Responsibilities:
• Design and implement responsive, performant web applications
• Collaborate with cross-functional teams to define and ship new features
• Mentor junior engineers and contribute to technical decisions
• Optimize applications for maximum speed and scalability
• Write clean, maintainable code with comprehensive tests`,
    requiredSkills: ["React", "TypeScript", "Next.js", "CSS/Tailwind", "Git"],
    preferredSkills: ["Node.js", "GraphQL", "Testing (Jest/Cypress)", "CI/CD", "AWS"],
    experienceDetails:
      "5+ years of professional frontend development experience, with at least 2 years working with React and modern JavaScript frameworks.",
    type: "Full-time",
    salary: "$150,000 - $200,000",
    postedDate: "2026-01-10",
  },
  {
    id: "job-2",
    title: "Full Stack Developer",
    company: "StartupHub",
    location: "New York, NY",
    experienceRange: "3-5 years",
    summary: "Join our fast-paced startup to build innovative solutions with modern tech stack.",
    description: `StartupHub is seeking a talented Full Stack Developer to help us build the next generation of our platform. You'll work on both frontend and backend systems, contributing to architecture decisions and feature development.

What You'll Do:
• Develop features across the full stack (React, Node.js, PostgreSQL)
• Design and implement RESTful APIs
• Collaborate with product team to understand user needs
• Participate in code reviews and technical discussions
• Help scale our infrastructure as we grow`,
    requiredSkills: ["JavaScript", "React", "Node.js", "SQL", "RESTful APIs"],
    preferredSkills: ["TypeScript", "Docker", "Redis", "Microservices", "Agile"],
    experienceDetails:
      "3+ years of full-stack development experience. Experience with both frontend and backend technologies required.",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    postedDate: "2026-01-09",
  },
  {
    id: "job-3",
    title: "UI/UX Engineer",
    company: "DesignFirst Co.",
    location: "Remote",
    experienceRange: "2-4 years",
    summary: "Create beautiful, accessible interfaces that delight users across all devices.",
    description: `We're looking for a UI/UX Engineer who bridges design and development. You'll work closely with our design team to implement pixel-perfect interfaces while ensuring excellent user experience and accessibility.

Responsibilities:
• Implement design systems and component libraries
• Ensure accessibility standards (WCAG 2.1 AA)
• Create responsive layouts for mobile, tablet, and desktop
• Collaborate with designers to refine and iterate on designs
• Optimize frontend performance and animation`,
    requiredSkills: ["HTML/CSS", "JavaScript", "React", "Design Systems", "Accessibility"],
    preferredSkills: ["Figma", "Animation (Framer Motion)", "Storybook", "Tailwind CSS"],
    experienceDetails:
      "2+ years working at the intersection of design and development. Strong portfolio showcasing UI/UX work required.",
    type: "Remote",
    salary: "$100,000 - $140,000",
    postedDate: "2026-01-08",
  },
  {
    id: "job-4",
    title: "Backend Engineer",
    company: "DataScale Systems",
    location: "Austin, TX (Hybrid)",
    experienceRange: "4-7 years",
    summary: "Design and build robust backend systems that power our data processing platform.",
    description: `DataScale Systems is seeking an experienced Backend Engineer to help us build scalable, reliable backend services. You'll work on distributed systems, APIs, and data pipelines that process millions of requests daily.

What We're Looking For:
• Strong experience with backend development (Node.js, Python, or Go)
• Deep understanding of database design and optimization
• Experience building RESTful and GraphQL APIs
• Knowledge of microservices architecture
• Passion for writing clean, tested code`,
    requiredSkills: ["Node.js or Python", "PostgreSQL/MongoDB", "APIs", "Docker", "Git"],
    preferredSkills: ["Go", "Kubernetes", "Message Queues", "Redis", "AWS/GCP"],
    experienceDetails:
      "4+ years of backend development experience. Experience with distributed systems and high-traffic applications preferred.",
    type: "Full-time",
    salary: "$140,000 - $180,000",
    postedDate: "2026-01-07",
  },
  {
    id: "job-5",
    title: "Junior Frontend Developer",
    company: "LearnTech",
    location: "Boston, MA",
    experienceRange: "0-2 years",
    summary: "Start your career building educational technology that impacts millions of students.",
    description: `LearnTech is looking for a Junior Frontend Developer to join our team. This is a great opportunity for someone early in their career to work on meaningful projects, learn from experienced engineers, and grow their skills.

You'll Work On:
• Building and maintaining web applications used by students and educators
• Implementing responsive designs from mockups
• Writing tests and documentation
• Participating in code reviews
• Learning best practices and modern development workflows`,
    requiredSkills: ["HTML", "CSS", "JavaScript", "React basics", "Git"],
    preferredSkills: ["TypeScript", "Tailwind CSS", "Testing", "Accessibility"],
    experienceDetails:
      "0-2 years of professional experience. Bootcamp graduates and recent CS grads encouraged to apply. Portfolio or personal projects required.",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    postedDate: "2026-01-06",
  },
  {
    id: "job-6",
    title: "DevOps Engineer",
    company: "CloudNative Inc.",
    location: "Seattle, WA (Remote)",
    experienceRange: "5-8 years",
    summary: "Build and maintain cloud infrastructure that powers modern applications.",
    description: `CloudNative Inc. is seeking an experienced DevOps Engineer to manage and improve our cloud infrastructure. You'll work on automation, CI/CD pipelines, monitoring, and ensuring our systems are reliable and scalable.

Key Responsibilities:
• Design and maintain CI/CD pipelines
• Manage cloud infrastructure (AWS/Azure/GCP)
• Implement infrastructure as code (Terraform, CloudFormation)
• Monitor system performance and troubleshoot issues
• Collaborate with development teams on deployment strategies`,
    requiredSkills: ["AWS or Azure", "Docker", "Kubernetes", "CI/CD", "Linux"],
    preferredSkills: ["Terraform", "Monitoring (Datadog/Prometheus)", "Python/Bash", "Security"],
    experienceDetails:
      "5+ years of DevOps or SRE experience. Strong understanding of cloud platforms and containerization required.",
    type: "Remote",
    salary: "$150,000 - $190,000",
    postedDate: "2026-01-05",
  },
]
