import { useState, useEffect, useRef } from "react";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../components/Button";
import CheckGroup from "../../../components/CheckGroup";
import DatePicker from "../../../components/DatePicker";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Textarea from "../../../components/Textarea";
import AvatarUploader from "../../../components/AvatarUploader";

import query from "../../../utils/query";
import { SPACE_TYPES, TRANSPORTATIONS } from "../../../utils/constants";

import { login } from "../../../common/userSlice";

const Registration = ({ mode }) => {
    const dispatch = useDispatch();
    const avatarUploaderRef = useRef();

    const { user } = useSelector(state => state.user);

    const [profile, setProfile] = useState({});

    useEffect(() => {
        const { username, type, area, available_space, birthday, gendor, occupation, residence_type, primary_transportation, activity_scope, follower_count, usage_frequency, self_introduction } = user;
        setProfile({ username, type, area, available_space, birthday, gendor, occupation, residence_type, primary_transportation, activity_scope, follower_count, usage_frequency, self_introduction })
    }, [user])

    const onChange = (target) => {
        const newProfile = { ...profile };
        newProfile[target?.name] = target?.value;
        setProfile(newProfile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        avatarUploaderRef.current.upload(`api/${mode}/${user.id}`);
        query.auth.patch(`api/${mode}/${user.id}`, profile, (user) => {
            dispatch(login(user));
            NotificationManager.success('Success');
        });
    }

    return (
        <>
            <h1 className="text-2xl font-bold">ユーザープロフィール</h1>
            <form onSubmit={handleSubmit}>
                <AvatarUploader className="py-4" defaultSrc={user.avatar} ref={avatarUploaderRef} />
                <section className="py-2">
                    <label className="py-0.5">ユーザー名</label>
                    <Input className="w-full" name="username" value={profile.username} onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">種別</label>
                    <Select name="type" value={profile.type} onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">エリア</label>
                    <Select name="area" value={profile.area} onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <CheckGroup label={"新有するスペース"} itemClassName={"py-1"}
                        name="available_space" value={profile.available_space}
                        onChange={(target) => onChange(target)}
                        items={SPACE_TYPES} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">生年月日</label>
                    <DatePicker name="birthday" value={profile.birthday} onChange={(target) => onChange(target)} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">性別</label>
                    <Select name="gendor" value={profile.gendor} options={[{ value: 0, label: '男性' }, { value: 1, label: '女性' }]} onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">職業</label>
                    <Select name="occupation" value={profile.occupation} onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">居住形態等</label>
                    <Select name="residence_type" value={profile.residence_type} onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <CheckGroup label={"主な移動手段"} itemClassName={"py-1"}
                        name="primary_transportation" value={profile.primary_transportation}
                        onChange={(target) => onChange(target)}
                        items={TRANSPORTATIONS} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">活動範囲と頻度</label>
                    <Textarea name="activity_scope" value={profile.activity_scope} onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">フォロワー数の目安</label>
                    <div>
                        <Input name="follower_count" value={profile.follower_count} onChange={(e) => onChange(e.target)} />
                    </div>
                </section>
                <section className="py-2">
                    <label className="py-0.5">使用頻度</label>
                    <Select name="usage_frequency" value={profile.usage_frequency} onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">自己紹介文</label>
                    <Textarea className="min-h-40" name="self_introduction" value={profile.self_introduction} onChange={(e) => onChange(e.target)} />
                </section>
                <section className="py-2">
                    <Button className="w-full">保存</Button>
                </section>
            </form>
        </>
    )
}

export default Registration;