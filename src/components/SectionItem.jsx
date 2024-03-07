import { NavLink } from "react-router-dom";

import Avatar from "./Avatar";
import Image from "./Image";
import moment from "moment";
import { STEPS } from "../utils/constants";

const SectionItem = ({ mode, section, project }) => {
    return (
        <div className="flex gap-2">
            <div className="flex-grow flex gap-4 items-start">
                {
                    mode == "client" ?
                        <Avatar src={section.user.avatar} /> :
                        project.project_images[0].length > 0 ?
                            <Image className="w-12 flex-none" src={project.project_images} /> :
                            <Image className="w-12 flex-none" src={"/img/no-image.svg"} />
                }
                <div className="flex-grow flex flex-col justify-center">
                    {
                        project ?
                            <>
                                <div className="w-full flex gap-2 items-center">
                                    <div className={`p-2 font-bold rounded ${section.step == 5 || section.step == 6 ? "bg-[#F08E1B] text-white" : "bg-[#E9ECEF] text-[#212529]"}`}>
                                        {STEPS[mode][section.step].label}
                                    </div>
                                    <p>{moment(project.updated_at).format("YYYY年MM月DD日")}</p>
                                </div>
                                <h3 className="text-lg font-bold text-[#00146E]">{project.name}</h3>
                                <p className="font-bold text-sm mt-1">{project.points}pt</p>
                                <p className="mt-1">{project.space_type}</p>
                            </> :
                            <></>
                    }
                    <div className="flex gap-2 items-start">
                        <div className="w-12 flex-none">
                        </div>
                        <div className="flex-grow">
                            <NavLink to={`/user/profile/info?id=${section.user.id}`} className="whitespace-nowrap overflow-hidden text-ellipsis font-bold">
                                {section.user.username}
                            </NavLink>
                            <p className="text-right text-sm text-gray-400">
                                {moment(section.created_at).format("YYYY年MM月DD日 HH:mm")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <NavLink to={mode == "user" ? `/user/project/detail?id=${section.id}` : `/client/project/detail?id=${section.id}`} className="flex-none cursor-pointer px-2 flex items-center">
                <img className="w-4 h-4 text-gray" src="/img/right-arrow.svg" />
            </NavLink>
        </div >
    )
}

export default SectionItem;