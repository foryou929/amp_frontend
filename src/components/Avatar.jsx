import React, { useState } from 'react';

const Avatar = ({ src, fallbackSrc, alt, className, circle, ...props }) => {
    const [imageSrc, setImageSrc] = useState(src);

    const onError = () => {
        if (imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc || "/img/no-user.png");
        }
    };

    return <img className={`${className || "w-full h-full"} ${circle && 'rounded-full'}`} src={imageSrc} alt={alt} onError={onError} {...props} />;
};

export default Avatar;