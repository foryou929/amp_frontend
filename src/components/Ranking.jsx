import { FaStar } from "react-icons/fa";

const Ranking = ({ className, rank, children }) => {
    return <div className={`flex items-center gap-1 ${className}`}>
        {
            Array.from({ length: rank }).map((_, index) => <FaStar key={index} className="text-[#E9CC32]" />)
        }
        <span>{children}</span>
    </div>
};

export default Ranking;