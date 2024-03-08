import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Ranking = ({ className, rank, onChange, children }) => {
    const [value, setValue] = useState(rank);

    useEffect(() => {
        setValue(rank || 0);
    }, [rank]);

    return <div className={`flex items-center gap-1 ${className}`}>
        {
            Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} className={`${index < rank ? "text-[#E9CC32]" : "text-gray-400"} cursor-pointer`} onClick={() => {
                    if (onChange) onChange(index);
                }} />
            ))
        }
        <span>{children}</span>
    </div>
};

export default Ranking;