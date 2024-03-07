import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import Avatar from "./Avatar";
import query from "../utils/query";

const AvatarUploader = forwardRef(({ defaultSrc, className }, ref) => {
    const fileRef = useRef();
    const [src, setSrc] = useState(defaultSrc);
    const [file, setFile] = useState(null);

    const upload = async (url, success, error) => {
        if (file) {
            const formData = new FormData();
            formData.append('avatar', file);
            await query.auth.patch(url, formData, success, error);
        }
    }

    useImperativeHandle(ref, () => ({
        upload
    }));

    return (
        <div className={className} onClick={() => fileRef.current.click()}>
            <input type="file" className="hidden" ref={fileRef} accept="image/*" onChange={(e) => {
                if (e.target.files.length == 1) {
                    setSrc(URL.createObjectURL(e.target.files[0]));
                    setFile(e.target.files[0]);
                } else setSrc(defaultSrc);
            }} />
            <Avatar src={src} circle />
        </div>
    )
})

export default AvatarUploader;