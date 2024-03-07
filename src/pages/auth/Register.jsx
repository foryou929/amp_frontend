import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Password from "../../components/Password";
import query from "../../utils/query";
import md5 from "md5"
import { NotificationManager } from "react-notifications";
import { NavLink } from "react-router-dom";

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
        query.post(`/auth/register`, { username, password: md5(password), email })
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
                    <label>Eメール:</label>
                    <div>
                        <Input className="w-full" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </section>
                <section className="py-2">
                    <label>パスワード:</label>
                    <Password className="w-full" onChange={(e) => setPassword(e.target.value)} showStrength />
                </section>
                <section className="py-2">
                    <label>パスワード確認:</label>
                    <Password className="w-full" onChange={(e) => setConfirmPassword(e.target.value)} />
                </section>
                <section className="py-2 flex gap-2">
                    <Button className="flex-grow">登録</Button>
                </section>
                <section className="py-2 text-right">
                    <NavLink className="text-[#56A7FF] font-bold" to={"/login"}>
                        ユーザーログインページへ
                    </NavLink>
                </section>
                <div className="py-2">
                    <p className="font-bold my-2">パスワード強度のガイドライン:</p>
                    <p>- 大文字と小文字を組み合わせて使用します。</p>
                    <p>- パスワードには少なくとも 1 つの数字を含めてください。</p>
                    <p>- パスワードには少なくとも 1 つの特殊文字 (! @ # $ % ^ & *) を含めてください。</p>
                    <p>- パスワードの長さが 8 文字以上であることを確認してください。</p>
                </div>
            </form>
        </div>
    )
}

export default Register;