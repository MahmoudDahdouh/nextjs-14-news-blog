import NewsCards from "@/components/parts/News/NewsCards"
import Axios from "@/config/axios"
import SearchError from "./SearchError"
import SearchEmptyState from "./SearchEmptyState"
import SearchInitState from "./SearchInitState"

async function search(term: string, page: number = 1) {
  try {
    const res = await Axios(`search?keywords=${term}&page_number=${page}`, {
      // ignore typescript
      // @ts-ignore
      cache: "no-store",
    })
    return res.data
  } catch (error) {
    return error
  }
}

export default async function SearchResults({
  query,
  page,
}: {
  query: string
  page: number
}) {
  let data
  if (query && query.length > 0) {
    data = await search(query, page)
  }

  return (
    <>
      {data?.name == "AxiosError" ? (
        <SearchError />
      ) : !data ? (
        <SearchInitState />
      ) : data.news.length > 0 ? (
        <NewsCards {...data} />
      ) : (
        <SearchEmptyState />
      )}
    </>
  )
}
