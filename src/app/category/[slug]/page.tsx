import BrokenImage from "@/components/BotkenImage"
import NewsCards from "@/components/parts/News/NewsCards"
import Axios from "@/config/axios"
import { User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

async function getCategoryData(slug: string) {
  try {
    const res = await Axios("search?category=" + slug)
    return res.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getCategoryData(params.slug)

  return (
    <main>
      <div className="container">
        <h2 className="text-4xl mt-12 mb-4 font-bold capitalize">
          {params.slug}
        </h2>
        <NewsCards {...data} />
      </div>
    </main>
  )
}
