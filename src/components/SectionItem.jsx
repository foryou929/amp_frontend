import moment from "moment";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { PROJECT_STEPS } from "../utils/constants";
import Avatar from "./Avatar";

const SectionItem = ({ mode, section, project }) => {
    return (
        <div className="flex gap-2">
            <div className="w-[calc(100%-40px)] flex gap-4 items-start">
                <Avatar src={section.user.avatar} />
                <div className="w-[calc(100%-64px)] flex flex-col justify-center">
                    {
                        project ?
                            <>
                                <div className="w-full flex gap-2 items-center">
                                    <div className={`p-2 font-bold rounded ${section.step == 5 || section.step == 6 ? "bg-[#F08E1B] text-white" : "bg-[#E9ECEF] text-[#212529]"}`}>
                                        {PROJECT_STEPS[mode][section.step].label}
                                    </div>
                                    <p>{moment(project.updated_at).format("YYYY年MM月DD日")}</p>
                                </div>
                                <h3 className="text-lg font-bold text-[#00146E]">{project.name}</h3>
                                <p className="font-bold text-sm mt-1">{project.points}pt</p>
                                <p className="mt-1">{project.space_type}</p>
                            </> :
                            <></>
                    }
                    <NavLink to={`/user/profile/view?id=${section.user.id}`} className="whitespace-nowrap overflow-hidden text-ellipsis font-bold">
                        {section.user.username}
                    </NavLink>
                    <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                        {section.section_messages[0]?.content}
                    </p>
                    <p className="text-right text-sm text-gray-400">
                        {moment(section.created_at).format("YYYY年MM月DD日 HH:mm")}
                    </p>
                </div>
            </div>
            <NavLink to={`/client/project/progress?id=${section.id}`} className="flex-none cursor-pointer px-2 flex items-center">
                <FaAngleRight />
            </NavLink>
        </div >
    )
}

export default SectionItem;