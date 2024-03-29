import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AvatarUploader from "../../../components/AvatarUploader";
import Button from "../../../components/Button";
import CheckGroup from "../../../components/CheckGroup";
import DatePicker from "../../../components/DatePicker";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Textarea from "../../../components/Textarea";

import { login } from "../../../common/userSlice";
import { success, danger } from "../../../common/messageSlice";
import { USER_TYPES, AREAS, SPACE_TYPES, TRANSPORTATIONS } from "../../../utils/constants";
import query from "../../../utils/query";

const Registration = ({ mode }) => {
    const dispatch = useDispatch();
    const avatarUploaderRef = useRef();

    const { user } = useSelector(state => state.user);

    const [profile, setProfile] = useState({});

    useEffect(() => {
        const { first_name, last_name, type, area, available_space, birthday, gendor, occupation, residence_type, primary_transportation, activity_scope, follower_count, usage_frequency, self_introduction } = user;
        setProfile({ first_name, last_name, type, area, available_space, birthday, gendor, occupation, residence_type, primary_transportation, activity_scope, follower_count, usage_frequency, self_introduction })
    }, [user])

    const onChange = (target) => {
        const newProfile = { ...profile };
        newProfile[target?.name] = target?.value;
        setProfile(newProfile);
    }

    const onSave = async () => {
        const { first_name, last_name } = profile;
        if (first_name.trim().length == 0 || last_name.trim().length == 0) {
            dispatch(danger("ユーザー名を入力してください。"));
            return;
        }
        try {
            await avatarUploaderRef.current.upload(`/${mode}/${user.id}/avatar`);
            const updatedUser = await query.auth.patch(`/${mode}/${user.id}`, profile);
            dispatch(login(updatedUser));
            dispatch(success("プロフィールを登録しました。"));
        } catch (err) {
            dispatch(danger("サーバー側でエラーが発生しました。"));
            console.error(err.message);
        }
    }

    return (
        <>
            <h1 className="text-2xl font-bold">ユーザープロフィール</h1>
            <AvatarUploader className="py-4" defaultSrc={user.avatar} ref={avatarUploaderRef} />
            <section className="py-2">
                <label className="py-0.5">ユーザー名</label>
                <div className="flex gap-4">
                    <Input name="last_name" value={profile.last_name} onChange={(e) => onChange(e.target)} />
                    <Input name="first_name" value={profile.first_name} onChange={(e) => onChange(e.target)} />
                </div>
            </section>
            <section className="py-2">
                <label className="py-0.5">種別</label>
                <Select name="type" options={USER_TYPES} value={profile.type} onChange={(e) => onChange(e.target)} />
            </section>
            <section className="py-2">
                <label className="py-0.5">エリア</label>
                <Select name="area" options={AREAS} value={profile.area} onChange={(e) => onChange(e.target)} />
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
                <Button className="w-full" onClick={onSave}>保存</Button>
            </section>
        </>
    )
}

export default Registration;