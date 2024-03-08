import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Image from "./Image";
import query from "../utils/query";

const ImageUploader = forwardRef((props, ref) => {
    const [images, setImages] = useState([]);

    const fileRef = useRef();

    const upload = async (url, success, error) => {
        for (let i = 0; i < images.length; i++) {
            const formData = new FormData()
            formData.append(`source`, images[i].file);
            await query.auth.post(url, formData, success, error);
        }
    };

    const clear = async () => {
        setImages([]);
        fileRef.current.value = null;
    }

    useImperativeHandle(ref, () => ({
        upload,
        clear
    }));

    return (
        <div className="flex gap-2 overflow-x-scroll">
            {
                images.map((image, index) => (
                    <div key={index} className="relative flex-none justify-center bg-[#F8F9FA] p-2">
                        <Image className="w-28 h-28" src={image.src} />
                        <button className="absolute right-0 top-0 p-1 bg-white rounded-full shadow shadow-[#000C]" onClick={(e) => {
                            e.preventDefault();
                            setImages((images) => {
                                const updatedImages = [...images];
                                updatedImages.splice(index, 1);
                                return updatedImages;
                            });
                        }}>
                            <img className="w-5 h-5" src="/img/remove.svg" />
                        </button>
                    </div>
                ))
            }
            <input type="file" className="hidden" ref={fileRef} accept="image/*" onChange={(e) => {
                if (e.target.files.length == 1)
                    setImages([...images, { src: URL.createObjectURL(e.target.files[0]), file: e.target.files[0] }]);
                e.target.value = null;
            }} />
            <div className="flex-none justify-center bg-[#F8F9FA]" onClick={() => {
                fileRef.current.click();
            }}>
                <div className="w-28 h-28 flex flex-wrap justify-center content-center">
                    <Image className="w-12 h-12" src="/img/no-image.svg" />
                    <p>画像を追加</p>
                </div>
            </div>
        </div>
    )
});

export default ImageUploader;