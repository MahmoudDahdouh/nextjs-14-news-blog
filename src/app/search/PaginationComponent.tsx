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
  currentPage,
  searchTerm,
  url,
}: {
  className?: string
  currentPage: number
  searchTerm: string
  url: string
}) {
  return (
    <Pagination className={className}>
      <PaginationContent>
        {currentPage == 1 && (
          <>
            <PaginationItem>
              <PaginationLink
                href={`${url}?q=${searchTerm}&page=${currentPage}`}
                isActive
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`${url}?q=${searchTerm}&page=${currentPage + 1}`}
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`${url}?q=${searchTerm}&page=${currentPage + 2}`}
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
                href={`${url}?q=${searchTerm}&page=${currentPage - 1}`}
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink
                href={`${url}?q=${searchTerm}&page=${currentPage - 1}`}
              >
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                isActive
                href={`${url}?q=${searchTerm}&page=${currentPage}`}
              >
                {currentPage}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`${url}?q=${searchTerm}&page=${currentPage + 1}`}
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
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
