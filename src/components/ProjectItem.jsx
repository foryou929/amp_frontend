import { NavLink } from "react-router-dom";
import Avatar from "./Avatar";

const ProjectItem = ({ project }) => {
    return (
        <NavLink to={`/${localStorage.getItem("mode")}/project/project?id=${project?.id}`} className="flex items-center gap-2">
            <div className="flex-grow flex gap-4 items-start">
                <div className="flex-none w-12">
                    <Avatar src={project?.img} />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                    <div className="w-full flex gap-2 items-center">
                        <div className={`px-4 py-2 font-bold ${project?.progress == 1 && "bg-[#E9ECEF] text-[#212529]"}`}>
                            {project?.progress_choice}
                        </div>
                        {project?.date ? <p>{project?.date}</p> : <></>}
                    </div>
                    <p className="text-[#00146E] text-lg font-bold mt-1">{project?.name}</p>
                    {project?.subtitle ? <p className="mt-1">{project?.subtitle}</p> : <></>}
                    <p className="font-bold text-sm mt-1">{project?.points}pt</p>
                    <p className="text-gray-400 text-sm mt-1">{project?.type}</p>
                    <div className="mt-1 p-2 bg-[#F8F9FA] text-sm flex justify-between">
                        <p>提案数:4</p> <p>募集数:{project?.recruitment_number}</p> <p>期間:あと10日</p>
                        {project?.detail}
                    </div>
                </div>
            </div>
            <div className="flex-none cursor-pointer px-2">
                <img className="w-2 h-4 text-gray" src="/img/line-angle-right-icon.svg" />
            </div>
        </NavLink>
    )
}

export default ProjectItem;