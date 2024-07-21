import { NewsResponse } from "./NewsResponse"
import NewsCardItem from "./NewsCardItem"

export default function NewsCards(data: NewsResponse) {
  return (
    <div className="grid grid-cols-12 gap-4">
      {data.news.map((item: any) => (
        <NewsCardItem {...item} />
      ))}
    </div>
  )
}
