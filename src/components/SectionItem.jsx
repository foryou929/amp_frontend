import { NavLink } from "react-router-dom";

// import Avatar from "./Avatar";
import moment from "moment";
import { STEPS } from "../utils/constants";

const SectionItem = ({ mode, section }) => {
    return (
        <div className="flex gap-2">
            <div className="flex-grow flex gap-4 items-start">
                <div className="flex-none w-12">
                </div>
                <div className="flex-grow flex flex-col justify-center">
                    <div className="w-full flex gap-2 items-center">
                        <div className={`p-2 font-bold rounded ${section.step == 5 || section.step == 6 ? "bg-[#F08E1B] text-white" : "bg-[#E9ECEF] text-[#212529]"}`}>
                            {STEPS[mode][section.step].label}
                        </div>
                        <p>{moment(section.project.updated_at).format("YYYY年MM月DD日")}</p>
                    </div>
                    <h3 className="text-lg font-bold text-[#00146E]">{section.project.name}</h3>
                    <p className="font-bold text-sm mt-1">{section.project.points}pt</p>
                    <p className="mt-1">{section.project.space_type}</p>
                    {/*<div className="mt-1 p-2 bg-[#F8F9FA] text-sm flex justify-between">
                        {section?.suggest_count && <p>提案数: {section.suggest_count}</p>} {section.project && <><p>募集数:{section.project.recruitment_number}</p> <p>期間:あと{moment(section.project.created_at).add(section.project.recruitment_period, 'days').diff(moment(section.project.current), 'days')}日</p></>}
                        {section.project?.detail}
                    </div> */}
                    <div className="flex gap-2 items-start">
                        <div className="w-12 flex-none">
                        </div>
                        <div className="flex-grow">
                            <NavLink to={`/user/profile/info?id=${section.user.id}`} className="whitespace-nowrap overflow-hidden text-ellipsis font-bold">
                                {section.user.username}
                            </NavLink>
                            {/* <p className="whitespace-nowrap overflow-hidden text-ellipsis"> */}
                            {/* {section.messages[0].content} */}
                            {/* </p> */}
                            <p className="text-right text-sm text-gray-400">
                                {moment(section.created_at).format("YYYY年MM月DD日 HH:mm")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <NavLink to={mode == "user" ? `/user/project/detail?id=${section.id}` : `/client/project/detail?id=${section.id}`} className="flex-none cursor-pointer px-2 flex items-center">
                <img className="w-2 h-4 text-gray" src="/img/line-angle-right-icon.svg" />
            </NavLink>
        </div >
    )
}

export default SectionItem;