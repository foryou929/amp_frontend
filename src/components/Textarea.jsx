import { forwardRef } from "react";

const Textarea = forwardRef(({ className, ...rest }, ref) => {
    return (
        <textarea className={`w-full border border-[#DEE2E6] focus:shadow outline-none p-2 ${className}`} ref={ref} {...rest}></textarea>
    )
});

export default Textarea;