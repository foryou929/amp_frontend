import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

import Link from "../../components/Link";
import List from "../../components/List";
import ProjectItem from "../../components/ProjectItem";

import { PROJECT_STATUS } from "../../utils/constants";
import query from "../../utils/query";

const Manage = ({ mode }) => {

    const [queryParameters] = useSearchParams();
    const type = queryParameters.get("type") || PROJECT_STATUS.PROGRESSING;


    const [projects, setProjects] = useState([[], [], []]);

    useEffect(() => {
        query.auth.get(`/api/project/${mode}`, (result) => {
            const projects = [[], [], []];
            result.forEach((project) => {
                projects[project.status].push(project);
            });
            setProjects(projects);
        });
    }, []);


    return (
        <>
            <h1 className="text-2xl font-bold">プロジェクト</h1>
            <div className="flex justify-between mt-4">
                <p>{type == 0 || type == 1 ? projects[0].length + projects[1].length : projects[2].length}件</p>
                {type == PROJECT_STATUS.FINISH ? <></> : <Link to={`/${mode}/project/manage?type=${PROJECT_STATUS.FINISH}`} >終了したプロジェクト&gt;</Link>}
            </div>
            {
                type == PROJECT_STATUS.FINISH ? <></>
                    : (
                        <div className="flex mt-4">
                            <NavLink to={`/${mode}/project/manage?type=${PROJECT_STATUS.PROGRESSING}`} className={`w-1/2 py-2 text-center ${type == PROJECT_STATUS.PROGRESSING ? "bg-[#00146E] text-white" : "bg-[#F8F9FA] border border-gray-200"}`}>
                                <p>{mode == "user" ? "応募•招待" : "募集中"}</p>
                                <p className="text-gray-400">{projects[PROJECT_STATUS.PROGRESSING].length}件</p>
                            </NavLink>
                            <NavLink to={`/${mode}/project/manage?type=${PROJECT_STATUS.RECRUITING}`} className={`w-1/2 py-2 text-center ${type == PROJECT_STATUS.RECRUITING ? "bg-[#00146E] text-white" : "bg-[#F8F9FA] border border-gray-200"}`}>
                                <p>進行中</p>
                                <p className="text-gray-400">{projects[PROJECT_STATUS.RECRUITING].length}件</p>
                            </NavLink>
                        </div>
                    )
            }
            <List className="mt-4" items={projects[type].map((project) => {
                return {
                    key: project.id,
                    content: <ProjectItem mode={mode} project={project} />
                }
            })}
            />
        </>
    )
}

export default Manage;