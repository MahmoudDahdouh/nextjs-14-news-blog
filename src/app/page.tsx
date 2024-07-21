import Image from "next/image"
import { HotTopics } from "./HotTopics"
import { User } from "lucide-react"
import Link from "next/link"
import Axios from "@/config/axios"
import BrokenImage from "@/components/BotkenImage"
import NewsCards from "@/components/parts/News/NewsCards"

async function getHomeData() {
  try {
    const res = await Axios("latest-news")
    return res.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default async function Home() {
  const data = await getHomeData()

  return (
    <main className="mt-4">
      <div className="container">
        <h2 className="text-4xl mt-12 mb-4 font-bold">Hot Topics</h2>
        <div className="flex items-center gap-4 overflow-hidden flex-wrap">
          {HotTopics.map((topic, index) => (
            <Link
              href={`/category/${topic.slug}`}
              key={index}
              className="bg-slate-50 cursor-pointer rounded-lg h-8 px-4 py-2 flex items-center gap-2 justify-center hover:bg-slate-200 transition-all"
            >
              {topic.icon}
              <p>{topic.name}</p>
            </Link>
          ))}
        </div>

        <h2 className="text-4xl mt-12 mb-4 font-bold">Latest News</h2>
        <NewsCards {...data} />
      </div>
    </main>
  )
}
