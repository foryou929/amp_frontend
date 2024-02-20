const Textarea = ({ className, ...rest }) => {
    return (
        <textarea className={`w-full border border-[#DEE2E6] focus:shadow outline-none p-2 ${className}`} {...rest}></textarea>
    )
}

export default Textarea;