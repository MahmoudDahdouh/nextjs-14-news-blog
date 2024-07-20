import Image from "next/image"
import { HotTopics } from "./HotTopics"
import { User } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="mt-4">
      <div className="container">
        <h2 className="text-4xl mt-12 mb-4">Hot Topics</h2>
        <div className="flex items-center gap-4 overflow-hidden flex-wrap">
          {HotTopics.map((topic, index) => (
            <div
              key={index}
              className="bg-slate-50 cursor-pointer rounded-lg h-8 px-4 py-2 flex items-center gap-2 justify-center hover:bg-slate-200 transition-all"
            >
              {topic.icon}
              <p>{topic.name}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl mt-12 mb-4">Latest News</h2>
        <div className="grid grid-cols-12 gap-4">
          <article className="col-span-12 sm:col-span-6 md:col-span-4 overflow-hidden">
            <Link href="#">
              <Image
                alt="news image"
                src="/imgs/news-1.png"
                width={400}
                height={200}
                className="w-full rounded-lg"
              />
              <div className="p-2">
                <h3 className="text-xl truncate font-bold">
                  News Title is the best news title ever
                </h3>
                <p className="line-clamp-3 text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur similique eaque saepe recusandae, doloribus,
                  praesentium voluptas debitis sapiente sequi, minima accusamus?
                  Corrupti expedita eius commodi illum modi error eaque.
                  Quisquam?
                </p>
                <div className="flex items-center gap-4 mt-4 truncate">
                  <div className="flex items-center gap-1">
                    <User className="text-slate-600" />
                    <p className="text-sm text-slate-600">Mahmoud Dahdouh</p>
                  </div>
                  <p className="text-slate-600 text-sm">2024-05-05</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Link href="/asd">
                    <p className="bg-slate-200 hover:bg-slate-400 cursor-pointer transition-all hover:text-white rounded-lg text-sm text-center px-2 py-1 ">
                      Hello
                    </p>
                  </Link>
                </div>
              </div>
            </Link>
          </article>
        </div>
      </div>
    </main>
  )
}
