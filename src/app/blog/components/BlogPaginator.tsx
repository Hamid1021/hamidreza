import Link from "next/link";

const BlogPaginator = ({
    currentPage,
    totalPages,
    hasMore,
}: {
    currentPage: number;
    totalPages: number;
    hasMore: boolean;
}) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
        >
            <div className="w-full px-4">
                <ul className="flex items-center justify-center pt-8">
                    {/* Prev */}
                    <li className="mx-1">
                        {currentPage != 1 ? (
                            <Link
                                href={`?page=${Math.max(currentPage - 1, 1)}`}
                                className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${currentPage === 1
                                    ? "cursor-not-allowed bg-gray-300 text-gray-500"
                                    : "bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white"
                                    }`}
                            >
                                صفحه قبل
                            </Link>
                        ) : (
                            <span className="select-none flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-gray-300 px-4 text-sm text-gray-500">
                                صفحه قبل
                            </span>
                        )}
                    </li>

                    {/* Page Numbers */}
                    {pages.map((page) => (
                        <li key={page} className="mx-1">
                            <Link
                                href={`?page=${page}`}
                                className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${page === currentPage
                                    ? "bg-primary text-white"
                                    : "bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white"
                                    }`}
                            >
                                {page}
                            </Link>
                        </li>
                    ))}

                    {/* Next */}
                    <li className="mx-1">
                        {hasMore ? (
                            <Link
                                href={`?page=${currentPage + 1}`}
                                className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                            >
                                صفحه بعد
                            </Link>
                        ) : (
                            <span className="select-none flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-gray-300 px-4 text-sm text-gray-500">
                                صفحه بعد
                            </span>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BlogPaginator;
