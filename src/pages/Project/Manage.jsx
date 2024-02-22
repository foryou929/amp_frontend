import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Link from "../../components/Link";
import List from "../../components/List";
import ProjectItem from "../../components/ProjectItem";

import query from "../../utils/query";

const Manage = () => {
    const [queryParameters] = useSearchParams();

    const [active, setActive] = useState(1);
    const [page, setPage] = useState(1);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const page = queryParameters.get("page");
        if (page)
            setPage(page);
    }, [queryParameters]);

    useEffect(() => {
        query.auth.get("/api/project", (res) => setProjects(res));
    }, [page]);

    return (
        <>
            <h1 className="text-2xl font-bold">プロジェクト</h1>
            <div className="flex justify-between mt-4">
                <p>20件</p>
                <Link to={"/"} >終了したプロジェクト&gt;</Link>
            </div>
            <div className="flex mt-4">
                <div className={`w-1/2 py-2 text-center ${active == 1 ? "bg-[#00146E] text-white" : "bg-[#F8F9FA] border border-gray-200"}`} onClick={() => setActive(1)}>
                    <p>進行中</p>
                    <p className="text-gray-400">12件</p>
                </div>
                <div className={`w-1/2 py-2 text-center ${active == 2 ? "bg-[#00146E] text-white" : "bg-[#F8F9FA] border border-gray-200"}`} onClick={() => setActive(2)}>
                    <p>募集中</p>
                    <p className="text-gray-400">8件</p>
                </div>
            </div>
            <List items={projects.map((project) => {
                return {
                    key: project.id,
                    content: <ProjectItem img={"/1"} status={"広告物発送"} title={project.name} point={`${project.points}/1日〜`} type={"車広告"} detail={"提案数:4 募集数:1 期間:あと10日"} />
                }
            })}
            />
        </>
    )
}

export default Manage;