import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

import Link from "../../components/Link";
import List from "../../components/List";
import ProjectItem from "../../components/ProjectItem";

import { FINISH, PROGRESSING, RECRUITING } from "../../utils/constants";
import query from "../../utils/query";

const Manage = () => {
    const [queryParameters] = useSearchParams();

    const page = queryParameters.get("page") || 1;
    const type = queryParameters.get("type") || PROGRESSING;

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        query.auth.get("/api/project", (res) => setProjects(res));
    }, [page]);

    return (
        <>
            <h1 className="text-2xl font-bold">プロジェクト</h1>
            <div className="flex justify-between mt-4">
                <p>{projects[RECRUITING]?.length + projects[PROGRESSING]?.length + projects[FINISH]?.length}件</p>
                {type == FINISH ? <></> : <Link to={`/client/project/manage?type=${FINISH}`} >終了したプロジェクト&gt;</Link>}
            </div>
            {
                type == FINISH ? <></>
                    : (
                        <div className="flex mt-4">
                            <NavLink to={`/client/project/manage?type=${PROGRESSING}`} className={`w-1/2 py-2 text-center ${type == PROGRESSING ? "bg-[#00146E] text-white" : "bg-[#F8F9FA] border border-gray-200"}`}>
                                <p>進行中</p>
                                <p className="text-gray-400">{projects[PROGRESSING]?.length}件</p>
                            </NavLink>
                            <NavLink to={`/client/project/manage?type=${RECRUITING}`} className={`w-1/2 py-2 text-center ${type == RECRUITING ? "bg-[#00146E] text-white" : "bg-[#F8F9FA] border border-gray-200"}`}>
                                <p>募集中</p>
                                <p className="text-gray-400">{projects[RECRUITING]?.length}件</p>
                            </NavLink>
                        </div>
                    )
            }
            <List className="mt-4" items={projects[type]?.map((project) => {
                return {
                    key: project.id,
                    content: <ProjectItem project={project} />
                }
            })}
            />
        </>
    )
}

export default Manage;