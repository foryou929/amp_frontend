import { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import query from "../../utils/query";
import md5 from "md5"
import { NotificationManager } from "react-notifications";

const Register = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password != confirmPassword) {
            NotificationManager.error('Password error', 'Error');
            return;
        }
        if (password.length < 8) {
            NotificationManager.error('Password length should be greater than 8.', 'Erorr');
            return;
        }
        query.post('/api/auth/register', { username, password: md5(password), email })
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <section className="py-2">
                    <label>Username:</label>
                    <Input onChange={(e) => setUserName(e.target.value)} />
                </section>
                <section className="py-2">
                    <label>Email:</label>
                    <Input onChange={(e) => setEmail(e.target.value)} />
                </section>
                <section className="py-2">
                    <label>Password:</label>
                    <Input onChange={(e) => setPassword(e.target.value)} />
                </section>
                <section className="py-2">
                    <label>Confirm password:</label>
                    <Input onChange={(e) => setConfirmPassword(e.target.value)} />
                </section>
                <section className="py-2 flex gap-2">
                    <Button label={"Register"} className="flex-grow" />
                </section>
            </form>
        </div>
    )
}

export default Register;