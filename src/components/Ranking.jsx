import { FaStar } from "react-icons/fa";

const Ranking = ({ className, rank, onChange, children }) => {
    return <div className={`flex items-center gap-1 ${className}`}>
        {
            Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index + 1} className={`${index + 1 <= rank ? "text-[#E9CC32]" : "text-gray-400"} cursor-pointer`} onClick={() => {
                    if (onChange) onChange(index + 1);
                }} />
            ))
        }
        <span>{children}</span>
    </div>
};

export default Ranking;