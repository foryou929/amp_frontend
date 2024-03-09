import { useState, useEffect, useRef } from "react";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Textarea from "../../../components/Textarea";
import AvatarUploader from "../../../components/AvatarUploader";

import query from "../../../utils/query";

import { login } from "../../../common/userSlice";

const Registration = ({ mode }) => {
    const dispatch = useDispatch();
    const avatarUploaderRef = useRef();

    const { user } = useSelector(state => state.user);

    const [profile, setProfile] = useState({});

    useEffect(() => {
        const { username, type, area, main_service, main_pr_target, main_message, website_url } = user;
        setProfile({ username, type, area, main_service, main_pr_target, main_message, website_url })
    }, [user])

    const onChange = (target) => {
        const newProfile = { ...profile };
        newProfile[target?.name] = target?.value;
        setProfile(newProfile);
    }

    const onSave = async (e) => {
        e.preventDefault();
        await avatarUploaderRef.current.upload(`/${mode}/${user.id}/avatar`);
        const newUser = await query.auth.patch(`/${mode}/${user.id}`, profile);
        dispatch(login(newUser));
        NotificationManager.success('Success');
    }

    return (
        <>
            <h1 className="text-2xl font-bold">ユーザープロフィール</h1>
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
                <label className="py-0.5">主なサービスなど</label>
                <Textarea className="min-h-40 mt-2" name="main_service" value={profile.main_service} onChange={(e) => onChange(e.target)} />
            </section>
            <section className="py-2">
                <label className="py-0.5">主なPR対象</label>
                <Textarea className="min-h-40 mt-2" name="main_pr_target" value={profile.main_pr_target} onChange={(e) => onChange(e.target)} />
            </section>
            <section className="py-2">
                <label className="py-0.5">メッセージ</label>
                <Textarea className="min-h-40 mt-2" name="main_message" value={profile.main_message} onChange={(e) => onChange(e.target)} />
            </section>
            <section className="py-2">
                <label className="py-0.5">ホームページURL</label>
                <Input className="w-full mt-2" name="website_url" value={profile.website_url} onChange={(e) => onChange(e.target)} />
            </section>
            <section className="py-2">
                <Button className="w-full" onClick={onSave}>保存</Button>
            </section>
        </>
    )
}

export default Registration;