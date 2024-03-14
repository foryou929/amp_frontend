import moment from "moment";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import Image from "./Image";

import { PROJECT_STEPS } from "../utils/constants";

const ProjectItem = ({ mode, project, section }) => {
    const getRecruitmentPeriod = () => {
        const days = moment(project.created_at).add(project.recruitment_period, 'month').diff(moment(project.current), 'days');
        if (days < 0) return <p>募集終了</p>
        return <p>期間:あと{days}日</p>
    }
    return (
        <div className="flex gap-2">
            <div className="w-[calc(100%-16px)] flex gap-4 items-start">
                {
                    project.project_images.length > 0 ?
                        <Image className="flex-none w-12 h-12" src={project.project_images[0]?.source} /> :
                        <Image className="flex-none w-12 h-12" src={"/img/no-image.svg"} />
                }
                <div className="w-[calc(100%-64px)] flex flex-col justify-center">
                    <div className="w-full flex gap-2 items-center">
                        {
                            section ? (
                                <div className={`p-2 font-bold rounded ${section.step == 5 || section.step == 6 ? "bg-[#F08E1B] text-white" : "bg-[#E9ECEF] text-[#212529]"}`}>
                                    {PROJECT_STEPS[mode][section.step].label}
                                </div>
                            ) : <></>
                        }
                        <p>{moment(project.updated_at).format("YYYY年MM月DD日")}</p>
                    </div>
                    <h3 className="text-[#00146E] text-lg font-bold mt-1 overflow-hidden text-ellipsis text-nowrap">{project.name}</h3>
                    <p className="font-bold text-sm mt-1">{project.points}pt</p>
                    <p className="text-gray-400 text-sm mt-1">{project.type}</p>
                    <div className="mt-1 p-2 bg-[#F8F9FA] text-sm flex justify-between">
                        <p>提案数: {project.suggest_count || (section ? section.suggest_count : 0)}</p>
                        {
                            project &&
                            <>
                                <p>募集数:{project.recruitment_number}</p>
                                {getRecruitmentPeriod()}
                            </>
                        }
                    </div>
                </div>
            </div>
            <NavLink to={`/${mode}/project/detail?id=${project?.id}`} className="flex-none cursor-pointer px-2 flex items-center">
                <FaAngleRight />
            </NavLink>
        </div >
    )
}

export default ProjectItem;