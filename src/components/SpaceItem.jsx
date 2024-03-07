import { NavLink } from "react-router-dom";

import Image from "./Image";

const SpaceItem = ({ mode, space }) => {
    return (
        <div className="flex gap-2">
            <div className="w-[calc(100%-16px)] flex gap-4 items-start">
                {
                    space.space_images.length >= 1 ?
                        <Image className="flex-none w-12 h-12" src={space.space_images[0].source} /> :
                        <Image className="flex-none w-12 h-12" src={"/img/no-image.svg"} />
                }
                <div className="w-[calc(100%-64px)] flex flex-col justify-center">
                    <h3 className="text-[#00146E] text-lg font-bold mt-1 overflow-hidden text-ellipsis text-nowrap">{space.title}</h3>
                    <p className="font-bold text-sm mt-1">{space.points}pt</p>
                    <p className="text-gray-400 text-sm mt-1">{space.type}</p>
                </div>
            </div>
            <NavLink to={mode == "user" ? `/user/space/detail?id=${space?.id}` : `/client/space/detail?id=${space?.id}`} className="flex-none cursor-pointer px-2 flex items-center">
                <img className="w-4 h-4 text-gray" src="/img/right-arrow.svg" />
            </NavLink>
        </div >
    )
};

export default SpaceItem;