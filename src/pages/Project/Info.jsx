import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Button from "../../components/Button";
import List from "../../components/List";
import SectionItem from "../../components/SectionItem";

import query from "../../utils/query";

const Info = ({ mode }) => {
    const [queryParameters] = useSearchParams();

    const id = queryParameters.get("id");

    const [project, setProject] = useState({});

    useEffect(() => {
        query.auth.get(`/${mode}/project/${id}`, project => setProject(project));
    }, [id]);

    return (
        <>
            <h1 className="text-2xl font-bold">{project.name}</h1>
            <Button className="w-full mt-4">募集を終了する</Button>
            <Button className="w-full mt-4">プロジェクトを終了する</Button>
            <List
                className="mt-8"
                items={project.project_sections?.map(section => {
                    return {
                        key: section.id,
                        content: <SectionItem mode={mode} section={section} />
                    }
                })} />
        </>
    )
}

export default Info;