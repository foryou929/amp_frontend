import { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import query from "../../utils/query";
import md5 from "md5"

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        query.post('/api/auth/login', { username, password: md5(password) })
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <section className="py-2">
                    <label>Username:</label>
                    <Input onChange={(e) => setUserName(e.target.value)} />
                </section>
                <section className="py-2">
                    <label>Password:</label>
                    <Input onChange={(e) => setPassword(e.target.value)} />
                </section>
                <section className="py-2 flex gap-2">
                    <Button label={"Login"} className="flex-grow" />
                </section>
            </form>
        </div>
    )
}

export default Login;