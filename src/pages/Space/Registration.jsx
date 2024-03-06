import { useRef, useState } from "react";
import { NotificationManager } from "react-notifications";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";
import RadioGroup from "../../components/RadioGroup";
import ImageUploader from "../../components/ImageUploader";

import query from "../../utils/query";

const Registration = ({ mode }) => {
    const imageUploaderRef = useRef();

    const [space, setSpace] = useState({
        title: "",
        points: 0,
        type: 0,
        period: 0,
        area: 0,
        status: 0,
        description: "",
    });

    const onChange = (target) => {
        const newSpace = { ...space };
        newSpace[target?.name] = target?.value;
        setSpace(newSpace);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        query.auth.post(`/${mode}/space`, space, async (space) => {
            await imageUploaderRef.current.upload(`/${mode}/image/space/${space.id}`);
            NotificationManager.success('Success');
        });
    }

    return (
        <>
            <h1 className="text-2xl font-bold">スペースを作成</h1>
            <form onSubmit={handleSubmit}>
                <section className="my-4">
                    <h6>タイトル</h6>
                    <Textarea name="title" onChange={(e) => onChange(e.target)} />
                </section>
                <section className="my-4">
                    <h6>価格</h6>
                    <div>
                        <Input name="points" onChange={(e) => onChange(e.target)} /> pt
                    </div>
                </section>
                <section className="my-4">
                    <h6>スペース種別</h6>
                    <Select
                        options={[
                            { value: 0, label: "車の窓" }
                        ]}
                        name="type"
                        onChange={(target) => onChange(target)}
                    />
                </section>
                <section className="my-4">
                    <h6>募集期間</h6>
                    <Select
                        options={[
                            { value: 0, label: "1週間" }
                        ]}
                        name="period"
                        onChange={(target) => onChange(target)}
                    />
                </section>
                <section className="my-4">
                    <h6>エリア</h6>
                    <Select
                        options={[
                            { value: 0, label: "東京都(23区内)" }
                        ]}
                        name="area"
                        onChange={(target) => onChange(target)}
                    />
                </section>
                <section className="my-4">
                    <h6>ステータス</h6>
                    <RadioGroup
                        defaultValue={0}
                        options={[
                            { value: 0, label: "募集中" },
                            { value: 1, label: "募集休止中" },
                            { value: 2, label: "募集開始予定" },
                        ]}
                        name="status"
                        onChange={(target) => onChange(target)}
                    />
                </section>
                <section className="my-4">
                    <h6>説明文</h6>
                    <Textarea className="min-h-40" name="description" onChange={(e) => onChange(e.target)} />
                </section>
                <section className="my-4">
                    <h6>コンテンツ見本画像</h6>
                    <ImageUploader ref={imageUploaderRef} />
                </section>
                <section className="my-4">
                    <Button className="w-full">スペースを作成</Button>
                </section>
            </form>
        </>
    );
}

export default Registration;