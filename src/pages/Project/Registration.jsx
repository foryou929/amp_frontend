import { useState } from "react";

import Button from "../../components/Button";
import Image from "../../components/Image";
import Input from "../../components/Input";
import RadioGroup from "../../components/RadioGroup";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";

import query from "../../utils/query";
import { NotificationManager } from "react-notifications";

const Registration = () => {
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
        console.log(newProject)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        query.auth.post('/api/project', project, res => {
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
                    <Textarea name="description" onChange={(e) => onChange(e.target)} />
                </section>
                <section className="my-4">
                    <h6>コンテンツ見本画像</h6>
                    <div className="flex gap-2 overflow-x-scroll">
                        {
                            Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className="flex-none justify-center bg-[#F8F9FA]">
                                    <div className="w-28 flex flex-wrap justify-center p-4">
                                        <Image src="/1" />
                                        <p>画像を追加</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section className="my-4">
                    <Button label="プロジェクトを作成" className="w-full" />
                </section>
            </form>
        </>
    );
}

export default Registration;