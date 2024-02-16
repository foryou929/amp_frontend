const Textarea = ({ className, ...rest }) => {
    return (
        <div className={className}>
            <textarea className="w-full border border-[#DEE2E6]" {...rest}></textarea>
        </div>
    )
}

export default Textarea;