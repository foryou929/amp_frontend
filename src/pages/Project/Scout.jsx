import { useEffect, useState } from "react";
import List from "../../components/List";
import query from "../../utils/query";
import moment from "moment";
import { NavLink } from "react-router-dom";

const Scout = () => {
    const [scouts, setScouts] = useState([]);

    useEffect(() => {
        query.auth.get("/api/project/scout", (res) => {
            const scouts = [];
            res.forEach(project => {
                project.sections.forEach(section => {
                    scouts.push({ project, section });
                });
            });
            setScouts(scouts)
        });
    }, []);

    return (
        <>
            <h1 className="text-2xl font-bold">スカウト一覧</h1>
            <List
                className="mt-4"
                items={
                    scouts.map(scout => {
                        return {
                            key: scout.section.id,
                            content: (
                                <div className="flex gap-2">
                                    <div className="w-12 flex-none">

                                    </div>
                                    <div className="w-[calc(100%-80px)]">
                                        <NavLink to={`/client/project/info?id=${scout.project.id}`} className="text-lg font-bold text-[#00146E]">
                                            {scout.project.name}
                                        </NavLink>
                                        <div className="flex gap-2">
                                            <div className="w-12 flex-none">
                                            </div>
                                            <div className="w-[calc(100%-56px)]">
                                                <NavLink to={`/user/profile/info?id=${scout.section.user.id}`} className="whitespace-nowrap overflow-hidden text-ellipsis font-bold">
                                                    {scout.section.user.username}
                                                </NavLink>
                                                <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                                                    {scout.section.messages[0].content}
                                                </p>
                                                <p className="text-right text-sm text-gray-400">
                                                    {moment(scout.section.messages[0].created_at).format("YYYY年MM月DD日 HH:mm")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <NavLink to={`/client/project/info?id=${scout.project.id}&section_id=${scout.section.id}`} className="flex-none w-6 p-2 flex items-center">
                                        <img className="w-2 h-4 text-gray" src="/img/line-angle-right-icon.svg" />
                                    </NavLink>
                                </div>
                            )
                        }
                    })
                }
            />
        </>
    )
}

export default Scout;