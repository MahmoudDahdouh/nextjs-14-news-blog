import { ImageOff } from "lucide-react"

export default function BrokenImage() {
  return (
    <div className="w-full h-60 sm:h-48 flex items-center justify-center bg-slate-100 rounded-lg">
      <ImageOff className="max-h-48 max-w-48 w-16 h-16 text-slate-400" />
    </div>
  )
}
