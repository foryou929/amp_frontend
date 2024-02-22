import { useEffect, useState } from "react";

const RadioGroup = ({ name, options, onChange, defaultValue, ...props }) => {
    const [value, setValue] = useState(defaultValue || 0);
    useEffect(() => {
        if (onChange)
            onChange({ name, value });
    }, [value])

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
                            onChange={() => setValue(option.value)}
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