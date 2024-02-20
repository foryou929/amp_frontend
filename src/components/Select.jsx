const Select = ({ className, options, ...rest }) => {
    return (
        <select className={`w-full p-2 border border-[#DEE2E6] bg-[#F8F9FA] ${className}`} {...rest}>
            {
                options?.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)
            }
        </select>
    )
}

export default Select;