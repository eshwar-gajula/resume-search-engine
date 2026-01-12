"use client"

import type { JobCardProps } from "@/types/job"
import { MapPin, Briefcase, Building2, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function JobCard({ job, isSelected, onClick }: JobCardProps) {
  const daysAgo = Math.floor((new Date().getTime() - new Date(job.postedDate).getTime()) / (1000 * 60 * 60 * 24))

  return (
    <Card
      className={`p-4 cursor-pointer transition-all hover:shadow-md bg-white dark:bg-gray-900 border ${
        isSelected
          ? "border-blue-600 shadow-md ring-2 ring-blue-100 dark:ring-blue-900"
          : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
      }`}
      onClick={onClick}
    >
      <div className="flex gap-3">
        {/* Company Logo Placeholder */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Job Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base mb-1 text-gray-900 dark:text-gray-100 truncate">{job.title}</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{job.company}</p>

          <div className="flex flex-col gap-1.5 mb-3">
            <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">{job.location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
              <Briefcase className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{job.experienceRange}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
              <Clock className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{daysAgo === 0 ? "Posted today" : `Posted ${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`}</span>
            </div>
          </div>

          {/* Job Type Badge */}
          <Badge variant="secondary" className="text-xs">
            {job.type}
          </Badge>
        </div>
      </div>
    </Card>
  )
}
