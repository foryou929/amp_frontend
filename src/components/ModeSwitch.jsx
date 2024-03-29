import { useEffect, useState } from "react";

const ModeSwitch = ({ label1, label2, onChange, ...rest }) => {
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        if (onChange)
            onChange(flag)
    }, [flag])
    return (
        <div {...rest}>
            <div className="flex items-end">
                <div
                    className={`w-1/2 border border-gray-300 rounded rounded-br-none flex justify-center items-end cursor-pointer ${!flag ? "h-12" : "rounded-tr-none h-10 bg-gray-300"}`}
                    onClick={() => setFlag(false)}
                >
                    {
                        label1
                    }
                </div>
                <div
                    className={`w-1/2 border border-gray-300 rounded rounded-bl-none flex justify-center items-end cursor-pointer ${flag ? "h-12" : "rounded-tl-none h-10 bg-gray-300"}`}
                    onClick={() => setFlag(true)}
                >
                    {
                        label2
                    }
                </div>
            </div>
        </div>
    )
}

export default ModeSwitch;