import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function PaginationComponent({
  className,
  currentPage = 1,
  searchTerm,
  url,
}: {
  className?: string
  currentPage?: number
  searchTerm?: string
  url: string
}) {
  return (
    <Pagination className={className}>
      <PaginationContent>
        {currentPage == 1 && (
          <>
            <PaginationItem>
              <PaginationLink
                href={`${url}?${UrlBuilder(searchTerm, currentPage)}`}
                isActive
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`${url}?${UrlBuilder(searchTerm, currentPage + 1)}`}
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`${url}?${UrlBuilder(searchTerm, currentPage + 2)}`}
              >
                3
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {currentPage > 1 && (
          <>
            <PaginationItem>
              <PaginationPrevious
                href={`${url}?${UrlBuilder(searchTerm, currentPage - 1)}`}
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink
                href={`${url}?${UrlBuilder(searchTerm, currentPage - 1)}`}
              >
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                isActive
                href={`${url}?${UrlBuilder(searchTerm, currentPage)}`}
              >
                {currentPage}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`${url}?${UrlBuilder(searchTerm, currentPage + 1)}`}
              >
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={`${url}?${UrlBuilder(searchTerm, currentPage + 1)}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

const UrlBuilder = (query: string = "", page: number = 1) => {
  let url = new URLSearchParams()
  if (query) url.append("q", query)
  if (page) url.append("page", page.toString())
  return url.toString()
}
