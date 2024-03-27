import { useState } from "react";

const List = ({ className, pagination, ...props }) => {
    const [page, setPage] = useState(1);

    const pageSize = props.pageSize || 10;

    const items = props.items || [];
    const limitedItems = (items || []).filter((_, index) => props.limit ? index < props.limit : true);
    const itemCount = limitedItems.length;

    const pageCount = Math.floor((itemCount + pageSize - 1) / pageSize);
    const paginatedItems = limitedItems.filter((_, index) => pagination ? index >= pageSize * (page - 1) && index < pageSize * page : true);

    return (
        <>
            <ul className={`border-t border-gray-200 ${className}`}>
                {
                    paginatedItems.length == 0 ?
                        <p className="py-4 text-center border-b border-gray-200">データはありません。</p>
                        : paginatedItems?.map((item) => (
                            <li key={item.key} className="border-b border-gray-200 py-4 px-2">
                                {
                                    item.content
                                }
                            </li>
                        ))
                }
            </ul>
            {
                pagination && pageCount >= 1 ? (
                    <nav className="mt-4 flex justify-center">
                        <ul className="inline-flex -space-x-px text-sm">
                            <li>
                                <a onClick={() => setPage(Math.max(1, page - 1))} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                    </svg>
                                </a>
                            </li>
                            {
                                Array.from({ length: Math.min(page, 3) + Math.min(pageCount - page, 2) }, (_, index) => {
                                    const start = Math.max(page - 2, 1);
                                    const pageNum = start + index;
                                    return (
                                        <li key={index}>
                                            <a onClick={() => setPage(pageNum)} className={`flex items-center justify-center px-3 h-8 border border-gray-300 ${pageNum == page ? "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"}`}>{pageNum}</a>
                                        </li>
                                    )
                                })
                            }
                            <li>
                                <a to={`page=${() => setPage(Math.min(pageCount, page + 1))}`} className="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                ) :
                    <></>
            }
        </>
    )
}

export default List;