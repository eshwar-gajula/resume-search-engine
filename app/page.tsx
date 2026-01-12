"use client"

import { useState, useEffect } from "react"
import { mockJobs } from "@/data/jobs"
import { JobList } from "@/components/JobList"
import { JobDescription } from "@/components/JobDescription"
import { JobDescriptionModal } from "@/components/JobDescriptionModal"
import { Briefcase, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function JobDiscoveryPage() {
  const [selectedJobId, setSelectedJobId] = useState<string | null>(mockJobs[0]?.id || null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const selectedJob = mockJobs.find((job) => job.id === selectedJobId) || null

  const filteredJobs = mockJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleJobSelect = (jobId: string) => {
    setSelectedJobId(jobId)
    if (isMobile) {
      setIsModalOpen(true)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header - LinkedIn style */}
      <header className="border-b bg-white dark:bg-gray-900 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded bg-blue-600">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold hidden sm:block">JobConnect</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-4 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search jobs by title, company, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="pb-4 md:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - LinkedIn-style split layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"} available
          </h2>
          <p className="text-muted-foreground">Find your next career opportunity</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
          {/* Job List - Full width on mobile/tablet, 2/5 on desktop */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
              <JobList jobs={filteredJobs} selectedJobId={selectedJobId} onJobSelect={handleJobSelect} />
              {filteredJobs.length === 0 && (
                <div className="bg-white dark:bg-gray-900 rounded-lg p-8 text-center">
                  <p className="text-muted-foreground">No jobs found matching your search.</p>
                </div>
              )}
            </div>
          </div>

          {/* Job Description - Hidden on mobile/tablet, visible on desktop (3/5 width) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <JobDescription job={selectedJob} />
            </div>
          </div>
        </div>
      </main>

      <JobDescriptionModal job={selectedJob} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
