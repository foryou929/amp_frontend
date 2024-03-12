const RadioGroup = ({ name, options, onChange, value, defaultValue, ...props }) => {
    return (
        <div {...props}>
            {
                options.map(option => (
                    <div key={option.value} className="py-1">
                        <input
                            name={name}
                            type="radio"
                            className="border border-ltgray"
                            id={option.value}
                            onChange={() => onChange({ name, value: option.value })}
                            checked={value == option.value}
                        />
                        <label className="ml-2" htmlFor={option.value} >{option.label}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default RadioGroup;