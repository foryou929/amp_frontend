import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import Input from "../../../components/Input";

import query from "../../../utils/query";
import { SECTION, PROGRESS } from "../../../utils/constants";

const Progress = ({ mode, project, section_id }) => {
    // const dispatch = useDispatch();
    // const { user } = useSelector(state => state.user)

    const [section, setSection] = useState({ step: 0 });
    const [content, setContent] = useState("");
    const [point, setPoint] = useState(0);

    const children = [
        <Textarea className="mt-4 min-h-40" name="content" onChange={(e) => setContent(e.target.value)} />,
        <div className="flex items-center mt-4">
            <Input className="flex-grow" defaultValue={point} onChange={(e) => setPoint(e.target.value)} />&nbsp;pt
        </div>,
    ]

    const [steps, setSteps] = useState(
        {
            client: [
                {},
                { btn_label: "選定する", child: 0 },
                { btn_label: "承諾する", child: 0 },
                { btn_label: "仮払いする", child: 1 },
                { btn_label: "広告物発送する" },
                {},
                {},
                {},
                {},
                {},
                { btn_label: "レビューする", child: 0 },
            ],
            user: [
                { btn_label: "応募する", child: 0 },
                {},
                {},
                {},
                {},
                { btn_label: "広告物受け取りする", child: 0 },
                { btn_label: "報告する", child: 0 },
                { btn_label: "報告する", child: 0 },
                { btn_label: "報告する", child: 0 },
                { btn_label: "報酬受取" },
                { btn_label: "レビューする", child: 0 },
            ]
        }
    )

    const [payment, setPayment] = useState({});
    const [advert, setAdvert] = useState({});
    const [startReport, setStartReport] = useState({});
    const [progressReport, setProgressReport] = useState({});
    const [endReport, setEndReport] = useState({});

    useEffect(() => {
        if (mode == "client") {
            query.auth.get(`/api/section/${section_id}`, (section) => {
                setSection({ ...section, step: section.step || 0 });
            });
        } else {
            if (project.id) {
                query.auth.get(`/api/section/project/${project.id}`, (section) => {
                    setSection({ ...section, step: section.step || 0 });
                }, () => { });
            }
        }
    }, [project, section_id]);

    useEffect(() => {
        if (section.id) {
            query.auth.get(`/api/section/${section.id}/payment`, payment => setPayment(payment), () => { });
            query.auth.get(`/api/section/${section.id}/advert`, advert => setAdvert(advert), () => { });
            query.auth.get(`/api/section/${section.id}/message/type/${SECTION.START_REPORT}`, message => setStartReport(message), () => { });
            query.auth.get(`/api/section/${section.id}/message/type/${SECTION.PROGRESS_REPORT}`, message => setProgressReport(message), () => { });
            query.auth.get(`/api/section/${section.id}/message/type/${SECTION.END_REPORT}`, message => setEndReport(message), () => { });
        }
    }, [section]);

    const handleClick = () => {
        try {
            const onSuccess = () => {
                query.auth.patch(`/api/client/section/${section.id}`, { step: section.step + 1 }, (section) => {
                    setSection(section);
                });
            }
            switch (section.step) {
                case 0:
                    query.auth.post(`/api/section/project/${project.id}`, (section) => {
                        setSection(section);
                        query.auth.post(`/api/section/${section.id}/message`, { content, type: SECTION.APPLY });
                    });
                    break;
                default:
                    switch (section.step) {
                        case 1:
                            query.auth.post(`/api/section/${section.id}/message`, { content, type: SECTION.CHOOSE }, onSuccess);
                            break;
                        case 2:
                            query.auth.post(`/api/section/${section.id}`, { content, type: SECTION.AGREE }, onSuccess);
                            break;
                        case 3:
                            query.auth.post(`/api/section/${section.id}/payment`, { point }, (payment) => {
                                setPayment(payment);
                                onSuccess();
                            });
                            break;
                        case 4:
                            query.auth.post(`/api/section/${section.id}/advert`, null, onSuccess);
                            break;
                        case 5:
                            query.auth.patch(`/api/section/${section.id}/advert`, { is_received: true }, onSuccess);
                            break;
                        case 6:
                            query.auth.post(`/api/section/${section.id}/message`, { content, type: SECTION.START_REPORT }, onSuccess);
                            break;
                        case 7:
                            query.auth.post(`/api/section/${section.id}/message`, { content, type: SECTION.PROGRESS_REPORT }, onSuccess);
                            break;
                        case 8:
                            query.auth.post(`/api/section/${section.id}/message`, { content, type: SECTION.END_REPORT }, onSuccess);
                            break;
                        case 9:
                            query.auth.patch(`/api/section/${section.id}/payment`, { is_paid: true }, (payment) => {
                                setPayment(payment);
                                onSuccess();
                            });
                            break;
                    }
                    break;
            }
        } catch (err) {

        }
    }

    return (
        <>
            <h1 className="text-2xl font-bold mt-4">
                プロジェクト進榜状況
            </h1>
            <div className="rounded p-4 bg-[#F0F2F8] mt-2">
                <h2 className="text-xl font-bold text-[#00146E]">{PROGRESS[mode][section.step]}</h2>
                <p className="mt-2">
                    {steps[mode][section.step]?.content}
                </p>
                {
                    steps[mode][section.step]?.btn_label &&
                    <>
                        {children[steps[mode][section.step]?.child]}
                        <Button onClick={handleClick}>{steps[mode][section.step]?.btn_label}</Button>
                    </>
                }
            </div >
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
                                    {PROGRESS[mode][index]}
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