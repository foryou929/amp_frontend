import { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Password from "../../components/common/Password";
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
        if (password.length >= 8) {
            NotificationManager.error('Password length should be greater than 8.', 'Erorr');
            return;
        }
        query.post('/api/auth/register', { username, password: md5(password), email })
    }

    return (
        <>
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
                    <Password onChange={(e) => setPassword(e.target.value)} showStrength />
                </section>
                <section className="py-2">
                    <label>Confirm password:</label>
                    <Password onChange={(e) => setConfirmPassword(e.target.value)} />
                </section>
                <section className="py-2 flex gap-2">
                    <Button label={"Register"} className="flex-grow" />
                </section>
                <div className="py-2">
                    <p className="font-bold">Password Strength Guidelines:</p>
                    <p>- Use a combination of uppercase and lowercase letters.</p>
                    <p>- Include at least one number in your password.</p>
                    <p>- Include at least one special character (e.g., ! @ # $ % ^ & *) in your password.</p>
                    <p>- Ensure your password is at least 8 characters long.</p>
                </div>
            </form>
        </>
    )
}

export default Register;