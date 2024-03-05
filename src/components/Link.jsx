import { NavLink } from "react-router-dom"

const Link = ({ className, ...rest }) => {
    return <NavLink className={`text-[#00146E] ${className}`} {...rest} />
}

export default Link;