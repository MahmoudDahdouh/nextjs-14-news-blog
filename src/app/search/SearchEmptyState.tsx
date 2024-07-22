import { Info } from "lucide-react"

export default function SearchEmptyState() {
  return (
    <div className="flex items-center justify-center flex-col mt-12">
      <Info className="h-48 w-48 text-slate-400" />
      <p className="text-slate-400 text-2xl mt-2 text-center">
        No results found !
      </p>
    </div>
  )
}
