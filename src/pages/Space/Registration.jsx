import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "../../components/Button";
import ImageUploader from "../../components/ImageUploader";
import Input from "../../components/Input";
import RadioGroup from "../../components/RadioGroup";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";

import { AREAS, SPACE_STATUS, SPACE_TYPES } from "../../utils/constants";
import query from "../../utils/query";
import { success, danger } from "../../common/messageSlice";

const Registration = ({ mode }) => {
    const dispatch = useDispatch();
    const imageUploaderRef = useRef();

    const [space, setSpace] = useState({
        title: "",
        points: 0,
        type: 0,
        period: 1,
        area: 0,
        status: 0,
        description: "",
    });

    const [queryParameters] = useSearchParams();
    const id = queryParameters.get("id");

    useEffect(() => {
        if (id) {
            query.auth.get(`/${mode}/space/${id}`, (space) => {
                setSpace(space);
            });
        }
    }, []);

    const onChange = (target) => {
        const newSpace = { ...space };
        newSpace[target?.name] = target?.value;
        setSpace(newSpace);
    }

    const onClick = async (e) => {
        const { title, points, type, perioid, area, status, description } = space;
        if (title.trim().length == 0) {
            dispatch(danger("タイトルを入力してください。"));
            return;
        }
        if (description.trim().length == 0) {
            dispatch(danger("説明を入力してください。"));
            return;
        }
        try {
            if (space.id) {
                await query.auth.patch(`/${mode}/space/${space.id}`, { title, points, type, perioid, area, status, description });
                dispatch(success("スペースは正常に更新されました。"));
            } else {
                const newSpace = await query.auth.post(`/${mode}/space`, { title, points, type, perioid, area, status, description });
                setSpace(newSpace);
                await imageUploaderRef.current.upload(`/${mode}/image/space/${space.id}`);
                dispatch(success("スペースが正常に作成されました。"));
            }
        } catch (err) {
            dispatch(danger("サーバー側でエラーが発生しました。"));
        }
    }

    return (
        <>
            <h1 className="text-2xl font-bold">スペースを作成</h1>
            <div>
                <section className="my-4">
                    <h6>タイトル</h6>
                    <Textarea name="title" value={space.title} onChange={(e) => onChange(e.target)} />
                </section>
                <section className="my-4">
                    <h6>価格</h6>
                    <div>
                        <Input name="points" value={space.points} onChange={(e) => onChange(e.target)} /> pt
                    </div>
                </section>
                <section className="my-4">
                    <h6>スペース種別</h6>
                    <Select
                        options={SPACE_TYPES}
                        name="type"
                        value={space.type}
                        onChange={(e) => onChange(e.target)}
                    />
                </section>
                <section className="my-4">
                    <h6>募集期間</h6>
                    <Select
                        options={
                            Array.from({ length: 12 }, (_, index) => ({
                                value: index + 1, label: `${index + 1}週間`
                            }))
                        }
                        name="period"
                        value={space.period}
                        onChange={(e) => onChange(e.target)}
                    />
                </section>
                <section className="my-4">
                    <h6>エリア</h6>
                    <Select
                        options={AREAS}
                        name="area"
                        onChange={(e) => onChange(e.target)}
                    />
                </section>
                <section className="my-4">
                    <h6>ステータス</h6>
                    <RadioGroup
                        defaultValue={0}
                        options={SPACE_STATUS}
                        name="status"
                        value={space.status}
                        onChange={(target) => onChange(target)}
                    />
                </section>
                <section className="my-4">
                    <h6>説明文</h6>
                    <Textarea className="min-h-40" name="description" value={space.description} onChange={(e) => onChange(e.target)} />
                </section>
                <section className="my-4">
                    <h6>コンテンツ見本画像</h6>
                    <ImageUploader ref={imageUploaderRef} />
                </section>
                <section className="my-4">
                    <Button className="w-full" onClick={onClick}>スペースを作成</Button>
                </section>
            </div>
        </>
    );
}

export default Registration;