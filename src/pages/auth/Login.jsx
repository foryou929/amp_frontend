import { useState } from "react";
import md5 from "md5";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Password from "../../components/Password";

import query from "../../utils/query";
import { saveTokens } from "../../app/auth";

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        query.post('/api/auth/login', { username, password: md5(password) }, (res) => {
            saveTokens(res.token);
        })
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
                    <Button label={"Login"} className="flex-grow" />
                </section>
            </form>
        </>
    )
}

export default Login;