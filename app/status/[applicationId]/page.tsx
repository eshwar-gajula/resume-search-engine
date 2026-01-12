"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import type { ApplicationStatus } from "@/types/application"
import { StatusIndicator } from "@/components/StatusIndicator"
import { Button } from "@/components/ui/button"
import { Briefcase } from "lucide-react"
import Link from "next/link"

export default function StatusPage() {
  const params = useParams()
  const [status, setStatus] = useState<ApplicationStatus>("pending")

  const applicationId = params.applicationId as string

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomStatus = Math.random() > 0.5 ? "approved" : "pending"
      setStatus(randomStatus as ApplicationStatus)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <header className="border-b bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded bg-blue-600">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold">JobConnect</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <StatusIndicator status={status} jobTitle="Software Engineer" applicationId={applicationId} />

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-gray-300 dark:border-gray-700 bg-transparent"
            >
              Browse more jobs
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
