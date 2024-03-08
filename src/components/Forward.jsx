import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const Forward = ({ className, children, to }) => {
    const navigate = useNavigate();
    return (
        <div className={`cursor-pointer font-bold flex items-center ${className}`} onClick={() => {
            if (to) {
                navigate(to);
            } else {
                window.history.forward()
            }
        }}>
            <span className="ml-2">{children}</span>
            <FaAngleRight />
        </div>
    )
}

export default Forward;