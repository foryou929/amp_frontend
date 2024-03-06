import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import Tab from "../../components/Tab";
import Progress from "./components/Progress";
import Summary from "./components/Summary"

import query from "../../utils/query";
import Message from "./components/Message";

const Detail = ({ mode }) => {
    const [queryParameters] = useSearchParams();
    const navigate = useNavigate();

    const id = queryParameters.get("id");
    const activeTab = queryParameters.get("activeTab") || 0;

    const [project, setProject] = useState({});
    const [section, setSection] = useState({ project: {} });

    useEffect(() => {
        if (id) {
            if (mode == "client") {
                query.auth.get(`/${mode}/section/${id}`, section => {
                    setSection(section)
                    query.auth.get(`/${mode}/project/${section.project.id}`, project => setProject(project))
                });
            }
            if (mode == "user") {
                query.auth.get(`/${mode}/project/${id}`, project => setProject(project))
                query.auth.get(`/${mode}/section/project/${id}`, section => {
                    setSection(section);
                }, () => { });
            }
        }
    }, [id]);

    return (
        <>
            <h1 className="text-2xl font-bold">{project.name}</h1>
            <Tab
                defaultActiveTab={activeTab}
                className="mt-12"
                onChangeTab={(index) => {
                    navigate(`/user/project/detail?activeTab=${index}&id=1`)
                }}
                tabs={
                    [
                        {
                            title: '進推•概要', content: (
                                <>
                                    <Progress mode={mode} project={project} id={section.id} />
                                    <Summary project={project} />
                                </>
                            )
                        },
                        {
                            title: 'メッセージ', content: (
                                <>
                                    <Message mode={mode} id={section.id} />
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