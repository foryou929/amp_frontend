import { NavLink } from "react-router-dom";

import Avatar from "./Avatar";
import { STEPS } from "../utils/constants";
import moment from "moment";

const ProjectItem = ({ mode, project, section }) => {
    return (
        <div className="flex gap-2">
            <div className="flex-grow flex gap-4 items-start">
                <div className="flex-none w-12">
                    <Avatar src={project.img} />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                    <div className="w-full flex gap-2 items-center">
                        {
                            section ? (
                                <div className={`p-2 font-bold rounded ${section.step == 5 || section.step == 6 ? "bg-[#F08E1B] text-white" : "bg-[#E9ECEF] text-[#212529]"}`}>
                                    {STEPS[mode][section.step].label}
                                </div>
                            ) : <></>
                        }
                        <p>{moment(project.updated_at).format("YYYY年MM月DD日")}</p>
                    </div>
                    <h3 className="text-[#00146E] text-lg font-bold mt-1">{project.name}</h3>
                    {project.subtitle ? <p className="mt-1">{project.subtitle}</p> : <></>}
                    <p className="font-bold text-sm mt-1">{project.points}pt</p>
                    <p className="text-gray-400 text-sm mt-1">{project.type}</p>
                    <div className="mt-1 p-2 bg-[#F8F9FA] text-sm flex justify-between">
                        {section && <p>提案数: {section.suggest_count}</p>} {project && <><p>募集数:{project.recruitment_number}</p> <p>期間:あと{moment(project.created_at).add(project.recruitment_period, 'days').diff(moment(project.current), 'days')}日</p></>}
                        {/* {project.detail} */}
                    </div>
                </div>
            </div>
            <NavLink to={mode == "user" ? `/user/project/detail?id=${project?.id}` : `/client/project/info?id=${project?.id}`} className="flex-none cursor-pointer px-2 flex items-center">
                <img className="w-2 h-4 text-gray" src="/img/line-angle-right-icon.svg" />
            </NavLink>
        </div >
    )
}

export default ProjectItem;