import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import List from "../../components/List";
import ProjectItem from "../../components/ProjectItem";

import query from "../../utils/query";

const View = ({ mode }) => {
    const [queryParameters] = useSearchParams();
    const page = queryParameters.get("page") || 1;

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        query.auth.get(`/api/${mode}/project`, (res) => setProjects(res));
    }, [page]);

    return (
        <>
            <h1 className="text-2xl font-bold">仕事•案件を探す</h1>
            <List className="mt-4" items={projects.map((project) => {
                return {
                    key: project.id,
                    content: <ProjectItem mode={mode} project={project} />
                }
            })}
            />
        </>
    )
}

export default View;