import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Tab from "../../components/Tab";
import Progress from "./components/Progress";
import Summary from "./components/Summary"

import query from "../../utils/query";

const Detail = ({ mode }) => {
    const [queryParameters] = useSearchParams();

    const id = queryParameters.get("id");

    const [project, setProject] = useState({});
    const [section, setSection] = useState({ project: {} });

    useEffect(() => {
        if (id) {
            query.auth.get(`/api/section/${id}`, section => {
                setSection(section)
                query.auth.get(`/api/project/${section.project.id}`, project => {
                    setProject(project);
                })
            });
        }
    }, [id]);

    return (
        <>
            <h1 className="text-2xl font-bold">{section.project.name}</h1>
            <Tab
                className="mt-12"
                tabs={
                    [
                        {
                            title: '進推•概要', content: (
                                <>
                                    <Progress mode={mode} id={section.id} />
                                    <Summary project={project} />
                                </>
                            )
                        },
                        {
                            title: 'メッセージ', content: (
                                <>
                                </>
                            )
                        },
                        {
                            title: '契約•支払い', content: (
                                <>
                                </>
                            )
                        },
                    ]}
            />
        </>
    )
}

export default Detail;