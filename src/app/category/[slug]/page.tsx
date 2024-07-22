import PaginationComponent from "@/app/search/PaginationComponent"
import BrokenImage from "@/components/BotkenImage"
import NewsCards from "@/components/parts/News/NewsCards"
import Axios from "@/config/axios"
import { User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

async function getCategoryData(slug: string, page: number) {
  try {
    const res = await Axios(`search?category=${slug}&page_number=${page}`)
    return res.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams?: {
    page?: string
  }
}) {
  const currentPage = Number(searchParams?.page) || 1
  const data = await getCategoryData(params.slug, currentPage)

  return (
    <main>
      <div className="container">
        <h2 className="text-4xl mt-12 mb-4 font-bold capitalize">
          {params.slug}
        </h2>
        <NewsCards {...data} />
        <PaginationComponent
          className="mt-10"
          currentPage={currentPage}
          url={`/category/${params.slug}`}
        />
      </div>
    </main>
  )
}
