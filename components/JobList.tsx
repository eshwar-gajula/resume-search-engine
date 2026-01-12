"use client"

import type { JobListProps } from "@/types/job"
import { JobCard } from "./JobCard"

export function JobList({ jobs, selectedJobId, onJobSelect }: JobListProps) {
  return (
    <div className="space-y-2">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} isSelected={selectedJobId === job.id} onClick={() => onJobSelect(job.id)} />
      ))}
    </div>
  )
}
