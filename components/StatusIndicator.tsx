import type { ApplicationStatus } from "@/types/application"
import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle, Loader2, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface StatusIndicatorProps {
  status: ApplicationStatus
  jobTitle: string
  applicationId: string
}

export function StatusIndicator({ status, jobTitle, applicationId }: StatusIndicatorProps) {
  const renderStatusContent = () => {
    switch (status) {
      case "pending":
        return (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
              <Loader2 className="w-10 h-10 text-blue-600 dark:text-blue-400 animate-spin" />
            </div>
            <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900">
              Under Review
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              Application submitted successfully
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto leading-relaxed mb-6">
              Thank you for applying to the{" "}
              <span className="font-semibold text-gray-900 dark:text-gray-100">{jobTitle}</span> position. Our
              recruitment team is reviewing your application and skill assessment responses.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Mail className="w-4 h-4" />
              <span>We'll notify you via email once a decision has been made</span>
            </div>
          </div>
        )

      case "approved":
        return (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <Badge className="mb-4 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900">
              Approved
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100">Congratulations!</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto leading-relaxed mb-6">
              Your application for the{" "}
              <span className="font-semibold text-gray-900 dark:text-gray-100">{jobTitle}</span> position has been
              approved. Our recruitment team will contact you soon to schedule the next steps in the interview process.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Mail className="w-4 h-4" />
              <span>Check your email for further instructions</span>
            </div>
          </div>
        )

      case "rejected":
        return (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
              <XCircle className="w-10 h-10 text-gray-600 dark:text-gray-400" />
            </div>
            <Badge className="mb-4 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
              Not Selected
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              Application not selected
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto leading-relaxed mb-6">
              Thank you for your interest in the{" "}
              <span className="font-semibold text-gray-900 dark:text-gray-100">{jobTitle}</span> position. After careful
              consideration, we've decided to move forward with other candidates whose experience more closely matches
              our current needs.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We encourage you to apply for other positions that match your skills
            </p>
          </div>
        )
    }
  }

  return (
    <Card className="p-8 md:p-12 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
      {renderStatusContent()}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-500">Application ID: {applicationId}</p>
      </div>
    </Card>
  )
}
