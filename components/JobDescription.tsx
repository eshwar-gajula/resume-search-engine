import type { JobDescriptionProps } from "@/types/job"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Briefcase, DollarSign, Calendar, Building2, Users, Share2, Bookmark } from "lucide-react"
import Link from "next/link"

export function JobDescription({ job }: JobDescriptionProps) {
  if (!job) {
    return (
      <Card className="p-12 bg-white dark:bg-gray-900 flex items-center justify-center min-h-[400px]">
        <div className="text-center text-muted-foreground">
          <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <p className="text-lg">Select a job to view details</p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-0 bg-white dark:bg-gray-900 overflow-hidden border-gray-200 dark:border-gray-800">
      {/* Header Section */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex gap-4 mb-4">
          {/* Company Logo */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="text-2xl md:text-3xl font-bold mb-1 text-gray-900 dark:text-gray-100">{job.title}</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">{job.company}</p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Posted {new Date(job.postedDate).toLocaleDateString()}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {Math.floor(Math.random() * 50 + 20)} applicants
              </span>
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-xs mb-1">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experience</span>
            </div>
            <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">{job.experienceRange}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-xs mb-1">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Job Type</span>
            </div>
            <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">{job.type}</p>
          </div>
          {job.salary && (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-xs mb-1">
                <DollarSign className="w-3.5 h-3.5" />
                <span>Salary</span>
              </div>
              <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">{job.salary}</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link href={`/apply/${job.id}`} className="flex-1">
            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Apply now
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-gray-300 dark:border-gray-700 bg-transparent">
            <Bookmark className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-gray-300 dark:border-gray-700 bg-transparent">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="p-6 max-h-[calc(100vh-400px)] overflow-y-auto">
        {/* Job Summary */}
        <div className="mb-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{job.summary}</p>
        </div>

        <Separator className="my-6" />

        {/* Job Description */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">About the role</h2>
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{job.description}</p>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Required Skills */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Required skills</h2>
          <div className="flex flex-wrap gap-2">
            {job.requiredSkills.map((skill) => (
              <Badge
                key={skill}
                variant="default"
                className="bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100 border-0"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Preferred Skills */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Nice to have</h2>
          <div className="flex flex-wrap gap-2">
            {job.preferredSkills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 border-0"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="my-6" />

        {/* Experience Requirements */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Experience requirements</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{job.experienceDetails}</p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <Link href={`/apply/${job.id}`}>
            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Apply for this position
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
