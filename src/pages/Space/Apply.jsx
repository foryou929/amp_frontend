import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Button from "../../components/Button";
import Textarea from "../../components/Textarea";
import Backward from "../../components/Backward";
import Image from "../../components/Image";

import query from "../../utils/query";
import { SECTION } from "../../utils/constants";

const Apply = ({ mode }) => {
    const [space, setSpace] = useState({ space_images: [] });
    const [section, setSection] = useState({});
    const [message, setMessage] = useState("");

    const [queryParameters] = useSearchParams();
    const id = queryParameters.get("id");

    useEffect(() => {
        query.auth.get(`/${mode}/space/${id}`, (space) => setSpace(space));
        query.auth.get(`/${mode}/section/space/${id}`, section => setSection(section), () => { });
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
                <h1 className="text-2xl font-bold mt-4 text-[#00146E]">{space.title}</h1>
                <h3 className="text-lg font-bold mt-2">{space.points}pt</h3>
            </div>
            {
                section.id ?
                    <>
                        <p className="mt-8 text-center">応募しました。</p>
                    </> :
                    <>
                        <h3 className="text-lg font-bold mt-4">メッセージ</h3>
                        <Textarea className="mt-2 min-h-40" onChange={(e) => setMessage(e.target.value)} />
                        <Button className="w-full mt-4" onClick={() => {
                            query.auth.post(`/${mode}/section/space/${space.id}`, {}, (section) => {
                                setSection(section);
                                query.auth.post(`/${mode}/section/${section.id}/message`, { content: message, type: SECTION.APPLY });
                            });
                        }}>応募する</Button>
                    </>
            }
        </>
    )
}

export default Apply;