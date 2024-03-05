import { useRef, useState } from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";
import RadioGroup from "../../components/RadioGroup";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";
import ImageUploader from "../../components/ImageUploader";

import query from "../../utils/query";
import { NotificationManager } from "react-notifications";

const Registration = ({ mode }) => {
    const imageUploaderRef = useRef();

    const [project, setProject] = useState({
        name: "",
        points: 0,
        recruitment_content: 0,
        space_type: 0,
        recruitment_period: 0,
        area: 0,
        year_designation: 0,
        recruitment_number: 0,
        project_period: 0,
        content_size: "",
        description: "",
    });

    const onChange = (target) => {
        const newProject = { ...project };
        newProject[target?.name] = target?.value;
        setProject(newProject);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        query.auth.post(`api/${mode}/project`, project, async (project) => {
            await imageUploaderRef.current.upload(`/api/${mode}/image/project/${project.id}`);
            NotificationManager.success('Success');
        });
    }

    return (
        <>
            <h1 className="text-2xl font-bold">プロジェクトを作成</h1>
            <form onSubmit={handleSubmit}>
                <section className="my-4">
                    <h6>タイトル</h6>
                    <Textarea name="name" onChange={(e) => onChange(e.target)} />
                </section>
                <section className="my-4">
                    <h6>金額</h6>
                    <div>
                        <Input name="points" onChange={(e) => onChange(e.target)} /> pt
                    </div>
                </section>
                <section className="my-4">
                    <h6>募集コンテンツ</h6>
                    <Select options={[
                        { value: 0, label: "ステッカー" }
                    ]} name="recruitment_content" onChange={(target) => onChange(target)} />
                </section>
                <section className="my-4">
                    <h6>スペース種別</h6>
                    <Select options={[
                        { value: 0, label: "車の窓" }
                    ]} name="space_type" onChange={(target) => onChange(target)} />
                </section>
                <section className="my-4">
                    <h6>募集期間</h6>
                    <Select options={[
                        { value: 0, label: "1週間" }
                    ]} name="recruitment_period" onChange={(target) => onChange(target)} />
                </section>
                <section className="my-4">
                    <h6>エリア</h6>
                    <Select options={[
                        { value: 0, label: "東京都(23区内)" }
                    ]} name="area" onChange={(target) => onChange(target)} />
                </section>
                <section className="my-4">
                    <h6>年代指定</h6>
                    <RadioGroup
                        name="year_designation"
                        defaultValue={0}
                        options={[
                            { value: 0, label: "なし" },
                            { value: 1, label: "あり" }
                        ]}
                        onChange={(target) => onChange(target)}
                    />
                </section>
                <section className="my-4">
                    <h6>募集数</h6>
                    <Input name="recruitment_number" onChange={(e) => onChange(e.target)} /> 人
                </section>
                <section className="my-4">
                    <h6>プロジェクト期間</h6>
                    <Select options={[
                        { value: 0, label: "3週間" }
                    ]} name="area" onChange={(target) => onChange(target)} />
                </section>
                <section className="my-4">
                    <h6>コンテンツのサイズ等</h6>
                    <Input name="content_size" onChange={(e) => onChange(e.target)} />
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
                    <Button className="w-full">プロジェクトを作成</Button>
                </section>
            </form>
        </>
    );
}

export default Registration;