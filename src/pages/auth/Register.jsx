import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Password from "../../components/Password";
import query from "../../utils/query";
import md5 from "md5"
import { NavLink } from "react-router-dom";

const Register = () => {
    const [username, setUserName] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        setError(null);
        setSuccess(null);
    }, [username, email, password, confirmPassword]);

    const onClick = async (e) => {
        setError(null);
        setSuccess(null);
        if (username.trim().length == 0) {
            setError("ユーザーIDを入力してください。");
            return;
        }
        if ((last_name + first_name).trim().length == 0) {
            setError("ユーザー名を入力してください。");
            return;
        }
        const RegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!RegExp.test(email)) {
            setError("メールアドレスを正確に入力してください。");
            return;
        }
        if (password.length < 8) {
            setError("パスワードの長さは8文字以上でなければなりません。");
            return;
        }
        if (password != confirmPassword) {
            setError("パスワードを正確に入力してください。");
            return;
        }
        try {
            await query.post(`/auth/register`, { username, last_name, first_name, password: md5(password), email })
            setSuccess("会員登録が完了しました。");
        } catch (err) {
            if (err.response.status == 400)
                setError("ユーザー名がご利用中です。");
            else
                setError("サーバー側でエラーが発生しました。");
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
                    <label>ユーザー名</label>
                    <div className="flex gap-4">
                        <Input className="w-full" onChange={(e) => setLastName(e.target.value)} />
                        <Input className="w-full" onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                </section>
                <section className="py-2">
                    <label>メールアドレス:</label>
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
                {
                    success ? (
                        <section className="py-2">
                            <p className="text-center text-green-500">{success}</p>
                        </section>
                    ) : (
                        <>
                        </>
                    )
                }
                <section className="py-2">
                    <Button className="w-full" onClick={onClick}>会員登録</Button>
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
            </div>
        </div>
    )
}

export default Register;