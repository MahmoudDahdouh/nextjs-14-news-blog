import { Info, Newspaper, TriangleAlert } from "lucide-react"

export default function SearchError() {
  return (
    <div className="flex justify-center items-center flex-col mt-12">
      <TriangleAlert className="h-48 w-48 text-slate-400" />
      <p className="text-slate-400 text-2xl my-2 text-center">
        Error while searching
      </p>
    </div>
  )
}
