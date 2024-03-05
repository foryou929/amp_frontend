import React, { useEffect, useState } from 'react';

const Image = ({ src, fallbackSrc, alt, className, ...props }) => {
    const [imageSrc, setImageSrc] = useState(src);

    useEffect(() => {
        setImageSrc(src);
    }, [src]);

    const onError = () => {
        if (imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc || "/img/no-image.svg");
        }
    };

    return <img className={`${className || "w-full h-full"} object-cover`} src={imageSrc} alt={alt} onError={onError} {...props} />;
};

export default Image;