import { Suspense } from "react"
import Search from "./Search"
import SearchResults from "./SearchResults"
import LoadingSearch from "./LoadingSearch"
import PaginationComponent from "./PaginationComponent"

export default function Page({
  searchParams,
}: {
  searchParams?: {
    q?: string
    page?: string
  }
}) {
  const query = searchParams?.q || ""
  const currentPage = Number(searchParams?.page) || 1
  return (
    <main>
      <div className="container mt-12">
        <Search />
        <h2 className="text-lg mt-2">Show results for "{query}"</h2>
        <Suspense key={query + currentPage} fallback={<LoadingSearch />}>
          <SearchResults query={query} page={currentPage} />
        </Suspense>
        <PaginationComponent
          className="mt-10"
          currentPage={currentPage}
          searchTerm={query}
          url="/search"
        />
      </div>
    </main>
  )
}
