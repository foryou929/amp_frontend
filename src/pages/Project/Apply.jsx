import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import Backward from "../../components/Backward";
import Button from "../../components/Button";
import Image from "../../components/Image";
import Textarea from "../../components/Textarea";

import { danger, success } from "../../common/messageSlice";
import { SECTION } from "../../utils/constants";
import query from "../../utils/query";

const Apply = ({ mode }) => {
    const dispatch = useDispatch();

    const [project, setProject] = useState({});
    const [section, setSection] = useState({});
    const [message, setMessage] = useState("");

    const [queryParameters] = useSearchParams();
    const id = queryParameters.get("id");

    useEffect(() => {
        query.auth.get(`/${mode}/project/${id}`, project => setProject(project));
        query.auth.get(`/${mode}/section/project/${id}`, section => setSection(section), () => { });
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
            {
                section.id ?
                    <>
                        <p className="mt-8 text-center">応募しました。</p>
                    </> :
                    <>
                        <h3 className="text-lg font-bold mt-4">メッセージ</h3>
                        <Textarea className="mt-2 min-h-40" onChange={(e) => setMessage(e.target.value)} />
                        <Button className="w-full mt-4" onClick={async () => {
                            if (String(message).trim().length == 0) {
                                dispatch(danger("メッセージを入力してください。"));
                                return;
                            }
                            const section = await query.auth.post(`/${mode}/section/project/${project.id}`);
                            setSection(section);
                            await query.auth.post(`/${mode}/section/${section.id}/message`, { content: message, type: SECTION.APPLY });
                            dispatch(success("応募しました。"));

                        }}>応募する</Button>
                    </>
            }
        </>
    )
}

export default Apply;