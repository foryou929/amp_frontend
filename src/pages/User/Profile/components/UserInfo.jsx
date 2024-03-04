import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Avatar from "../../../../components/Avatar";
import Button from "../../../../components/Button";
import { CheckGroupString } from "../../../../components/CheckGroup";

import { SPACE_TYPES, TRANSPORTATIONS } from "../../../../utils/constants";

const UserInfo = () => {
    const { user } = useSelector(state => state.user);

    return (
        <div className="w-full my-4">
            <h2 className="text-xl font-bold">プロフィール</h2>
            <div className="py-4">
                <Avatar src={user.avatar} circle className={"w-16 h-16"} />
            </div>
            <h3 className="text-lg font-bold">{user.username}</h3>
            <p className="text-gray-400">{user.area}</p>
            <p className="text-gray-400">{user.type}</p>
            <div className="w-full mt-4">
                <div className="my-2">
                    <h3 className="text-lg font-bold my-2">自己紹介</h3>
                    <p>{user.self_introduction ? user.self_introduction : "データはありません。"}</p>
                </div>
                <div className="my-2">
                    <h3 className="text-lg font-bold my-2">活動範囲と頻度</h3>
                    <p>{user.activity_scope ? user.activity_scope : "データはありません。"}</p>
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
                                年代
                            </div>
                            <div className="w-7/12">
                                <p>{user.birthday ? user.birthday : "データはありません。"}</p>
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

                <Link to={"/user/profile/registration"} className="p-4">
                    <Button className="w-full">プロフィール編集</Button>
                </Link>
            </div>
        </div >
    )
}

export default UserInfo;