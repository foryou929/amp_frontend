const Input = ({ className, ...rest }) => {
    return (
        <div className={className}>
            <input type="text" className={`w-full p-2 border border-[#DEE2E6]`} {...rest}>
            </input>
        </div>
    )
}

export default Input;