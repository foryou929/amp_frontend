import { useEffect, useState } from "react";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import Link from "../../../components/Link";
import List from "../../../components/List";
import ProjectItem from "../../../components/ProjectItem";

import query from "../../../utils/query";

const Profile = ({ mode }) => {
    const [progressingSections, setProgressingSections] = useState([]);
    useEffect(() => {
        query.auth.get("/api/section/step/4/10", (projects) => setProgressingSections(projects));
    }, []);
    return (
        <>
            <h1 className="text-2xl font-bold">マイページ</h1>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">ポイント</h2>
                <div className="bg-[#F0F2F8] rounded-lg p-6 flex justify-between items-center my-2">
                    <h2 className="text-xl font-bold text-[#00146E]">
                        20,000pt
                    </h2>
                    <Button>ポイント購入</Button>
                </div>
            </div>
            <div className="w-full my-8">
                <h2 className="text-xl font-bold">進行中のプロジェクト</h2>
                <List
                    className="my-4"
                    items={
                        progressingSections.map((section) => {
                            return {
                                key: 0,
                                content: <ProjectItem mode={mode} project={section.project} section={section} />
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
                    items={[
                        {
                            key: 0,
                            content: <ProjectItem img={"/1"} date={"2023年10月20日"} title={"プロジェクトのタイトル"} point={"200Pt/I日〜"} type={"車広告"} />
                        },
                        {
                            key: 1,
                            content: <ProjectItem img={"/1"} date={"2023年10月20日"} title={"プロジェクトのタイトル"} point={"200Pt/I日〜"} type={"車広告"} />
                        },
                        {
                            key: 2,
                            content: <ProjectItem img={"/1"} date={"2023年10月20日"} title={"プロジェクトのタイトル"} point={"200Pt/I日〜"} type={"車広告"} />
                        }
                    ]}
                />
                <div className="p-4">
                    <Button className="w-full">募集中のプロジェクトー覧</Button>
                </div>
            </div>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">依頼中のスペース</h2>
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
                    <Button className="w-full">依頼中のスー覧</Button>
                </div>
            </div>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">プロフィール</h2>
                <div className="py-4">
                    <Avatar src={"/1"} circle className={"w-16 h-16"} />
                </div>
                <h3 className="text-lg font-bold">PRcash</h3>
                <p className="text-gray-400">東京都</p>
                <p className="text-gray-400">企業</p>
                <div className="w-full mt-4">
                    <div className="my-2">
                        <h3 className="text-lg font-bold my-2">用な人 ビスなど</h3>
                        <p>企業店舗はもちろん、一般の方でも空きスペー スを PR 広告に貸し出したり、 商品使用をして報 酬を得られ、広告主もダイレクトに安価にPR可 能にできるスペースマッチングサービスを展開 しております。</p>
                        <p>•主なPR対象エリア：日本（エリア指定な し）</p>
                        <p>•インド（ムンバイ近郊）</p>
                        <p>•アメリカ（カリフオ ルニア州• ロサンゼルス近郊）</p>
                        <p>•主なPR対象：</p>
                        <p>PRや看板を使用したい企業や店舗団体の方 や、スペースを貸し出して報酬を得たい一般 ユーザー様を募集しております。</p>
                    </div>
                    <div className="my-2">
                        <h3 className="text-lg font-bold my-2">主なPR対象</h3>
                        <p>PRや看板を使用したい企業や店舗団体の方や、 スペースを貸し出して報酬を得たい一般ユー ザー様を募集しております。</p>
                    </div>
                    <div className="my-2">
                        <h3 className="text-lg font-bold my-2">メッセージ</h3>
                        <p>現在多くの皆様にご応募をいただいておりま す。これからもよろしくおねがいいたします。 定員に達しているプロジェクトに関しては、お 気に入りプロジェクトに入れていただくと、募 集再開通知が送信されますので、ぜひお気に入 りプロジェクトへの追加をお願いいたします。</p>
                    </div>
                    <div className="my-2">
                        <h3 className="text-lg font-bold my-2">ホームページURL</h3>
                        <Link to="https://hogehoge.com">https://hogehoge.com</Link>
                    </div>
                    <div className="p-4">
                        <Button className="w-full">プロフィール編集</Button>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Profile;