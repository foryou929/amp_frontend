import { useState } from "react";

function generateUniqueId() {
    var timestamp = new Date().getTime().toString(36); // Convert timestamp to base36 string
    var randomString = Math.random().toString(36).substr(2, 5); // Generate random string

    return timestamp + randomString;
}

const Checkbox = ({ label, className, ...rest }) => {
    const [id, setID] = useState(generateUniqueId())
    return (
        <div className={`flex items-center ${className}`} {...rest}>
            <input type="checkbox" id={id} />
            <label htmlFor={id} className="ml-2">{label}</label>
        </div>
    )
}

export default Checkbox