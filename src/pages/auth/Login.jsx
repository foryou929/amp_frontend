import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import md5 from "md5";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Password from "../../components/Password";

import query from "../../utils/query";

import { saveTokens } from "../../app/auth";
import { login } from '../../common/userSlice';
import { getMode } from '../../utils/storage';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { user } = useSelector(state => state.user);

    const mode = getMode();

    useEffect(() => {
        if (user.id)
            navigate(`${mode}/profile/view`);
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        query.post(`/auth/login`, { username, password: md5(password) }, (res) => {
            saveTokens(res.token);
            query.auth.get(`/auth/loginWithToken`, (user) => {
                dispatch(login(user))
            });
        });
    }

    return (
        <div className="flex h-screen justify-center items-center">
            <form className="max-w-[480px] px-8 py-16 border border-gray-200 shadow-xl" onSubmit={handleSubmit}>
                <section className="py-2">
                    <label>ユーザーID:</label>
                    <div>
                        <Input className="w-full" onChange={(e) => setUserName(e.target.value)} />
                    </div>
                </section>
                <section className="py-2">
                    <label>パスワード:</label>
                    <Password className="w-full" onChange={(e) => setPassword(e.target.value)} />
                </section>
                <section className="py-2 flex gap-2">
                    <Button className="flex-grow">ログイン</Button>
                </section>
                <section className="text-right py-2">
                    <NavLink className="text-[#56A7FF] font-bold" to={"/register"}>
                        ユーザー登録ページで
                    </NavLink>
                </section>
            </form>
        </div>
    )
}

export default Login;