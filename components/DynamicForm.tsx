"use client"

import type React from "react"

// DynamicForm Component
// Renders a dynamic form based on configuration from the backend
// Handles validation and file uploads
// Backend API would provide form configuration: GET /api/jobs/:jobId/application-form

import { useState } from "react"
import type { FormField, ApplicationData } from "@/types/application"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"

interface DynamicFormProps {
  fields: FormField[]
  onSubmit: (data: ApplicationData) => void
  isSubmitting?: boolean
}

export function DynamicForm({ fields, onSubmit, isSubmitting = false }: DynamicFormProps) {
  const [formData, setFormData] = useState<ApplicationData>({})
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (fieldId: string, value: string | File | number) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }))
    // Clear error when user starts typing
    if (errors[fieldId]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[fieldId]
        return newErrors
      })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    fields.forEach((field) => {
      if (field.required && !formData[field.id]) {
        newErrors[field.id] = `${field.label} is required`
      }

      // Validate file types
      if (field.type === "file" && formData[field.id] instanceof File) {
        const file = formData[field.id] as File
        const acceptedTypes = field.accept?.split(",").map((t) => t.trim()) || []
        const fileExtension = "." + file.name.split(".").pop()

        if (!acceptedTypes.some((type) => fileExtension === type)) {
          newErrors[field.id] = `Please upload a valid file type (${field.accept})`
        }
      }

      // Validate email
      if (field.id === "email" && formData[field.id]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData[field.id] as string)) {
          newErrors[field.id] = "Please enter a valid email address"
        }
      }

      // Validate year
      if (field.type === "year" && formData[field.id]) {
        const year = Number(formData[field.id])
        const currentYear = new Date().getFullYear()
        if (year < 1950 || year > currentYear) {
          newErrors[field.id] = `Please enter a valid year (1950-${currentYear})`
        }
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  const renderField = (field: FormField) => {
    const commonProps = {
      id: field.id,
      required: field.required,
    }

    switch (field.type) {
      case "text":
        return (
          <Input
            {...commonProps}
            type="text"
            placeholder={field.placeholder}
            value={(formData[field.id] as string) || ""}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            maxLength={field.maxLength}
          />
        )

      case "number":
        return (
          <Input
            {...commonProps}
            type="number"
            placeholder={field.placeholder}
            value={(formData[field.id] as number) || ""}
            onChange={(e) => handleInputChange(field.id, Number(e.target.value))}
            min={0}
          />
        )

      case "year":
        return (
          <Input
            {...commonProps}
            type="number"
            placeholder={field.placeholder || "YYYY"}
            value={(formData[field.id] as number) || ""}
            onChange={(e) => handleInputChange(field.id, Number(e.target.value))}
            min={1950}
            max={new Date().getFullYear()}
          />
        )

      case "file":
        return (
          <div className="space-y-2">
            <Input
              {...commonProps}
              type="file"
              accept={field.accept}
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  handleInputChange(field.id, file)
                }
              }}
            />
            {formData[field.id] instanceof File && (
              <p className="text-xs text-muted-foreground">Selected: {(formData[field.id] as File).name}</p>
            )}
          </div>
        )

      case "textarea":
        return (
          <Textarea
            {...commonProps}
            placeholder={field.placeholder}
            value={(formData[field.id] as string) || ""}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            maxLength={field.maxLength}
            rows={4}
            className="resize-none"
          />
        )

      case "select":
        return (
          <Select
            value={(formData[field.id] as string) || ""}
            onValueChange={(value) => handleInputChange(field.id, value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )

      default:
        return null
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map((field) => (
        <div key={field.id} className="space-y-2">
          <Label htmlFor={field.id}>
            {field.label}
            {field.required && <span className="text-destructive ml-1">*</span>}
          </Label>
          {renderField(field)}
          {field.maxLength && (field.type === "text" || field.type === "textarea") && (
            <p className="text-xs text-muted-foreground">
              {(formData[field.id] as string)?.length || 0}/{field.maxLength} characters
            </p>
          )}
          {errors[field.id] && <p className="text-xs text-destructive">{errors[field.id]}</p>}
        </div>
      ))}

      <Card className="p-4 bg-muted/50">
        <p className="text-xs text-muted-foreground leading-relaxed text-pretty">
          By submitting this application, you agree to our processing of your personal data in accordance with our
          privacy policy.
        </p>
      </Card>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  )
}
