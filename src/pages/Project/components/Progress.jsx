import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import query from "../../../utils/query";

const Progress = ({ id }) => {
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

    useEffect(() => {
        query.auth.get(`/api/message/${id}`, res => {
            
        });
    }, [])

    return (
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
}

export default Progress;