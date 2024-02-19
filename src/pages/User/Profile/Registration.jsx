import { useState } from "react";
import Input from "../../../components/Input";
import DatePicker from "../../../components/DatePicker";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
import Textarea from "../../../components/Textarea";
import CheckGroup from "../../../components/CheckGroup";
import query from "../../../utils/query";
import { NotificationManager } from "react-notifications";

const Registration = () => {
    const [profile, setProfile] = useState(
        {
            username: '',
            type: 0,
            area: 0,
            available_space: 0,
            birthday: new Date(2001, 1, 1),
            gendor: 0,
            occupation: 0,
            residence_type: 0,
            primary_transportation: 0,
            activity_scope: '',
            follower_count: '',
            usage_frequency: 0,
            self_introduction: ''
        }
    );

    const onChange = (target) => {
        const newProfile = { ...profile };
        newProfile[target?.name] = target?.value;
        setProfile(newProfile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        query.auth.post('/api/user/profile', profile, res => {
            NotificationManager.success('Success');
        });
    }

    return (
        <>
            <h1 className="text-2xl font-bold">ユーザープロフィール</h1>
            <form onSubmit={handleSubmit}>
                <section className="py-2">
                    <label className="py-0.5">ユーザー名</label>
                    <Input name="username" onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">種別</label>
                    <Select name="type" onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">エリア</label>
                    <Select name="area" onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <CheckGroup label={"新有するスペース"} itemClassName={"py-1"}
                        onChange={(target) => onChange(target)
                        }
                        items={[
                            { label: "車の窓" },
                            { label: "車の車体" },
                            { label: "自転車" },
                            { label: "バイク" },
                            { label: "徒歩バックパック等" },
                            { label: "一軒家" },
                            { label: "集合住宅" },
                            { label: "ノベルティーグッズの使用" },
                            { label: "工事現場" },
                            { label: "看板" },
                            { label: "WEB SNS" },
                            { label: "他" },
                        ]} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">生年月日</label>
                    <DatePicker name="birthday" defaultDate={profile.birthday} onChange={(target) => onChange(target)} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">性別</label>
                    <Select name="gendor" options={[{ value: 0, label: '男性' }, { value: 1, label: '女性' }]} onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">職業</label>
                    <Select name="occupation" onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">居住形態等</label>
                    <Select name="residence_type" onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <CheckGroup label={"主な移動手段"} itemClassName={"py-1"}
                        onChange={(target) => onChange(target)}
                        items={[
                            { label: "徒歩" },
                            { label: "車" },
                            { label: "バイク" },
                            { label: "その他" },
                        ]} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">活動範囲と頻度</label>
                    <Textarea name="activity_scope" onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">フォロワー数の目安</label>
                    <Input name="follower_count" onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">使用頻度</label>
                    <Select name="usage_frequency" onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">自己紹介文</label>
                    <Textarea name="self_introduction" onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <Button label={"保存"} className="w-full" />
                </section>
            </form>
        </>
    )
}

export default Registration;