import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Ranking from "../../components/Ranking";
import Backward from "../../components/Backward";
import Forward from "../../components/Forward";

import { clear, danger } from "../../common/messageSlice";
import { PROJECT_STEPS, SECTION } from "../../utils/constants";
import query from "../../utils/query";

const Progress = ({ mode }) => {
    const dispatch = useDispatch();
    const [project, setProject] = useState({});
    const [section, setSection] = useState({ step: 0 });

    const [queryParameters] = useSearchParams();
    const id = queryParameters.get("id");

    useEffect(() => {
        if (id) {
            query.auth.get(`/${mode}/section/${id}`, (section) => {
                query.auth.get(`/${mode}/project/${section.project.id}`, (project) => {
                    setSection(section)
                    setProject(project)
                });
            });
        }
    }, [id]);

    const [content, setContent] = useState("");
    const [point, setPoint] = useState(0);
    const [rank, setRank] = useState(0);
    const [payment, setPayment] = useState({});
    const [advert, setAdvert] = useState({});
    const [startReport, setStartReport] = useState({});
    const [progressReport, setProgressReport] = useState({});
    const [endReport, setEndReport] = useState({});
    const [clientReview, setClientReview] = useState({});
    const [userReview, setUserReview] = useState({});

    useEffect(() => {
        if (section.id) {
            try {
                query.auth.get(`/${mode}/section/${section.id}/message`, messages => {
                    messages.forEach(message => {
                        if (message.type == 7) setStartReport(message);
                        if (message.type == 8) setProgressReport(message);
                        if (message.type == 9) setEndReport(message);
                    });
                });
                if (section.step == 5) {
                    query.auth.get(`/${mode}/section/${section.id}/payment`, payment => setPayment(payment));
                }
                if (section.step == 6) {
                    query.auth.get(`/${mode}/section/${section.id}/advert`, advert => setAdvert(advert));
                }
                if (section.step == 10) {
                    query.auth.get(`/${mode}/section/${section.id}/review`, reviews => {
                        reviews.map(review => {
                            if (review.reviewer == project.creator.id)
                                setUserReview(review);
                            if (review.reviewer == section.user.id)
                                setClientReview(review);
                        })
                    })
                }
            } catch (err) {
                console.error(err.message);
            }
        }
    }, [section]);

    const handleClick = async () => {
        if (PROJECT_STEPS[mode][section.step].child == 1) {
            if (content.trim().length == 0) {
                dispatch(danger("メッセージを入力してください。"));
                return;
            }
        }
        if (PROJECT_STEPS[mode][section.step].child == 2) {
            if (point == 0) {
                dispatch(danger("ポイントは0より大きい値を入力してください。"));
                return;
            }
        }
        try {
            switch (section.step) {
                case 1:
                    await query.auth.post(`/${mode}/section/${section.id}/message`, { content, type: SECTION.CHOOSE });
                    break;
                case 2:
                    await query.auth.post(`/${mode}/section/${section.id}/message`, { content, type: SECTION.CHOOSE });
                    break;
                case 3:
                    const newPayment = await query.auth.post(`/${mode}/section/${section.id}/payment`, { point });
                    setPayment(newPayment);
                    break;
                case 4:
                    await query.auth.post(`/${mode}/section/${section.id}/advert`);
                    break;
                case 5:
                    await query.auth.patch(`/${mode}/section/${section.id}/advert`, { is_received: true });
                    break;
                case 6:
                    await query.auth.post(`/${mode}/section/${section.id}/message`, { content, type: SECTION.START_REPORT });
                    break;
                case 7:
                    await query.auth.post(`/${mode}/section/${section.id}/message`, { content, type: SECTION.PROGRESS_REPORT });
                    break;
                case 8:
                    await query.auth.post(`/${mode}/section/${section.id}/message`, { content, type: SECTION.END_REPORT });
                    break;
                case 9:
                    const updatedPayment = await query.auth.patch(`/${mode}/section/${section.id}/payment`, { is_paid: true });
                    setPayment(updatedPayment);
                    break;
                case 10:
                    await query.auth.post(`/${mode}/section/${section.id}/review`, { content, rank });
                    break;
            }
            if (section.step != 10) {
                await query.auth.patch(`/${mode}/section/${section.id}`, { step: section.step + 1 });
                setSection({ ...section, step: section.step + 1 });
            }
            setContent("");
            dispatch(clear());
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <>
            <div className="py-2 flex justify-between">
                <Backward>戻る</Backward>
                <Forward to={`/${mode}/section/message?id=${id}`}>メッセージページへ</Forward>
            </div>
            <h1 className="text-2xl font-bold mt-4">
                プロジェクト進榜状況
            </h1>
            <div className="rounded p-4 bg-[#F0F2F8] mt-2">
                <h2 className="text-xl font-bold text-[#00146E]">{PROJECT_STEPS[mode][section.step]?.label}</h2>
                <p className="mt-2">
                    {
                        section.step == 11 ?
                            "プロジェクトが完了しました。" :
                            PROJECT_STEPS[mode][section.step]?.content
                    }
                </p>
                {
                    PROJECT_STEPS[mode][section.step]?.button &&
                    <>
                        {
                            PROJECT_STEPS[mode][section.step]?.child == 1 &&
                            <>
                                <Textarea className="min-h-40 mt-4" name="content" value={content} onChange={(e) => setContent(e.target.value)} />
                                <Button className="mt-4" onClick={handleClick}>{PROJECT_STEPS[mode][section.step]?.button}</Button>
                            </>
                        }
                        {
                            PROJECT_STEPS[mode][section.step]?.child == 2 &&
                            <>
                                <div className="flex items-center mt-4"><Input className="flex-grow" onChange={(e) => setPoint(e.target.value)} />&nbsp;pt</div>
                                <Button className="mt-4" onClick={handleClick}>{PROJECT_STEPS[mode][section.step]?.button}</Button>
                            </>
                        }
                        {
                            PROJECT_STEPS[mode][section.step]?.child == 3 && (
                                (mode == "client" && !clientReview.id) || (mode == "user" && !userReview.id) &&
                                <>
                                    <Ranking rank={rank} className="mt-4" onChange={(rank) => setRank(rank)} />
                                    <Textarea className="min-h-40 mt-2" name="content" onChange={(e) => setContent(e.target.value)} />
                                    <Button className="mt-4" onClick={handleClick}>{PROJECT_STEPS[mode][section.step]?.button}</Button>
                                </>
                            )
                        }
                    </>
                }
            </div >
            <ul>
                {
                    PROJECT_STEPS[mode].map((step, index) => (
                        <li key={index} className="border-b border-[#DEE2E6] py-4">
                            <div className="flex items-center">
                                <div className="w-12 px-2">
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
                                {index == 3 && payment.id ? `${moment(payment.created_at).format("YYYY年MM月DD日")}: ${project.creator?.username}さんが仮払いをおこないました` : ""}
                                {index == 4 && advert.id ? `${moment(advert.created_at).format("YYYY年MM月DD日")}: ${project.creator?.username}さんが広告物を発送しました` : ""}
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