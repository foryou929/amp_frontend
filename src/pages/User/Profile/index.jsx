import { useEffect } from "react";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import List from "../../../components/List";
import ProjectItem from "../../../components/ProjectItem";

import query from "../../../utils/query";

const Profile = () => {
    return (
        <>
            <h1 className="text-2xl font-bold">マイページ</h1>
            <div className="w-full my-8">
                <h2 className="text-xl font-bold">進行中のプロジェクト</h2>
                <List
                    className="my-4"
                    items={[
                        {
                            key: 0,
                            content: <ProjectItem img={"/1"} status={"広告物発送"} date={"2023年10月20日"} title={"プロジェクトのタイトル"} point={"200Pt/I日〜"} type={"車広告"} />
                        },
                        {
                            key: 1,
                            content: <ProjectItem img={"/1"} status={"広告物発送"} date={"2023年10月20日"} title={"プロジェクトのタイトル"} point={"200Pt/I日〜"} type={"車広告"} />
                        },
                        {
                            key: 2,
                            content: <ProjectItem img={"/1"} status={"広告物発送"} date={"2023年10月20日"} title={"プロジェクトのタイトル"} point={"200Pt/I日〜"} type={"車広告"} />
                        }
                    ]}
                />
                <div className="p-4">
                    <Button label={"プロジェクトー覧"} className={"w-full"} />
                </div>
            </div>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">応募•招待</h2>
                <List
                    className="my-4"
                    items={[
                        {
                            key: 0,
                            content: <ProjectItem img={"/1"} status={"広告物発送"} title={"プロジェクトのタイトル"} point={"200Pt/I日〜"} type={"車広告"} detail={"提案数:4人 当選者:1人 募集:あと10日"} />
                        },
                        {
                            key: 1,
                            content: <ProjectItem img={"/1"} status={"広告物発送"} title={"プロジェクトのタイトル"} point={"200Pt/I日〜"} type={"車広告"} detail={"提案数:4人 当選者:1人 募集:あと10日"} />
                        },
                        {
                            key: 2,
                            content: <ProjectItem img={"/1"} status={"広告物発送"} title={"プロジェクトのタイトル"} point={"200Pt/I日〜"} type={"車広告"} detail={"提案数:4人 当選者:1人 募集:あと10日"} />
                        }
                    ]}
                />
                <div className="p-4">
                    <Button label={"応募•スカウトー覧"} className={"w-full"} />
                </div>
            </div>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">スペース</h2>
                <List
                    className="my-4"
                    items={[
                        {
                            key: 0,
                            content: <ProjectItem img={"/1"} title={"プロジェクトのタイトル"} subtitle={"佐藤太郎"} point={"200Pt/I日〜"} type={"車広告"} />
                        },
                        {
                            key: 1,
                            content: <ProjectItem img={"/1"} title={"プロジェクトのタイトル"} subtitle={"佐藤太郎"} point={"200Pt/I日〜"} type={"車広告"} />
                        },
                        {
                            key: 2,
                            content: <ProjectItem img={"/1"} title={"プロジェクトのタイトル"} subtitle={"佐藤太郎"} point={"200Pt/I日〜"} type={"車広告"} />
                        }
                    ]}
                />
                <div className="p-4">
                    <Button label={"依頼中のス-覧"} className={"w-full"} />
                </div>
            </div>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">プロフィール</h2>
                <div className="py-4">
                    <Avatar src={"/1"} circle className={"w-16 h-16"} />
                </div>
                <h3 className="text-lg font-bold">supe-su</h3>
                <p className="text-gray-400">東京都</p>
                <p className="text-gray-400">企業</p>
                <div className="w-full mt-4">
                    <div className="my-2">
                        <h3 className="text-lg font-bold my-2">自己紹介</h3>
                        <p>企業店舗はもちろん、一般の方でも空きスペー スを PR 広告に貸し出したり、 商品使用をして報 酬を得られ、広告主もダイレクトに安価にPR可 能にできるスペースマッチングサービスを展開 しております。</p>
                        <p>•主なPR対象エリア：日本（エリア指定な し）</p>
                        <p>•インド（ムンバイ近郊）</p>
                        <p>•アメリカ（カリフオ ルニア州• ロサンゼルス近郊）</p>
                        <p>•主なPR対象：</p>
                        <p>PRや看板を使用したい企業や店舗団体の方 や、スペースを貸し出して報酬を得たい一般 ユーザー様を募集しております。</p>
                    </div>
                    <div className="my-2">
                        <h3 className="text-lg font-bold my-2">活動範囲と頻度</h3>
                        <p>PRや看板を使用したい企業や店舗団体の方や、 スペースを貸し出して報酬を得たい一般ユー ザー様を募集しております。</p>
                    </div>
                    <div className="my-2">
                        <h3 className="text-lg font-bold my-2">詳細</h3>
                        <div className="p-1">
                            <div className="flex border-b border-b-gray-200 py-3">
                                <div className="w-5/12">
                                    所有スペース
                                </div>
                                <div className="w-7/12">
                                    車の窓•車の車体•自転車•集合住宅•ノベルティーグッズの使用•WEB SNS•他
                                </div>
                            </div>
                            <div className="flex border-b border-b-gray-200 py-3">
                                <div className="w-5/12">
                                    年代
                                </div>
                                <div className="w-7/12">
                                    30代
                                </div>
                            </div>
                            <div className="flex border-b border-b-gray-200 py-3">
                                <div className="w-5/12">
                                    職業
                                </div>
                                <div className="w-7/12">
                                    就業者
                                </div>
                            </div>
                            <div className="flex border-b border-b-gray-200 py-3">
                                <div className="w-5/12">
                                    居住形態等
                                </div>
                                <div className="w-7/12">
                                    集合住宅
                                </div>
                            </div>
                            <div className="flex border-b border-b-gray-200 py-3">
                                <div className="w-5/12">
                                    主な移動手段
                                </div>
                                <div className="w-7/12">
                                    徒歩•車•バイク•他（飛行機 移動多め）
                                </div>
                            </div>
                            <div className="flex border-b border-b-gray-200 py-3">
                                <div className="w-5/12">
                                    WEBSNS利用頻度
                                </div>
                                <div className="w-7/12">
                                    インスタのフォロワーは10万 人 更新頻度も多めです。
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        <Button label={"プロフィール編集"} className={"w-full"} />
                    </div>
                </div>
            </div >
        </>
    );
}

export default Profile;