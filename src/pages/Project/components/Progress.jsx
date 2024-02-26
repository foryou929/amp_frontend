import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";

import query from "../../../utils/query";
import { SECTION } from "../../../utils/constants";

const Progress = ({ mode, id, section_id }) => {
    const dispatch = useDispatch();
    // const { user } = useSelector(state => state.user)

    const [section, setSection] = useState({ step: 0 });
    const [content, setContent] = useState("");

    const [steps, setSteps] = useState(
        {
            client: [
                { label: "提案" },
                { label: "選定", btn_label: "選定する" },
                { label: "承諾", btn_label: "承諾する" },
                { label: "仮払い" },
                { label: "広告物発送" },
                { label: "広告物受け取り" },
                { label: "開始報告" },
                { label: "経過報告" },
                { label: "終了報告" },
                { label: "報酬受取" },
                { label: "レビュー" },
            ],
            user: [
                { label: "提案", btn_label: "応募する" },
                { label: "選定" },
                { label: "承諾" },
                { label: "仮払い" },
                { label: "広告物発送" },
                { label: "広告物受け取り" },
                { label: "開始報告", btn_label: "報告する" },
                { label: "経過報告", btn_label: "報告する" },
                { label: "終了報告", btn_label: "報告する" },
                { label: "報酬受取" },
                { label: "レビュー" },
            ]
        }
    )

    const handleClick = () => {
        switch (section.step) {
            case 0:
                query.auth.post(`/api/user/section/${id}`, {}, (section) => {
                    setSection(section);
                    query.auth.post(`/api/message/${section.id}`, { content, type: SECTION.APPLY });
                });
                break;
            case 1:
                query.auth.post(`/api/message/${section.id}`, { content, type: SECTION.CHOOSE }, () => {
                    query.auth.put(`/api/client/section/${section.id}`, { ...section, step: section.step + 1 }, (section) => {
                        setSection(section);
                    });
                });
            case 2:
                query.auth.post(`/api/message/${section.id}`, { content, type: SECTION.AGREE }, () => {
                    query.auth.put(`/api/client/section/${section.id}`, { ...section, step: section.step + 1 }, (section) => {
                        setSection(section);
                    });
                });
                break;
        }
    }

    useEffect(() => {
        if (mode == "client") {
            query.auth.get(`/api/section/${section_id}`, (res) => {
                setSection(res);
            });
        } else {
            query.auth.get(`/api/user/section/${id}`, (res) => {
                setSection(res);
            }, () => { });
        }
    }, [])

    const handleChange = (e) => {
        setContent(e.target.value);
    }

    return (
        <>
            <h1 className="text-2xl font-bold mt-4">
                プロジェクト進榜状況
            </h1>
            <div className="rounded p-4 bg-[#F0F2F8] mt-2">
                <h2 className="text-xl font-bold text-[#00146E]">{steps[mode][section.step]?.label}</h2>
                <p className="mt-2">
                    {steps[mode][section.step]?.content}
                </p>
                {
                    steps[mode][section.step]?.btn_label &&
                    <>
                        <Textarea className="mt-4 min-h-40" name="content" onChange={handleChange} />
                        <Button label={steps[mode][section.step]?.btn_label} className="mt-4" onClick={handleClick} />
                    </>
                }
            </div>
            <ul>
                {
                    steps[mode].map((step, index) => (
                        <li key={index} className="border-b border-[#DEE2E6] py-4">
                            <div className="flex items-center">
                                <div className="w-[48px] px-2">
                                    {
                                        index < section.step ? (
                                            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                                <circle cx="16" cy="16" r="15" stroke="#21AD8B" strokeWidth="1" fill="none" />
                                                <path d="M10 16 L 14 20 22 12" stroke="#21AD8B" strokeWidth="1" fill="none" />
                                            </svg>
                                        ) : index == section.step ? (
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