const Button = ({ className, children, ...rest }) => {
    return (
        <button className={`p-3 bg-[#00146E] text-white text-md font-bold rounded-lg ${className}`} {...rest}>{children}</button>
    )
}

export default Button;