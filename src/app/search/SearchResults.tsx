import BrokenImage from "@/components/BotkenImage"
import NewsCards from "@/components/parts/News/NewsCards"
import Axios from "@/config/axios"
import { Info, Newspaper, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

async function search(term: string) {
  try {
    const res = await Axios("search?keywords=" + term, {
      cache: "no-store",
    })
    return res.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default async function SearchResults({
  query,
  page,
}: {
  query: string
  page: number
}) {
  console.log("XXXXXXXXXXXXXXXXXXXXXXXxxxxxx")

  console.log(`query : ${query} = page : ${page}`)
  let data
  if (query && query.length > 0) {
    console.log("start search")

    data = await search(query)
  }

  console.log(data)

  return (
    <>
      {!data ? (
        <div className="flex justify-center items-center flex-col mt-12">
          <Newspaper className="h-48 w-48 text-slate-400" />
          <p className="text-slate-400 text-2xl my-2 text-center">
            Search for news articles by title, author, or category.
          </p>
        </div>
      ) : data.news.length > 0 ? (
        <>
          <NewsCards {...data} />
        </>
      ) : (
        <div className="flex items-center justify-center flex-col mt-12">
          <Info className="h-48 w-48 text-slate-400" />
          <p className="text-slate-400 text-2xl mt-2 text-center">
            No results found !
          </p>
        </div>
      )}
    </>
  )
}
