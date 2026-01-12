export interface Job {
  id: string
  title: string
  company: string
  location: string
  experienceRange: string
  summary: string
  description: string
  requiredSkills: string[]
  preferredSkills: string[]
  experienceDetails: string
  type: "Full-time" | "Part-time" | "Contract" | "Remote"
  salary?: string
  postedDate: string
}

export interface JobListProps {
  jobs: Job[]
  selectedJobId: string | null
  onJobSelect: (jobId: string) => void
}

export interface JobCardProps {
  job: Job
  isSelected: boolean
  onClick: () => void
}

export interface JobDescriptionProps {
  job: Job | null
}
