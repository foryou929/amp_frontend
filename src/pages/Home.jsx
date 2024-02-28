import { useEffect, useState } from "react";

import { CiHeart } from "react-icons/ci";

import Header from "./Header";
import ModeSwitch from "../components/ModeSwitch"
import Link from "../components/Link";
import Button from "../components/Button";
import Select from "../components/Select";
import Image from "../components/Image";


const Item = () => {
    return (
        <div className="p-2">
            <div className="w-40 h-32">
                <Image src={"123"} />
            </div>
            <div className="w-full flex justify-between items-center">
                <p className="text-sm">募集期間〜●●⽉●●⽇</p>
                <CiHeart className="w-6 h-6" />
            </div>
            <div className="w-full flex justify-between items-end">
                <p className="text-md font-bold">150 pt</p>
                <p className="text-sm">残り●●件</p>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <>
            <Header>
                {/* <ModeSwitch
                    className="w-40"
                    label1={
                        <div>
                            <p className="text-sm font-bold text-center">USER</p>
                            <p className="text-xs text-center">MODE</p>
                        </div>
                    }
                    label2={
                        <div>
                            <p className="text-sm font-bold text-center">PR ORDER</p>
                            <p className="text-xs text-center">MODE</p>
                        </div>
                    }
                    onChange={(v) => {
                        setMode(v)
                    }}
                /> */}
            </Header>
            <main>
                <div className="container">
                    <div className="flex bg-gray-200 p-1 text-xs">
                        <div className="flex-grow bg-white p-2 flex gap-1">
                            <div className="flex-grow text-center">
                                <p>獲得済み</p>
                                <p>2,500 pt</p>
                            </div>
                            <div className="flex-grow text-center">
                                <Link to="/1">出⾦依頼</Link>
                            </div>
                            <div className="flex-grow text-center">
                                <p>
                                    <span>進⾏中</span>
                                    <Link to={"/2"} className="ml-1 text-blue-400">進⾏中⼀覧へ</Link>
                                </p>
                            </div>
                        </div>
                        <div className="flex-none bg-gray-200 p-2 flex gap-1">
                            <div className="flex-grow">
                                <p>進捗報告等</p>
                                <p>未読メッセージ</p>
                            </div>
                            <div className="flex-none">
                                <Link to="/3">2件</Link><br />
                                <Link to="/4">2件</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex p-2 text-xs">
                        <div className="bg-gray-200 flex items-center">
                            <div className="p-1 w-52">
                                <div className="bg-white flex items-center">
                                    <img
                                        className="w-8"
                                        src="/img/mouse-tap.svg" />
                                    <div className="text-xs font-bold flex-grow">
                                        多くのPRスペースを 追加して報酬を得よう
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow">
                                <Select
                                    value={0}
                                    options={[
                                        { value: 0, label: "募集PRスペース・仕事の種類" },
                                        { value: 1, label: "⾞" },
                                        { value: 2, label: "家" },
                                        { value: 3, label: "看板" },
                                        { value: 4, label: "商品使⽤・レビュー等" },
                                    ]}
                                    onChange={() => { }}
                                />
                            </div>
                            <div className="flex-none p-2">
                                <Button>作成</Button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex gap-1 items-end">
                        <div className="flex flex-col gap-1 text-xs">
                            <Select
                                className="py-1"
                                options={[
                                    { value: 0, label: "国" }
                                ]}
                            />
                            <Select
                                className="py-1"
                                options={[
                                    { value: 0, label: "都道府県" }
                                ]}
                            />
                        </div>
                        <ModeSwitch
                            className="flex-grow text-sm"
                            label1="種類・カテゴリで探す"
                            label2="PR場所で探す"
                        />
                    </div>
                    <div className="w-full overflow-x-scroll">
                        <div className="w-full flex justify-between items-end">
                            <h3 className="ml-4 font-bold text-lg">おすすめプロジェクト</h3>
                            <Link to="/5">すべて⾒る</Link>
                        </div>
                        <div className="flex overflow-x-scroll">
                            {
                                Array.from({ length: 3 }).map((_, index) => (
                                    <Item key={index} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full flex justify-between items-end">
                            <h3 className="ml-4 font-bold text-lg">ステッカー・シール</h3>
                            <Link to="/6">すべて⾒る</Link>
                        </div>
                        <div className="flex overflow-x-scroll">
                            {
                                Array.from({ length: 3 }).map((_, index) => (
                                    <Item key={index} />
                                ))
                            }
                        </div>
                    </div>
                </div >
            </main>
        </>
    );
};

export default Home;