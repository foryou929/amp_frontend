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

    const mode = getMode();

    const { user } = useSelector(state => state.user);

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
    }, [username, password]);

    useEffect(() => {
        if (user.id)
            navigate(`/${mode}/profile/view`);
    }, [user]);

    const onClick = async () => {
        try {
            const { token } = await query.post(`/auth/login`, { username, password: md5(password) });
            saveTokens(token);
            const user = await query.auth.get(`/auth/loginWithToken`);
            dispatch(login(user))
        } catch (err) {
            if (err.response?.status == 400)
                setError("ユーザーIDまたはパスワードを正確に入力してください。");
            else
                setError("サーバー側でエラーが発生しました。");
            console.error(err.message);
        }
    }

    return (
        <div className="flex h-screen justify-center items-center">
            <div className="w-[400px] px-8 py-16 border border-gray-200 shadow-xl">
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
                {
                    error ? (
                        <section className="py-2">
                            <p className="text-center text-red-500">{error}</p>
                        </section>
                    ) : (
                        <>
                        </>
                    )
                }
                <section className="py-2">
                    <Button className="w-full" onClick={onClick}>ログイン</Button>
                </section>
                <section className="text-right py-2">
                    <NavLink className="text-[#56A7FF] font-bold" to={"/register"}>
                        会員登録ページへ
                    </NavLink>
                </section>
            </div>
        </div>
    )
}

export default Login;