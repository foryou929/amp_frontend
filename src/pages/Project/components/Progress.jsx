import { useEffect, useState } from "react";

import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";

import query from "../../../utils/query";

const Progress = ({ mode, id }) => {
    const [steps, setSteps] = useState(
        [
            { label: "提案", title: "提案", button: "提案する" },
            { label: "選定", title: "" },
            { label: "承諾", title: "" },
            { label: "仮払い", title: "" },
            { label: "広告物発送", title: "" },
            { label: "広告物受け取り", title: "" },
            { label: "開始報告", title: "" },
            { label: "経過報告", title: "" },
            { label: "終了報告", title: "" },
            { label: "報酬受取", title: "" },
            { label: "レビュー", title: "" },
        ]
    )

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const get = async () => {
            const messages = await query.auth.get(`/api/${mode}/message/${id}`, () => {

            }, () => { });
        }
        get();
    }, [])

    const handleClick = () => {
        if (progress == 0) {
            query.auth.post(`/api/${mode}/message/${id}/apply`);
        }
    }

    return (
        <>
            <h1 className="text-2xl font-bold mt-4">
                プロジェクト進榜状況
            </h1>
            <div className="rounded p-4 bg-[#F0F2F8] mt-2">
                <h2 className="text-xl font-bold text-[#00146E]">{steps[progress].title}</h2>
                <p className="mt-2">
                    あなたが開始報告をおこないました。業務 を開始して、〇月〇日になったら経過報告 をおこなってください。
                </p>
                <Textarea className="mt-4 min-h-40" />
                <Button label={steps[progress].button} className="mt-4" onClick={handleClick}/>
            </div>
            <ul>
                {
                    steps.map((step, index) => (
                        <li key={index} className="border-b border-[#DEE2E6] py-4">
                            <div className="flex items-center">
                                <div className="w-[48px] px-2">
                                    {
                                        index < progress ? (
                                            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" filRule="evenodd" clipRule="evenodd">
                                                <circle cx="16" cy="16" r="15" stroke="#21AD8B" strokeWidth="1" fill="none" />
                                                <path d="M10 16 L 14 20 22 12" stroke="#21AD8B" strokeWidth="1" fill="none" />
                                            </svg>
                                        ) : index == progress ? (
                                            <div className="relative">
                                                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                                    <circle cx="16" cy="16" r="15" stroke="none" fill="#00146E" />
                                                </svg>
                                                <div className="absolute left-0 top-0 w-full h-full text-white flex justify-center items-center">
                                                    <span>{index + 1}</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="relative">
                                                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                                    <circle cx="16" cy="16" r="15" stroke="#DEE2E6" strokeWidth="1" fill="none" />
                                                </svg>
                                                <div className="absolute left-0 top-0 w-full h-full text-gray-400 flex justify-center items-center">
                                                    <span>{index + 1}</span>
                                                </div>
                                            </div>
                                        )
                                    }
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