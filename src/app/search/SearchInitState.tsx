import { Newspaper } from "lucide-react"

export default function SearchInitState() {
  return (
    <div className="flex justify-center items-center flex-col mt-12">
      <Newspaper className="h-48 w-48 text-slate-400" />
      <p className="text-slate-400 text-2xl my-2 text-center">
        Search for news articles by title, author, or category.
      </p>
    </div>
  )
}
