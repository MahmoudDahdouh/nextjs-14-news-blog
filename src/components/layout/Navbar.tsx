import { Search } from "lucide-react"
import Logo from "./Logo"
import TextLogo from "./TextLogo"

export default function Navbar() {
  return (
    <nav>
      <div className="container mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center shrink-0 gap-2">
            <Logo />
            <TextLogo />
          </div>
          <div className="bg-slate-50 cursor-pointer rounded-lg h-8 w-8 flex items-center justify-center hover:bg-slate-200 transition-all">
            <Search />
          </div>
        </div>
        <div className="mt-2 h-1 w-full bg-slate-50 rounded-full"></div>
      </div>
    </nav>
  )
}
