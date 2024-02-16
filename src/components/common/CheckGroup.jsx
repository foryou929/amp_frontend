import { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

const CheckGroup = ({ className, itemClassName, name, label, items, defaultValue, onChange }) => {
    const [value, setValue] = useState(defaultValue || 0)
    const onCheckChange = (index, e) => {
        if (e.target.checked) {
            setValue(value | (1 << index));
        } else {
            setValue(value & (~(1 << index)));
        }
    }
    useEffect(() => {
        if (onChange)
            onChange({ name, value });
    }, [value]);
    return (
        <div className={className}>
            <label className="py-0.5">{label}</label>
            {
                items?.map((item, index) => <Checkbox key={index} className={itemClassName} onChange={(e) => onCheckChange(index, e)} label={item.label} />)
            }
        </div>
    )
}

export default CheckGroup;