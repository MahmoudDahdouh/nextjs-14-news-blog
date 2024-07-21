import { Search } from "lucide-react"
import Logo from "./Logo"
import TextLogo from "./TextLogo"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
      <div className="container mt-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0 gap-2">
            <Logo />
            <TextLogo />
          </Link>
          <Link
            href="/search"
            className="cursor-pointer flex items-center justify-center gap-2"
          >
            <Search />
            <p className="text-lg text-slate-600">Search</p>
          </Link>
        </div>
        <div className="mt-2 h-1 w-full bg-slate-50 rounded-full"></div>
      </div>
    </nav>
  )
}
