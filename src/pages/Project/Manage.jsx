import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

import Forward from "../../components/Forward";
import List from "../../components/List";
import ProjectItem from "../../components/ProjectItem";

import { PROJECT_STATUS } from "../../utils/constants";
import query from "../../utils/query";

const Manage = ({ mode }) => {

    const [queryParameters] = useSearchParams();
    const type = queryParameters.get("type") || PROJECT_STATUS.PROGRESSING;


    const [sections, setSections] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (mode == "user") {
            query.auth.get(`/${mode}/section`, (sections) => {
                setSections(sections);
            });
        } else {
            query.auth.get(`/${mode}/project`, (projects) => {
                setProjects(projects);
            })
        }
    }, []);

    return (
        <>
            <h1 className="text-2xl font-bold">プロジェクト</h1>
            <div className="flex justify-between mt-4">
                <p>
                    {
                        mode == "user" ?
                            type == PROJECT_STATUS.FINISH ? sections.filter(section => section.project && section.step > 10).length : sections.filter(section => section.project && section.step <= 10).length :
                            type == PROJECT_STATUS.FINISH ? projects.filter(project => project.status == 2).length : projects.filter(project => project.status != 2).length
                    }件
                </p>
                {
                    type == PROJECT_STATUS.FINISH ?
                        <Forward className="flex-none cursor-pointer pr-2 flex items-center text-[#00146E]" to={`/${mode}/project/manage?type=${PROJECT_STATUS.RECRUITING}`} >
                            進行中のプロジェクト
                        </Forward> :
                        <Forward className="flex-none cursor-pointer pr-2 flex items-center text-[#00146E]" to={`/${mode}/project/manage?type=${PROJECT_STATUS.FINISH}`} >
                            終了したプロジェクト
                        </Forward>
                }
            </div>
            {
                type == PROJECT_STATUS.FINISH ? <></>
                    : (
                        <div className="flex mt-4">
                            <NavLink to={`/${mode}/project/manage?type=${PROJECT_STATUS.RECRUITING}`} className={`w-1/2 py-2 text-center ${type == PROJECT_STATUS.RECRUITING ? "bg-[#00146E] text-white" : "bg-[#F8F9FA] border border-gray-200"}`}>
                                <p>{mode == "user" ? "応募•招待" : "募集中"}</p>
                                <p className="text-gray-400">
                                    {
                                        mode == "user" ?
                                            sections.filter(section => section.project && section.step < 4).length :
                                            projects.filter(project => project.status == 0).length
                                    }件
                                </p>
                            </NavLink>
                            <NavLink to={`/${mode}/project/manage?type=${PROJECT_STATUS.PROGRESSING}`} className={`w-1/2 py-2 text-center ${type == PROJECT_STATUS.PROGRESSING ? "bg-[#00146E] text-white" : "bg-[#F8F9FA] border border-gray-200"}`}>
                                <p>進行中</p>
                                <p className="text-gray-400">
                                    {
                                        mode == "user" ?
                                            sections.filter(section => section.project && section.step >= 4 && section.step <= 10).length :
                                            projects.filter(project => project.status == 1).length
                                    }件
                                </p>
                            </NavLink>
                        </div>
                    )
            }
            <List
                pagination
                className="mt-4"
                items={
                    mode == "user" ?
                        sections.filter((section) => {
                            if (section.project == null) return false;
                            if (type == PROJECT_STATUS.RECRUITING)
                                return section.step < 4;
                            if (type == PROJECT_STATUS.PROGRESSING)
                                return section.step >= 4 && section.step <= 10;
                            if (type == PROJECT_STATUS.FINISH)
                                return section.step > 10;
                            return false;
                        }).map((section) => {
                            console.log()
                            return {
                                key: section.id,
                                content: <ProjectItem mode={mode} project={section.project} section={section} />
                            }
                        })
                        :
                        projects.filter((project) => {
                            return project.status == type
                        }).map((project) => {
                            return {
                                key: project.id,
                                content: <ProjectItem mode={mode} project={project} />
                            }
                        })
                }
            />
        </>
    )
}

export default Manage;