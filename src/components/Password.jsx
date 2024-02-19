import { useEffect, useState } from "react";

const regex = {
    uppercase: /^(?=.*[A-Z])/,
    lowercase: /^(?=.*[a-z])/,
    number: /^(?=.*\d)/,
    specialCharacter: /^(?=.*[!@#$%^&*()])/,
    length: /^.{8,}$/ // Minimum length of 8 characters
};

const Password = ({ className, showStrength, ...rest }) => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState({});
    useEffect(() => {
        setStrength({
            uppercase: regex.uppercase.test(password),
            lowercase: regex.lowercase.test(password),
            number: regex.number.test(password),
            specialCharacter: regex.specialCharacter.test(password),
            length: regex.length.test(password)
        });
    }, [password]);
    return (
        <div className={className}>
            <input type="password" className={`w-full p-2 border border-[#DEE2E6]`} {...rest} onChange={(e) => setPassword(e.target.value)}>
            </input>
            {
                showStrength &&
                <div className="flex gap-2 mt-2">
                    <div className={`h-1 flex-grow bg-gray-200 ${strength.uppercase && 'bg-green-400'}`}></div>
                    <div className={`h-1 flex-grow bg-gray-200 ${strength.lowercase && 'bg-green-400'}`}></div>
                    <div className={`h-1 flex-grow bg-gray-200 ${strength.number && 'bg-green-400'}`}></div>
                    <div className={`h-1 flex-grow bg-gray-200 ${strength.specialCharacter && 'bg-green-400'}`}></div>
                    <div className={`h-1 flex-grow bg-gray-200 ${strength.length && 'bg-green-400'}`}></div>
                </div>
            }
        </div>
    )
}

export default Password;