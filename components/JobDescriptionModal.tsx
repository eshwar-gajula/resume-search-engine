"use client"

import { useEffect } from "react"
import type { Job } from "@/types/job"
import { JobDescription } from "@/components/JobDescription"
import { X } from "lucide-react"

interface JobDescriptionModalProps {
  job: Job | null
  isOpen: boolean
  onClose: () => void
}

export function JobDescriptionModal({ job, isOpen, onClose }: JobDescriptionModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen || !job) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-x-0 bottom-0 top-16 z-50 lg:hidden">
        <div className="h-full bg-white dark:bg-gray-900 overflow-y-auto">
          {/* Close button */}
          <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b px-4 py-3 flex items-center justify-between">
            <h2 className="font-semibold text-lg">Job Details</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Job Description Content */}
          <div className="p-4">
            <JobDescription job={job} />
          </div>
        </div>
      </div>
    </>
  )
}
