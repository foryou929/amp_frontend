import { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

const CheckGroup = ({ name, label, className, items, itemClassName, onChange, value }) => {
    const [status, setStatus] = useState(0)

    useEffect(() => {
        setStatus(value);
    }, [value]);

    return (
        <div className={className}>
            <label className="py-0.5">{label}</label>
            {
                items?.map((item, index) => {
                    return <Checkbox key={index} className={itemClassName} checked={(status & (1 << index))} onChange={(e) => {
                        let value = status;
                        if (e.target.checked) {
                            value = status | (1 << index)
                        } else {
                            value = status & (~(1 << index));
                        }
                        setStatus(value);
                        onChange({ name, value });
                    }} label={item.label} />
                })
            }
        </div>
    )
}

export const CheckGroupString = ({ items, value }) => {
    let str = "";
    items.map((item, index) => {
        if (value & (1 << index)) {
            str += item.label;
            if (index < items.length - 1)
                str += "・";
        }
    })
    return str;
};

export default CheckGroup;