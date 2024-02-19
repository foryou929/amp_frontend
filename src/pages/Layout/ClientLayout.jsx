import { Routes, Route } from 'react-router-dom';

import Home from '../Home';
import Profile from '../Client/Profile';
import ProjectRegistration from '../Client/Project/Registration'

import Header from '../Header';

import { MdHome } from "react-icons/md";
import { IoMdBriefcase } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { IoHelpCircle } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const menus = [
    [
        { icon: <MdHome className='w-full h-full' />, href: "/client/home", content: "マイページ" },
        { icon: <IoMdBriefcase className='w-full h-full' />, href: "/client/profile", content: "プロジェクト管理" },
        { icon: <IoMdBriefcase className='w-full h-full' />, href: "/client/profile/registration", content: "プロジェクトを作成" },
        { icon: <IoMdBriefcase className='w-full h-full' />, href: "/client/project/manage", content: "スカウトー覧" },
    ],
    [
        { icon: <MdSpaceDashboard className='w-full h-full' />, href: "/client/space/find", content: "スペースを探す" },
    ],
    [
        { icon: <FaMoneyBills className='w-full h-full' />, href: "/client/score", content: "支払い管理" },
    ],
    [
        { icon: <IoHelpCircle className='w-full h-full' />, href: "/client/help", content: "ヘルプ" },
        { icon: <IoMdSettings className='w-full h-full' />, href: "/client/setting", content: "設定" },
    ]
];

const ClientLayout = () => {
    return (
        <>
            <Header
                name={"クライアントモードに切り替え"}
                subname={"クライアントメニュー"}
                menu={menus}
            />
            <div className="container">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/project/registration" element={<ProjectRegistration />} />
                </Routes>
            </div>
        </>
    )
}

export default ClientLayout;