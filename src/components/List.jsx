const List = ({ items, className, ...props }) => {
    return (
        <ul className={`border-t border-gray-200 ${className}`} {...props}>
            {
                items?.length == 0 ?
                    <p className="py-4 text-center border-b border-gray-200">データはありません。</p>
                    : items?.map((item) => (
                        <li key={item.key} className="border-b border-gray-200 p-4">
                            {
                                item.content
                            }
                        </li>
                    ))
            }
        </ul>
    )
}

export default List;