export default function LoadingSearch() {
  return (
    <div>
      <div className=" animate-pulse mt-4">
        <div className="grid grid-cols-12 gap-4 mt-4">
          {Array(5)
            .fill(0)
            .map((item: any, index: any) => (
              <div className="col-span-12 sm:col-span-6 md:col-span-4">
                <div className="h-32 w-full bg-slate-200 rounded-lg"></div>
                <div className="mt-2 bg-slate-200 rounded-lg h-4 w-12"></div>
                <div className="mt-2 bg-slate-200 rounded-lg h-4 w-full"></div>
                <div className="mt-2 bg-slate-200 rounded-lg h-4 w-full"></div>
                <div className="mt-2 bg-slate-200 rounded-lg h-4 w-full"></div>
                <div className="mt-2 bg-slate-200 rounded-lg h-4 w-full"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
