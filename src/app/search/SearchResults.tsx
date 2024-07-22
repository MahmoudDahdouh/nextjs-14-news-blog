import NewsCards from "@/components/parts/News/NewsCards"
import Axios from "@/config/axios"
import SearchError from "./SearchError"
import SearchEmptyState from "./SearchEmptyState"
import SearchInitState from "./SearchInitState"

async function search(term: string) {
  try {
    const res = await Axios("search?keywords=" + term, {
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
    console.log("start search")
    data = await search(query)
  }

  return (
    <>
      {data.name == "AxiosError" ? (
        <SearchError />
      ) : !data ? (
        <SearchInitState />
      ) : data.news.length > 0 ? (
        <NewsCards {...data} />
      ) : (
        <SearchEmptyState />
      )}
      {/* 

         */}
    </>
  )
}
/*
init state

data



*/
