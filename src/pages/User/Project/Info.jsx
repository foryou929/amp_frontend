import { useState } from "react";
import Button from "../../../components/common/Button";
import Tab from "../../../components/common/Tab";

const Info = () => {
    const [steps, setSteps] = useState(
        [
            { label: "提案" },
            { label: "選定" },
            { label: "承諾" },
            { label: "仮払い", content: '2023年10月10日:株式会社ホゲホがんが仮払いをおこないました' },
            { label: "広告物発送", content: '2023年10月11日:株式会社ホゲホゲさんが広告物を発送しました' },
            { label: "広告物受け取り", content: '2023年10月12日:佐藤太郎さんが広告物を愛け取りました' },
            { label: "開始報告", content: "2023年如月U日:佐蔽太郎さんが開始報歹おこないました" },
            { label: "経過報告" },
            { label: "終了報告" },
            { label: "報酬受取" },
            { label: "レビュー" },
        ]
    )
    return (
        <>
            <h1 className="text-2xl font-bold">プリウスの後ろ窓にステッカー を貼ります</h1>
            <Tab
                className="mt-12"
                tabs={
                    [
                        {
                            title: '進推•概要', content: (
                                <>
                                    <h1 className="text-2xl font-bold mt-4">
                                        プロジェクト進榜状況
                                    </h1>
                                    <div className="rounded p-4 bg-[#F0F2F8] mt-2">
                                        <h2 className="text-xl font-bold text-[#00146E]">現在は開始報告</h2>
                                        <p className="mt-2">
                                            あなたが開始報告をおこないました。業務 を開始して、〇月〇日になったら経過報告 をおこなってください。
                                        </p>
                                        <Button label={"経過報告をする"} className="mt-4" />
                                    </div>
                                    <ul>
                                        {
                                            steps.map((step, index) => (
                                                <li key={index} className="border-b border-[#DEE2E6] py-4">
                                                    <div className="flex items-center">
                                                        <div className="w-[48px] px-2">
                                                            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                                                <circle cx="16" cy="16" r="15" stroke="#21AD8B" strokeWidth="1" fill="none" />
                                                                <path d="M10 16 L 14 20 22 12" stroke="#21AD8B" strokeWidth="1" fill="none" />
                                                            </svg>
                                                        </div>
                                                        <div className="flex-grow">
                                                            {step.label}
                                                        </div>
                                                    </div>
                                                    <div className="ml-[48px] text-sm text-[#757D85] pr-4">
                                                        {
                                                            step.content
                                                        }
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </>
                            )
                        },
                        {
                            title: 'メッセージ', content: (
                                <>
                                </>
                            )
                        },
                        {
                            title: '契約•支払い', content: (
                                <>
                                </>
                            )
                        },
                    ]}
            />
            <div className="mt-8 rounded-xl p-4 bg-[#F8F9FA]">
                <h2>プロジェクト概要</h2>
                <div className="flex items-center">
                    <div className="w-[96px] h-[96px]">

                    </div>
                    <div className="flex-grow">
                        <h3>プリウスの後ろ窓にステッカー を貼ります</h3>
                        <p>200pt / 1日~</p>
                    </div>
                </div>
                <h6>説明</h6>
                <p>都内を日々走行する車両を利用した、ダイナミッ クで効果的な広告が可能です。</p>
                <p>東京都内の主要道路、ビジネス街、ショッピング エリアを通る車両に貴社の広告を掲載すること で、広告の露出を最大化します。都市の活気に満 ちた日常の風景の中で、貴社のブランドやメッ セージが際立つことを保証します。</p>
                <h3>プロジェクト詳細</h3>
                <ul>
                    <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                        <p className="w-1/2">募集コンテンツ</p>
                        <p className="w-1/2">ステッカー</p>
                    </li>
                    <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                        <p className="w-1/2">スペース種別</p>
                        <p className="w-1/2">車の窓</p>
                    </li>
                    <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                        <p className="w-1/2">募集コンテンツ</p>
                        <p className="w-1/2">ステッカー</p>
                    </li>
                    <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                        <p className="w-1/2">募集コンテンツ</p>
                        <p className="w-1/2">ステッカー</p>
                    </li>
                    <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                        <p className="w-1/2">募集コンテンツ</p>
                        <p className="w-1/2">ステッカー</p>
                    </li>
                    <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                        <p className="w-1/2">募集コンテンツ</p>
                        <p className="w-1/2">ステッカー</p>
                    </li>
                    <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                        <p className="w-1/2">募集コンテンツ</p>
                        <p className="w-1/2">ステッカー</p>
                    </li>
                    <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                        <p className="w-1/2">募集コンテンツ</p>
                        <p className="w-1/2">ステッカー</p>
                    </li>
                    <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                        <p className="w-1/2">募集コンテンツ</p>
                        <p className="w-1/2">ステッカー</p>
                    </li>
                    <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                        <p className="w-1/2">募集コンテンツ</p>
                        <p className="w-1/2">ステッカー</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Info;