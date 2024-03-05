const Button = ({ className, children, revert, ...rest }) => {
    return (
        <button className={`p-3 ${revert ? "bg-white text-[#00146E] border border-[#00146E]" : "bg-[#00146E] text-white"} text-md font-bold rounded-lg ${className}`} {...rest}>{children}</button>
    )
}

export default Button;