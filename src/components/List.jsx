const List = ({ items, className, ...props }) => {
    return (
        <ul className={`border-t border-gray-200 ${className}`} {...props}>
            {
                items.map((item) => (
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