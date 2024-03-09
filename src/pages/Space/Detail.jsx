import { useEffect, useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { useNavigate, useSearchParams } from "react-router-dom";

import Avatar from "../../components/Avatar";
import Backward from "../../components/Backward";
import Button from "../../components/Button";
import Image from "../../components/Image";
import Ranking from "../../components/Ranking";

import query from "../../utils/query";

const Detail = ({ mode }) => {
    const navigate = useNavigate();

    const [space, setSpace] = useState({ space_images: [] });

    const [queryParameters] = useSearchParams();
    const id = queryParameters.get("id");

    useEffect(() => {
        query.auth.get(`/${mode}/space/${id}`, (space) => {
            setSpace(space);
        });
    }, []);

    return (
        <>
            <Backward>戻る</Backward>
            <div className="mt-4">
                {
                    space.space_images.length >= 1 ?
                        <Image className="flex-none w-full" src={space.space_images[0].source} /> :
                        <Image className="flex-none w-full" src={"/img/no-image.svg"} />
                }
                {
                    space.space_images.length >= 2 ?
                        <div className="overflow-x-scroll h-32 mt-4 flex gap-2">
                            {
                                space.space_images.map((image, index) => {
                                    if (index == 0) return <></>
                                    return <Image className="flex-none h-full" src={image.source} />
                                })
                            }
                        </div> :
                        <></>
                }
            </div>
            <h1 className="text-2xl font-bold mt-4">{space.title}</h1>
            <h3 className="text-lg font-bold mt-2">{space.points}pt</h3>
            <p className="mt-2"><HiLocationMarker /></p>
            <Ranking className="mt-2" rank={2}>
                <span>30</span>
            </Ranking>
            <p className="mt-8">
                {space.description}
            </p>
            <h2 className="text-xl font-bold mt-4">スペースの詳細</h2>
            <ul className="mt-2">
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">スペース種別</p>
                    <p className="w-1/2">{space.suggest_count}</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">期間</p>
                    <p className="w-1/2">{space.period}</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">価格</p>
                    <p className="w-1/2">{space.points}pt</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">エリア</p>
                    <p className="w-1/2">{space.suggest_count}</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">ステータス</p>
                    <p className="w-1/2">{space.suggest_count}</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">取引トラブル等回数</p>
                    <p className="w-1/2">{space.suggest_count}</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">レビュー</p>
                    <p className="w-1/2">
                        <Ranking rank={3}>
                            <span className="text-[#00146E]">30</span>
                        </Ranking>
                    </p>
                </li>
            </ul>
            {
                mode == "client" && (
                    <>
                        <div className="p-4 bg-[#F8F9FA] rounded mt-4">
                            <h2 className="text-xl font-bold">
                                ユーザー情報
                            </h2>
                            <div className="flex mt-4 gap-4">
                                <div className="flex-none">
                                    <Avatar src={space.creator?.avatar} circle />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-[#00146E]">{space.creator?.username}</h3>
                                    <Ranking className="mt-2" rank={3}>
                                        <span className="text-[#00146E]">30</span>
                                    </Ranking>
                                </div>
                            </div>
                        </div >
                        <Button className="w-full mt-4" revert>お気に入りに追加</Button>
                        <Button className="w-full mt-16" onClick={() => navigate(`/client/space/apply?id=${id}`)}>依頼する</Button>
                    </>
                )
            }
        </>
    )
}

export default Detail;