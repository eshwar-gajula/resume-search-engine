export type FormFieldType = "text" | "number" | "year" | "file" | "textarea" | "select"

export interface FormField {
  id: string
  label: string
  type: FormFieldType
  required: boolean
  placeholder?: string
  options?: string[] // For select fields
  accept?: string // For file inputs
  maxLength?: number // For text/textarea
}

export interface ApplicationFormConfig {
  jobId: string
  fields: FormField[]
}

export interface ApplicationData {
  [key: string]: string | File | number
}

export type ApplicationStatus = "pending" | "approved" | "rejected"

export interface Application {
  id: string
  jobId: string
  status: ApplicationStatus
  submittedAt: string
  data: ApplicationData
}

export interface SkillTestQuestion {
  id: string
  question: string
  type: "text" | "code" | "mcq" // Added mcq type for multiple choice questions
  options?: string[] // Added options array for MCQ questions
}

export interface SkillTest {
  applicationId: string
  jobTitle: string
  instructions: string
  questions: SkillTestQuestion[]
  timeLimit?: number // in minutes, undefined means unlimited
}
