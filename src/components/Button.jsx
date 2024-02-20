const Button = ({ label, className, ...rest }) => {
    return (
        <button className={`p-2 bg-[#00146E] text-white text-md font-bold rounded-lg ${className}`} {...rest}>{label}</button>
    )
}

export default Button;