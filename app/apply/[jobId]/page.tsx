"use client"

import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { mockJobs } from "@/data/jobs"
import { applicationFormConfigs } from "@/data/applicationFormConfig"
import { DynamicForm } from "@/components/DynamicForm"
import type { ApplicationData } from "@/types/application"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Briefcase, Building2 } from "lucide-react"
import Link from "next/link"

export default function ApplyPage() {
  const params = useParams()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const jobId = params.jobId as string
  const job = mockJobs.find((j) => j.id === jobId)
  const formConfig = applicationFormConfigs[jobId]

  const handleSubmit = async (data: ApplicationData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    const applicationId = `app-${Date.now()}`
    router.push(`/skill-test/${applicationId}`)
  }

  if (!job || !formConfig) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4">
        <Card className="p-8 text-center max-w-md bg-white dark:bg-gray-900">
          <h2 className="text-xl font-semibold mb-2">Job Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The job you are looking for does not exist or is no longer available.
          </p>
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700">Back to Jobs</Button>
          </Link>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <header className="border-b bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded bg-blue-600">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold">JobConnect</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-6 -ml-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to jobs
          </Button>
        </Link>

        {/* Job Header Card */}
        <Card className="p-6 mb-6 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-1 text-gray-900 dark:text-gray-100">{job.title}</h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">{job.company}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{job.location}</p>
            </div>
          </div>
        </Card>

        {/* Application Form Card */}
        <Card className="p-8 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Apply for this position</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Please complete all required fields. Your application will be reviewed by our recruitment team within 2-3
              business days.
            </p>
          </div>

          <DynamicForm fields={formConfig.fields} onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </Card>
      </main>
    </div>
  )
}
