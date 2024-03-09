import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Backward from "../../components/Backward";
import Button from "../../components/Button";
import Image from "../../components/Image";

import { AREAS, RECRUITMENT_CONTENTS, SPACE_TYPES } from "../../utils/constants";
import query from "../../utils/query";

const Detail = ({ mode }) => {
    const navigate = useNavigate();
    
    const [project, setProject] = useState({});

    const [queryParameters] = useSearchParams();
    const id = queryParameters.get("id");

    useEffect(() => {
        query.auth.get(`/${mode}/project/${id}`, project => setProject(project));
    }, []);

    return (
        <>
            <Backward>戻る</Backward>
            <div className="flex items-center gap-4">
                {
                    project.project_images?.length > 0 ?
                        <Image className="flex-none w-24 h-24" src={project.project_images[0].source} /> :
                        <Image className="flex-none w-24 h-24" src={"/img/no-image.svg"} />
                }
                <div className="flex-grow">
                    <h2 className="text-xl font-bold text-[#00146E]">{project.name}</h2>
                    <p className="font-bold">{project.points}pt / 1日~</p>
                </div>
            </div>
            <h2 className="text-xl font-bold mt-4">説明</h2>
            <p>{project.description}</p>
            <h2 className="text-xl font-bold mt-4">プロジェクト詳細</h2>
            <ul className="mt-2">
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">募集コンテンツ</p>
                    <p className="w-1/2">{RECRUITMENT_CONTENTS.filter(recruitment_content => recruitment_content.value == project.recruitment_content)[0]?.label}</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">スペース種別</p>
                    <p className="w-1/2">{SPACE_TYPES.filter(space_type => space_type.value == project.space_type)[0]?.label}</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">エリア</p>
                    <p className="w-1/2">{AREAS.filter(area => area.value == project.area)[0]?.label}</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">価格</p>
                    <p className="w-1/2">{project.points}pt</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">年代指定</p>
                    <p className="w-1/2">{project.year_designation ? "なし" : "あり"}</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">募集数</p>
                    <p className="w-1/2">{project.recruitment_number}人</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">提案数</p>
                    <p className="w-1/2">{project.suggest_count}</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">コンテンツサイズ</p>
                    <p className="w-1/2">{project.content_size}</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">募集期間</p>
                    <p className="w-1/2">{project.recruitment_period}週間</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">プロジェクト期間</p>
                    <p className="w-1/2">{project.project_period}週間</p>
                </li>
            </ul>
            {mode == "user" && <Button className="w-full mt-4" onClick={() => navigate(`/user/project/apply?id=${id}`)}>応募する</Button>}
            {mode == "client" && <Button className="w-full mt-4" onClick={() => navigate(`/client/project/info?id=${id}`)}>進行状況</Button>}
        </>
    )
}

export default Detail;