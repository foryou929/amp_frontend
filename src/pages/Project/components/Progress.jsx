import { useEffect, useState } from "react";
import moment from "moment";

import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import Input from "../../../components/Input";

import query from "../../../utils/query";
import { SECTION, STEPS } from "../../../utils/constants";

const Progress = ({ mode, project, id }) => {
    const [section, setSection] = useState({ step: 0 });

    useEffect(() => {
        if (id) {
            query.auth.get(`/api/${mode}/section/${id}`, (section) => {
                setSection(section);
            });
        }
    }, [id]);

    const [value, setValue] = useState();
    const [payment, setPayment] = useState({});
    const [advert, setAdvert] = useState({});
    const [startReport, setStartReport] = useState({});
    const [progressReport, setProgressReport] = useState({});
    const [endReport, setEndReport] = useState({});

    useEffect(() => {
        if (section.id) {
            query.auth.get(`/api/${mode}/section/${section.id}/payment`, payment => setPayment(payment), () => { });
            query.auth.get(`/api/${mode}/section/${section.id}/advert`, advert => setAdvert(advert), () => { });
            query.auth.get(`/api/${mode}/section/${section.id}/message`, messages => {
                messages.forEach(message => {
                    if (message.type == 7) setStartReport(message);
                    if (message.type == 8) setProgressReport(message);
                    if (message.type == 9) setEndReport(message);
                });
            }, () => { });
        }
    }, [section]);

    const handleClick = () => {
        try {
            const onSuccess = () => {
                query.auth.patch(`/api/${mode}/section/${section.id}`, { step: section.step + 1 }, (section) => {
                    setSection(section);
                });
            }
            switch (section.step) {
                case 0:
                    query.auth.post(`/api/${mode}/section/project/${project.id}`, (section) => {
                        setSection(section);
                        query.auth.post(`/api/${mode}/section/${section.id}/message`, { content: value, type: SECTION.APPLY });
                    });
                    break;
                default:
                    switch (section.step) {
                        case 1:
                            query.auth.post(`/api/${mode}/section/${section.id}/message`, { content: value, type: SECTION.CHOOSE }, onSuccess);
                            break;
                        case 2:
                            query.auth.post(`/api/${mode}/section/${section.id}/message`, { content: value, type: SECTION.AGREE }, onSuccess);
                            break;
                        case 3:
                            query.auth.post(`/api/${mode}/section/${section.id}/payment`, { point: value }, (payment) => {
                                setPayment(payment);
                                onSuccess();
                            });
                            break;
                        case 4:
                            query.auth.post(`/api/${mode}/section/${section.id}/advert`, null, onSuccess);
                            break;
                        case 5:
                            query.auth.patch(`/api/${mode}/section/${section.id}/advert`, { is_received: true }, onSuccess);
                            break;
                        case 6:
                            query.auth.post(`/api/${mode}/section/${section.id}/message`, { content: value, type: SECTION.START_REPORT }, onSuccess);
                            break;
                        case 7:
                            query.auth.post(`/api/${mode}/section/${section.id}/message`, { content: value, type: SECTION.PROGRESS_REPORT }, onSuccess);
                            break;
                        case 8:
                            query.auth.post(`/api/${mode}/section/${section.id}/message`, { content: value, type: SECTION.END_REPORT }, onSuccess);
                            break;
                        case 9:
                            query.auth.patch(`/api/${mode}/section/${section.id}/payment`, { is_paid: true }, (payment) => {
                                setPayment(payment);
                                onSuccess();
                            });
                            break;
                    }
                    break;
            }
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <>
            <h1 className="text-2xl font-bold mt-4">
                プロジェクト進榜状況
            </h1>
            <div className="rounded p-4 bg-[#F0F2F8] mt-2">
                <h2 className="text-xl font-bold text-[#00146E]">{STEPS[mode][section.step]?.label}</h2>
                <p className="mt-2">
                    {STEPS[mode][section.step]?.content}
                </p>
                {
                    STEPS[mode][section.step]?.button &&
                    <>
                        {STEPS[mode][section.step]?.child == 1 && <Textarea className="min-h-40 mt-4" name="content" onChange={(e) => setValue(e.target.value)} />}
                        {STEPS[mode][section.step]?.child == 1 && <div className="flex items-center mt-4"><Input className="flex-grow" onChange={(e) => setValue(e.target.value)} />&nbsp;pt</div>}
                        <Button className="mt-4" onClick={handleClick}>{STEPS[mode][section.step]?.button}</Button>
                    </>
                }
            </div >
            <ul>
                {
                    STEPS[mode].map((step, index) => (
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
                                {index == 3 && payment.id ? `${moment(payment.created_at).format("YYYY年MM月DD日")}: ${project.creator.username}さんが仮払いをおこないました` : ""}
                                {index == 4 && advert.id ? `${moment(advert.created_at).format("YYYY年MM月DD日")}: ${project.creator.username}さんが広告物を発送しました` : ""}
                                {index == 5 && advert.id && advert.is_received ? `${moment(advert.updated_at).format("YYYY年MM月DD日")}: ${section.user.username}さんが広告物を受け取りました` : ""}
                                {index == 6 && startReport.id ? `${moment(startReport.updated_at).format("YYYY年MM月DD日")}: ${section.user.username}さんが開始報告をおこないました` : ""}
                                {index == 7 && progressReport.id ? `${moment(progressReport.updated_at).format("YYYY年MM月DD日")}: ${section.user.username}さんが経過報告をおこないました` : ""}
                                {index == 8 && endReport.id ? `${moment(endReport.updated_at).format("YYYY年MM月DD日")}: ${section.user.username}さんが終了報告をおこないました` : ""}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Progress;