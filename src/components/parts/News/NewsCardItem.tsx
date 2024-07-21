import BrokenImage from "@/components/BotkenImage"
import { User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { News } from "./NewsResponse"

export default function NewsCardItem({
  id,
  title,
  description,
  url,
  author,
  image,
  language,
  category,
  published,
}: News) {
  return (
    <article
      key={id}
      className="col-span-12 sm:col-span-6 md:col-span-4 overflow-hidden"
    >
      <Link href={url} passHref={true} target="_blank">
        <div>
          {image !== "None" ? (
            <Image
              alt="news image"
              src={image}
              width={400}
              height={200}
              className="w-full rounded-lg h-60 sm:h-48 object-cover shadow-inner"
            />
          ) : (
            <BrokenImage />
          )}
          <div className="p-2">
            <h3 className="text-xl truncate font-bold">{title}</h3>
            <p className="line-clamp-3 text-slate-600">{description}</p>
            <div className="flex items-center gap-4 mt-4 truncate">
              <div className="flex items-center gap-1">
                <User className="text-slate-600" />
                <p className="text-sm text-slate-600">{author}</p>
              </div>
              <p className="text-slate-600 text-sm">
                {published.substring(0, 10)}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              {category.map((item: any, index: number) => {
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
}
