import { useState } from "react";

const Button = ({ className, children, revert, onClick, ...rest }) => {
    const [loading, setLoading] = useState(false);

    return (
        <button className={`flex items-center justify-center text-md rounded-lg p-3 gap-2 font-bold ${revert ? "bg-white text-[#00146E] border border-[#00146E]" : "bg-[#00146E] text-white"} ${loading && "cursor-not-allowed"} ${className}`} onClick={async (e) => {
            if (loading) return;
            setLoading(true);
            if (onClick) await onClick(e);
            setLoading(false);
        }} {...rest}>
            {loading && <div className="w-4 h-4 border-2 border-r-transparent animate-spin rounded-full" />}
            {children}
        </button>
    )
}

export default Button;