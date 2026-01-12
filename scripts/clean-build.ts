import { rmSync, existsSync } from "fs"
import { join } from "path"

const dirsToClean = [".next", "node_modules/.cache"]

console.log("🧹 Cleaning build cache...\n")

dirsToClean.forEach((dir) => {
  const fullPath = join(process.cwd(), dir)
  if (existsSync(fullPath)) {
    console.log(`Removing ${dir}...`)
    rmSync(fullPath, { recursive: true, force: true })
    console.log(`✓ ${dir} removed\n`)
  } else {
    console.log(`⊘ ${dir} does not exist\n`)
  }
})

console.log("✨ Cache cleaned successfully!")
console.log("\nNow run: npm run build")
