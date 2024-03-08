import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button";
import List from "../../../components/List";
import ProjectItem from "../../../components/ProjectItem";
import UserInfo from "./components/UserInfo";

import query from "../../../utils/query";

const Profile = ({ mode }) => {
    const [sections, setSections] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        query.auth.get(`/${mode}/section`, (sections) => {
            setSections(sections);
        });
    }, []);

    return (
        <>
            <h1 className="text-2xl font-bold">マイページ</h1>
            <div className="w-full my-8">
                <h2 className="text-xl font-bold">進行中のプロジェクト</h2>
                <List
                    className="my-4"
                    items={
                        sections.filter(section => {
                            return section.step >= 4 && section.step <= 10;
                        }).map(section => {
                            return {
                                key: section.id,
                                content: <ProjectItem mode={mode} project={section.project} section={section} />
                            }
                        })
                    }
                />
                <div className="p-4">
                    <Button className="w-full" onClick={() => navigate('/user/project/manage?type=0')}>プロジェクトー覧</Button>
                </div>
            </div>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">応募•招待</h2>
                <List
                    className="my-4"
                    items={
                        sections.filter(section => {
                            return section.step < 4;
                        }).map(section => {
                            return {
                                key: section.id,
                                content: <ProjectItem mode={mode} project={section.project} section={section} />
                            }
                        })
                    }
                />
                <div className="p-4">
                    <Button className="w-full" onClick={() => navigate('/user/project/manage?type=1')}>応募•スカウトー覧</Button>
                </div>
            </div>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">スペース</h2>
                <List
                    className="my-4"
                    items={[]}
                />
                <div className="p-4">
                    <Button className="w-full" onClick={() => navigate('/user/space/manage')}>依頼中のスー覧</Button>
                </div>
            </div>
            <UserInfo />
        </>
    );
}

export default Profile;