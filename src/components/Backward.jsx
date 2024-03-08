import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Backward = ({ className, children, to }) => {
    const navigate = useNavigate();
    return (
        <div className={`cursor-pointer font-bold flex items-center ${className}`} onClick={() => {
            if (to) {
                navigate(to);
            } else {
                window.history.back()
            }
        }}>
            <FaAngleLeft />
            <span className="ml-2">{children}</span>
        </div>
    )
}

export default Backward;