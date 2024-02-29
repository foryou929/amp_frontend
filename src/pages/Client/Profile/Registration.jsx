import { useState, useEffect } from "react";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Textarea from "../../../components/Textarea";

import query from "../../../utils/query";

import { login } from "../../../common/userSlice";

const Registration = () => {
    const dispatch = useDispatch();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.id) {
            query.auth.patch(`/api/user/${user.id}`, profile, (user) => {
                dispatch(login(user));
                NotificationManager.success('Success');
            });
        }
    }

    return (
        <>
            <h1 className="text-2xl font-bold">ユーザープロフィール</h1>
            <form onSubmit={handleSubmit}>
                <section className="py-2">
                    <label className="py-0.5">ユーザー名</label>
                    <div>
                        <Input name="username" value={profile.username} onChange={(e) => onChange(e.target)} />
                    </div>
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
                    <Button className="w-full">保存</Button>
                </section>
            </form>
        </>
    )
}

export default Registration;