const Input = ({ className, ...rest }) => {
    return (
        <input type="text" className={`p-2 border border-[#DEE2E6] focus:shadow outline-none ${className}`} {...rest}>
        </input>
    )
}

export default Input;