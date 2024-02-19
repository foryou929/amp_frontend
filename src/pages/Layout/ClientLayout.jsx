import { Routes, Route } from 'react-router-dom';

import Home from '../Home';
import Profile from '../Client/Profile';

import Header from '../Header';

import { MdHome } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { IoMdBriefcase } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { IoHelpCircle } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const menus = [
    [
        { icon: <MdHome className='w-full h-full' />, href: "/user/home", content: "マイページ" },
        { icon: <IoDocumentText className='w-full h-full' />, href: "/user/profile", content: "プロフィール" },
        { icon: <IoMdBriefcase className='w-full h-full' />, href: "/user/profile/registration", content: "プロジェクト管理" },
        { icon: <IoDocumentText className='w-full h-full' />, href: "/user/find-job", content: "仕事•案件を探す" },
    ],
    [
        { icon: <MdSpaceDashboard className='w-full h-full' />, href: "/user/space/manage", content: "貸出スペース管理" },
        { icon: <MdSpaceDashboard className='w-full h-full' />, href: "/user/space/create", content: "貸出スペースを作成" },
    ],
    [
        { icon: <FaMoneyBills className='w-full h-full' />, href: "/user/score", content: "報酬管理" },
    ],
    [
        { icon: <IoHelpCircle className='w-full h-full' />, href: "/user/help", content: "ヘルプ" },
        { icon: <IoMdSettings className='w-full h-full' />, href: "/user/setting", content: "設定" },
    ]
];

const ClientLayout = () => {
    return (
        <>
            <Header
                name={"クライアントモードに切り替え"}
                menu={menus}
            />
            <div className="container">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </>
    )
}

export default ClientLayout;