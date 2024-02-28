import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Tab from "../../components/Tab";
import Progress from "./components/Progress";
import Summary from "./components/Summary"

import query from "../../utils/query";

const ProgressPage = ({ mode }) => {
    const [queryParameters] = useSearchParams();

    const id = queryParameters.get("id");
    const section_id = queryParameters.get("section_id");

    const [project, setProject] = useState({});

    useEffect(() => {
        query.auth.get(`/api/project/${id}`, res => {
            setProject(res)
        });
    }, [id]);

    return (
        <>
            <h1 className="text-2xl font-bold">{project.name}</h1>
            <Tab
                className="mt-12"
                tabs={
                    [
                        {
                            title: '進推•概要', content: (
                                <>
                                    <Progress mode={mode} project={project} section_id={section_id} />
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

export default ProgressPage;