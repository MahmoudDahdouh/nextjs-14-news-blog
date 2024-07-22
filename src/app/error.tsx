"use client"
import { Button } from "@/components/ui/button"
import { ChevronLeft, TriangleAlert } from "lucide-react"
import Link from "next/link"

export default function Error() {
  return (
    <div className="container mt-12 flex items-center justify-center flex-col">
      <TriangleAlert className="h-24 w-24 text-slate-400" />
      <h1 className="text-4xl text-center text-slate-400 mt-8">
        Something went wrong
      </h1>
      <Button className="mt-4 gap-2">
        <ChevronLeft />
        <Link href="/" replace>
          Back to Home
        </Link>
      </Button>
    </div>
  )
}
