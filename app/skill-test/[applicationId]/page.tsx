"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { getSkillTestForApplication } from "@/data/skillTest"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Briefcase, AlertTriangle, CheckCircle2, Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function SkillTestPage() {
  const params = useParams()
  const router = useRouter()
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const applicationId = params.applicationId as string
  const skillTest = getSkillTestForApplication(applicationId, "Software Engineer")

  const answeredCount = Object.values(answers).filter((a) => a.trim()).length
  const progress = (answeredCount / skillTest.questions.length) * 100

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const handleSubmit = async () => {
    const unanswered = skillTest.questions.filter((q) => !answers[q.id]?.trim())
    if (unanswered.length > 0) {
      alert("Please answer all questions before submitting.")
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    router.push(`/status/${applicationId}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <header className="border-b bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded bg-blue-600">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-lg sm:text-xl font-semibold">JobConnect</h1>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span className="hidden sm:inline">Unlimited time</span>
              <span className="sm:hidden">No limit</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Header Card */}
        <Card className="p-4 sm:p-6 mb-4 sm:mb-6 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            Skill Assessment
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">{skillTest.jobTitle}</p>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-gray-600 dark:text-gray-400">Progress</span>
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {answeredCount} of {skillTest.questions.length}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </Card>

        {/* Instructions */}
        <Card className="p-4 sm:p-6 mb-4 sm:mb-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
          <div className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold mb-2 text-sm sm:text-base text-gray-900 dark:text-gray-100">Instructions</h2>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {skillTest.instructions}
              </p>
            </div>
          </div>
        </Card>

        {/* Plagiarism Warning */}
        <Alert className="mb-4 sm:mb-6 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
          <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600 dark:text-amber-500" />
          <AlertDescription className="text-xs sm:text-sm text-amber-900 dark:text-amber-200">
            <strong>Important:</strong> We use advanced AI and plagiarism detection systems. All responses must be your
            original work.
          </AlertDescription>
        </Alert>

        {/* Questions */}
        <div className="space-y-4 sm:space-y-6">
          {skillTest.questions.map((question, index) => (
            <Card
              key={question.id}
              className="p-4 sm:p-6 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-start gap-2 sm:gap-3 mb-4">
                <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-semibold text-xs sm:text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <Label className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
                    Question {index + 1}
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                </div>
              </div>

              <p className="text-xs sm:text-sm mb-4 text-gray-700 dark:text-gray-300 leading-relaxed sm:ml-11">
                {question.question}
              </p>

              <div className="sm:ml-11">
                {question.type === "mcq" && question.options ? (
                  <RadioGroup
                    value={answers[question.id] || ""}
                    onValueChange={(value) => handleAnswerChange(question.id, value)}
                    className="space-y-3"
                  >
                    {question.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className="flex items-start space-x-3 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                        onClick={() => handleAnswerChange(question.id, option)}
                      >
                        <RadioGroupItem value={option} id={`${question.id}-${optionIndex}`} className="mt-0.5" />
                        <Label
                          htmlFor={`${question.id}-${optionIndex}`}
                          className="flex-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300 cursor-pointer leading-relaxed"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                ) : (
                  <>
                    <Textarea
                      value={answers[question.id] || ""}
                      onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                      placeholder="Type your answer here..."
                      rows={question.type === "code" ? 10 : 6}
                      className="resize-none font-mono text-xs sm:text-sm bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      {answers[question.id]?.length || 0} characters
                    </p>
                  </>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Submit Section */}
        <Card className="p-4 sm:p-6 mt-4 sm:mt-6 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4">
            Once submitted, you cannot make changes. Please review your responses carefully.
          </p>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || answeredCount < skillTest.questions.length}
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base"
          >
            {isSubmitting ? "Submitting..." : "Submit assessment"}
          </Button>
        </Card>
      </main>
    </div>
  )
}
