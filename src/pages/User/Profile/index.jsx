import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import { CheckGroupString } from "../../../components/CheckGroup";
import List from "../../../components/List";
import ProjectItem from "../../../components/ProjectItem";

import { AREAS, SPACE_TYPES, TRANSPORTATIONS, USER_TYPES } from "../../../utils/constants";
import query from "../../../utils/query";
import SpaceItem from "../../../components/SpaceItem";

const Profile = ({ mode }) => {
    const navigate = useNavigate();

    const { user } = useSelector(state => state.user);

    const [sections, setSections] = useState([]);
    const [spaces, setSpaces] = useState([]);

    useEffect(() => {
        query.auth.get(`/${mode}/section`, (sections) => setSections(sections), () => { });
        query.auth.get(`/${mode}/space`, (spaces) => setSpaces(spaces), () => { });
    }, []);

    return (
        <>
            <h1 className="text-2xl font-bold">マイページ</h1>
            <div className="w-full my-8">
                <h2 className="text-xl font-bold">進行中のプロジェクト</h2>
                <List
                    className="my-4"
                    limit={3}
                    items={
                        sections.filter(section => {
                            return section.project && section.step >= 4 && section.step <= 10;
                        }).map(section => {
                            return {
                                key: section.id,
                                content: <ProjectItem mode={mode} project={section.project} section={section} />
                            }
                        })
                    }
                />
                <div className="p-4">
                    <Button className="w-full" onClick={() => navigate('/user/project/manage?type=0')}>進行中のプロジェクトー覧</Button>
                </div>
            </div>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">応募•招待</h2>
                <List
                    className="my-4"
                    limit={3}
                    items={
                        sections.filter(section => {
                            return section.project && section.step < 4;
                        }).map(section => {
                            return {
                                key: section.id,
                                content: <ProjectItem mode={mode} project={section.project} section={section} />
                            }
                        })
                    }
                />
                <div className="p-4">
                    <Button className="w-full" onClick={() => navigate('/user/project/manage?type=1')}>応募•スカウト一覧</Button>
                </div>
            </div>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">スペース</h2>
                <List
                    className="my-4"
                    limit={3}
                    items={spaces.map(space => {
                        return {
                            key: space.id,
                            content: <SpaceItem mode={mode} space={space} />
                        }
                    })}
                />
                <div className="p-4">
                    <Button className="w-full" onClick={() => navigate('/user/space/manage')}>依頼中のスー覧</Button>
                </div>
            </div>
            <h2 className="text-xl font-bold">プロフィール</h2>
            <div className="py-4">
                <Avatar src={user.avatar} circle className={"w-16 h-16"} />
            </div>
            <h3 className="text-lg font-bold">{user.username}</h3>
            <p className="text-gray-400">{AREAS.filter(area => area.value == user.area)[0]?.label}</p>
            <p className="text-gray-400">{USER_TYPES.filter(user_type => user_type.value == user.type)[0]?.label}</p>
            <div className="my-2">
                <h3 className="text-lg font-bold my-2">自己紹介</h3>
                <pre className="whitespace-pre-wrap">{user.self_introduction ? user.self_introduction : "データはありません。"}</pre>
            </div>
            <div className="my-2">
                <h3 className="text-lg font-bold my-2">活動範囲と頻度</h3>
                <pre className="whitespace-pre-wrap">{user.activity_scope ? user.activity_scope : "データはありません。"}</pre>
            </div>
            <div className="my-2">
                <h3 className="text-lg font-bold my-2">詳細</h3>
                <div className="p-1">
                    <div className="flex border-b border-b-gray-200 py-3">
                        <div className="w-5/12">
                            所有スペース
                        </div>
                        <div className="w-7/12">
                            <p>{user.available_space ? <CheckGroupString items={SPACE_TYPES} value={user.available_space} /> : "データはありません。"}</p>
                        </div>
                    </div>
                    <div className="flex border-b border-b-gray-200 py-3">
                        <div className="w-5/12">
                            生年月日
                        </div>
                        <div className="w-7/12">
                            <p>{user.birthday != "0000-0-0" ? user.birthday : "データはありません。"}</p>
                        </div>
                    </div>
                    <div className="flex border-b border-b-gray-200 py-3">
                        <div className="w-5/12">
                            職業
                        </div>
                        <div className="w-7/12">
                            <p>{user.AA ? user.AA : "データはありません。"}</p>
                        </div>
                    </div>
                    <div className="flex border-b border-b-gray-200 py-3">
                        <div className="w-5/12">
                            居住形態等
                        </div>
                        <div className="w-7/12">
                            <p>{user.residence_type ? user.residence_type : "データはありません。"}</p>
                        </div>
                    </div>
                    <div className="flex border-b border-b-gray-200 py-3">
                        <div className="w-5/12">
                            主な移動手段
                        </div>
                        <div className="w-7/12">
                            <p>{user.primary_transportation ? <CheckGroupString items={TRANSPORTATIONS} value={user.primary_transportation} /> : "データはありません。"}</p>
                        </div>
                    </div>
                    <div className="flex border-b border-b-gray-200 py-3">
                        <div className="w-5/12">
                            WEBSNS利用頻度
                        </div>
                        <div className="w-7/12">
                            <p>{user.follower_count ? user.follower_count : "データはありません。"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <NavLink to={"/user/profile/registration"} className="p-4">
                <Button className="w-full">プロフィール編集</Button>
            </NavLink>
        </>
    );
}

export default Profile;