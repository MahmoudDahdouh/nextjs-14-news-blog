import Image from "next/image"
import { HotTopics } from "./HotTopics"
import { User } from "lucide-react"
import Link from "next/link"
import Axios from "@/config/axios"
import BrokenImage from "@/components/BotkenImage"

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
        <div className="grid grid-cols-12 gap-4">
          {data.news.map((item: any) => {
            return (
              <article
                key={item.id}
                className="col-span-12 sm:col-span-6 md:col-span-4 overflow-hidden"
              >
                <Link href={item.url} passHref={true}>
                  <div>
                    {item.image !== "None" ? (
                      <Image
                        alt="news image"
                        src={item.image}
                        width={400}
                        height={200}
                        className="w-full rounded-lg h-60 sm:h-48 object-cover shadow-inner"
                      />
                    ) : (
                      <BrokenImage />
                    )}
                    <div className="p-2">
                      <h3 className="text-xl truncate font-bold">
                        {item.title}
                      </h3>
                      <p className="line-clamp-3 text-slate-600">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-4 mt-4 truncate">
                        <div className="flex items-center gap-1">
                          <User className="text-slate-600" />
                          <p className="text-sm text-slate-600">
                            {item.author}
                          </p>
                        </div>
                        <p className="text-slate-600 text-sm">
                          {item.published.substring(0, 10)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        {item.category.map((item: any, index: number) => {
                          return (
                            <Link
                              key={index}
                              passHref={true}
                              href={`/category/${item}`}
                              className="bg-slate-200 hover:bg-slate-400 cursor-pointer transition-all hover:text-white rounded-lg text-sm text-center px-2 py-1 "
                            >
                              {item}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </main>
  )
}
