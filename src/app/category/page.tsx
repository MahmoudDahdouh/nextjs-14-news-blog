import BrokenImage from "@/components/BotkenImage"
import { HotTopics } from "../HotTopics"
import Link from "next/link"

export default function Category() {
  return (
    <main className="mt-4">
      <div className="container">
        <h2 className="text-4xl mt-12 mb-4 font-bold">Categories</h2>
        <div className="grid grid-cols-12 gap-4 overflow-hidden flex-wrap">
          {HotTopics.map((topic, index) => (
            <Link
              href={`/category/${topic.slug}`}
              key={index}
              className="bg-slate-50 cursor-pointer rounded-lg p-4 col-span-12 sm:col-span-6 md:col-span-3 flex flex-col items-center gap-2 justify-center hover:bg-slate-200 transition-all"
            >
              <div className="h-12 w-12 ">{topic.icon}</div>
              <p className="text-2xl">{topic.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
