import { NavLink } from "react-router-dom"

const Link = ({ ...rest }) => {
    return <NavLink className="text-blue-400" {...rest} />
}

export default Link;