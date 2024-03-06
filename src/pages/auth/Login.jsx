import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import md5 from "md5";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Password from "../../components/Password";

import query from "../../utils/query";

import { saveTokens } from "../../app/auth";
import { login } from '../../common/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { user } = useSelector(state => state.user);

    useEffect(() => {
        if (user.id)
            navigate("/");
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
        <>
            <form onSubmit={handleSubmit}>
                <section className="py-2">
                    <label>Username:</label>
                    <div>
                        <Input className="w-full" onChange={(e) => setUserName(e.target.value)} />
                    </div>
                </section>
                <section className="py-2">
                    <label>Password:</label>
                    <Password className="w-full" onChange={(e) => setPassword(e.target.value)} />
                </section>
                <section className="py-2 flex gap-2">
                    <Button className="flex-grow">Login</Button>
                </section>
            </form>
        </>
    )
}

export default Login;