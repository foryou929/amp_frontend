const Input = ({ className, ...rest }) => {
    return (
        <div {...rest}>
            <input type="text" className={`w-full p-2 border border-[#DEE2E6]`}>
            </input>
        </div>
    )
}

export default Input;