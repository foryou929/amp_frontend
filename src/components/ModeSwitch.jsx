import { useState } from "react";

const ModeSwitch = ({label1, label2}) => {
    const [flag, setFlag] = useState(false);
    return (
        <div className="flex items-end">
            <div
                className={`w-20 border border-gray-300 rounded rounded-br-none ${!flag ? "h-12" : "rounded-tr-none h-10 bg-gray-300"}`}
                onClick={() => setFlag(false)}
            >
                {
                    label1
                }
            </div>
            <div
                className={`w-20 border border-gray-300 rounded rounded-bl-none ${flag ? "h-12" : "rounded-tl-none h-10 bg-gray-300"}`}
                onClick={() => setFlag(true)}
            >
                {
                    label2
                }
            </div>
        </div>
    )
}

export default ModeSwitch;