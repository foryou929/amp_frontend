import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import Link from "../../../components/Link";
import List from "../../../components/List";
import ProjectItem from "../../../components/ProjectItem";

import query from "../../../utils/query";

const Profile = ({ mode }) => {
    const { user } = useSelector(state => state.user);

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        query.auth.get(`/${mode}/project`, (projects) => setProjects(projects));
    }, []);

    return (
        <>
            <h1 className="text-2xl font-bold">マイページ</h1>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">ポイント</h2>
                <div className="bg-[#F0F2F8] rounded-lg p-6 flex justify-between items-center my-2">
                    <h2 className="text-xl font-bold text-[#00146E]">
                        {user.points}pt
                    </h2>
                    <Button>ポイント購入</Button>
                </div>
            </div>
            <div className="w-full my-8">
                <h2 className="text-xl font-bold">進行中のプロジェクト</h2>
                <List
                    className="my-4"
                    items={
                        projects.filter(project => {
                            return project.status == 1;
                        }).map(project => {
                            return {
                                key: project.id,
                                content: <ProjectItem mode={mode} project={project} />
                            }
                        })
                    }
                />
                <div className="p-4">
                    <Button className="w-full">プロジェクトー覧</Button>
                </div>
            </div>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">募集中のプロジェクト</h2>
                <List
                    className="my-4"
                    items={
                        projects.filter(project => {
                            return project.status == 0;
                        }).map(project => {
                            return {
                                key: project.id,
                                content: <ProjectItem mode={mode} project={project} />
                            }
                        })
                    }
                />
                <div className="p-4">
                    <Button className="w-full">募集中のプロジェクトー覧</Button>
                </div>
            </div>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">依頼中のスペース</h2>
                <List
                    className="my-4"
                    items={
                        []
                    }
                />
                <div className="p-4">
                    <Button className="w-full">依頼中のスー覧</Button>
                </div>
            </div>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">プロフィール</h2>
                <div className="py-4">
                    <Avatar src={user.avatar} circle className={"w-16 h-16"} />
                </div>
                <h3 className="text-lg font-bold">{user.name}</h3>
                <p className="text-gray-400">{user.area}</p>
                <p className="text-gray-400">{user.type}</p>
                <div className="w-full mt-4">
                    <div className="my-2">
                        <h3 className="text-lg font-bold my-2">主なサービスなど</h3>
                        <pre className="whitespace-pre-wrap">{user.main_service}</pre>
                    </div>
                    <div className="my-2">
                        <h3 className="text-lg font-bold my-2">主なPR対象</h3>
                        <pre className="whitespace-pre-wrap">{user.main_pr_target}</pre>
                    </div>
                    <div className="my-2">
                        <h3 className="text-lg font-bold my-2">メッセージ</h3>
                        <pre className="whitespace-pre-wrap">{user.main_message}</pre>
                    </div>
                    <div className="my-2">
                        <h3 className="text-lg font-bold my-2">ホームページURL</h3>
                        <Link to={user.website_url}>{user.website_url}</Link>
                    </div>
                    <Link to="/client/profile/registration" className="mt-4">
                        <Button className="w-full">プロフィール編集</Button>
                    </Link>
                </div>
            </div >
        </>
    );
}

export default Profile;