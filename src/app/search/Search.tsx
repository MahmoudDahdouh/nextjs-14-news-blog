"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { useDebouncedCallback } from "use-debounce"

export default function Search() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    if (!term) {
      params.delete("q")
      replace(pathname)
      return
    }

    params.set("q", term)
    replace(`${pathname}?${params.toString()}`)

    console.log(term)
  }, 500)

  return (
    <>
      <h2 className="text-4xl font-bold">Search</h2>
      <div className="mt-2">
        <form
          className="flex items-center justify-between gap-4"
          onSubmit={(event) => {
            event.preventDefault()
          }}
        >
          <Input
            type="text"
            defaultValue={searchParams.get("q") || ""}
            placeholder="Search for news articles"
            onChange={(e) => {
              handleSearch(e.target.value)
            }}
          />
        </form>
      </div>
    </>
  )
}
