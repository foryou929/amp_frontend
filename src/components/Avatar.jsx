import React, { useEffect, useState } from 'react';

const Avatar = ({ src, fallbackSrc, alt, className, circle, ...props }) => {
    const [imageSrc, setImageSrc] = useState(src);

    useEffect(() => {
        setImageSrc(src);
    }, [src]);

    const onError = () => {
        if (imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc || "/img/no-user.png");
        }
    };

    return <img className={`${className || "w-16 h-16"} object-cover ${circle ? 'rounded-full' : ''}`} src={imageSrc} alt={alt} onError={onError} {...props} />;
};

export default Avatar;