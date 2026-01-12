import type { SkillTest } from "@/types/application"

export const mockSkillTests: Record<string, SkillTest> = {
  "app-1": {
    applicationId: "app-1",
    jobTitle: "Senior Frontend Engineer",
    instructions: `This skill assessment is designed to evaluate your technical knowledge and problem-solving abilities. Please answer all questions to the best of your ability.

Important Notes:
• You have unlimited time to complete this assessment
• All answers should be your own work
• We use AI and plagiarism detection tools to verify authenticity
• Select the best answer for each multiple-choice question
• You can submit your answers only once`,
    questions: [
      {
        id: "q1",
        question: "What is the primary purpose of React's useEffect hook?",
        type: "mcq",
        options: [
          "To manage component state",
          "To perform side effects in function components",
          "To create custom hooks",
          "To optimize component rendering",
        ],
      },
      {
        id: "q2",
        question: "Which of the following is NOT a valid way to handle async operations in React?",
        type: "mcq",
        options: [
          "Using async/await in useEffect",
          "Using Promises with .then()",
          "Using async function components directly",
          "Using libraries like React Query or SWR",
        ],
      },
      {
        id: "q3",
        question: "In Next.js, what is the difference between getStaticProps and getServerSideProps?",
        type: "mcq",
        options: [
          "getStaticProps runs at build time, getServerSideProps runs on each request",
          "getStaticProps is for client-side, getServerSideProps is for server-side",
          "getStaticProps is deprecated, getServerSideProps is the new standard",
          "There is no difference, they are aliases",
        ],
      },
      {
        id: "q4",
        question: "What is the purpose of the 'key' prop in React lists?",
        type: "mcq",
        options: [
          "To style list items differently",
          "To help React identify which items have changed, been added, or removed",
          "To sort the list items",
          "To make the list items clickable",
        ],
      },
      {
        id: "q5",
        question: "Which CSS-in-JS solution is built into Next.js by default?",
        type: "mcq",
        options: ["Styled Components", "Emotion", "CSS Modules", "Tailwind CSS"],
      },
    ],
  },
}

// Helper function to generate mock skill test for any application
// Backend API endpoint would be: GET /api/skill-test/:applicationId
export function getSkillTestForApplication(applicationId: string, jobTitle: string): SkillTest {
  return {
    applicationId,
    jobTitle,
    instructions: `This skill assessment is designed to evaluate your technical knowledge and problem-solving abilities. Please answer all questions to the best of your ability.

Important Notes:
• You have unlimited time to complete this assessment
• All answers should be your own work
• We use AI and plagiarism detection tools to verify authenticity
• Select the best answer for each multiple-choice question
• You can submit your answers only once`,
    questions: [
      {
        id: "q1",
        question: `What interests you most about the ${jobTitle} position?`,
        type: "mcq",
        options: [
          "The technical challenges and learning opportunities",
          "The company culture and team collaboration",
          "The career growth potential",
          "The compensation and benefits",
        ],
      },
      {
        id: "q2",
        question: "How do you stay updated with the latest technology trends?",
        type: "mcq",
        options: [
          "Reading technical blogs and documentation",
          "Attending conferences and meetups",
          "Contributing to open source projects",
          "All of the above",
        ],
      },
      {
        id: "q3",
        question: "What is your preferred approach to problem-solving?",
        type: "mcq",
        options: [
          "Break down the problem into smaller parts",
          "Research similar solutions and adapt them",
          "Collaborate with team members for ideas",
          "Prototype quickly and iterate",
        ],
      },
      {
        id: "q4",
        question: "How do you handle tight deadlines and pressure?",
        type: "mcq",
        options: [
          "Prioritize tasks and focus on critical features",
          "Communicate with stakeholders about realistic timelines",
          "Work extra hours to meet the deadline",
          "All of the above, depending on the situation",
        ],
      },
      {
        id: "q5",
        question: "What type of work environment do you thrive in?",
        type: "mcq",
        options: [
          "Fast-paced startup with lots of autonomy",
          "Structured enterprise with clear processes",
          "Remote-first with flexible hours",
          "Hybrid environment with team collaboration",
        ],
      },
    ],
  }
}
