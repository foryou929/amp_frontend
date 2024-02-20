import { FaMoneyBills } from "react-icons/fa6";
import { IoMdBriefcase, IoMdSettings } from "react-icons/io";
import { IoDocumentText, IoHelpCircle } from "react-icons/io5";
import { MdHome, MdSpaceDashboard } from "react-icons/md";

export const user_menus = [
    [
        { icon: <MdHome className='w-full h-full' />, href: "/user/profile/view", content: "マイページ" },
        { icon: <IoDocumentText className='w-full h-full' />, href: "/user/profile/registration", content: "プロフィール" },
        { icon: <IoMdBriefcase className='w-full h-full' />, href: "/user/project/manage", content: "プロジェクト管理" },
        { icon: <IoDocumentText className='w-full h-full' />, href: "/user/project/view", content: "仕事•案件を探す" },
    ],
    [
        { icon: <MdSpaceDashboard className='w-full h-full' />, href: "/user/space/manage", content: "貸出スペース管理" },
        { icon: <MdSpaceDashboard className='w-full h-full' />, href: "/user/space/registration", content: "貸出スペースを作成" },
    ],
    [
        { icon: <FaMoneyBills className='w-full h-full' />, href: "/user/score", content: "報酬管理" },
    ],
    [
        { icon: <IoHelpCircle className='w-full h-full' />, href: "/user/help", content: "ヘルプ" },
        { icon: <IoMdSettings className='w-full h-full' />, href: "/user/setting", content: "設定" },
    ]
];

export const client_menus = [
    [
        { icon: <MdHome className='w-full h-full' />, href: "/client/profile/view", content: "マイページ" },
        { icon: <IoMdBriefcase className='w-full h-full' />, href: "/client/project/manage", content: "プロジェクト管理" },
        { icon: <IoMdBriefcase className='w-full h-full' />, href: "/client/project/registration", content: "プロジェクトを作成" },
        { icon: <IoMdBriefcase className='w-full h-full' />, href: "/client/project/scout", content: "スカウトー覧" },
    ],
    [
        { icon: <MdSpaceDashboard className='w-full h-full' />, href: "/client/space/view", content: "スペースを探す" },
    ],
    [
        { icon: <FaMoneyBills className='w-full h-full' />, href: "/client/score", content: "支払い管理" },
    ],
    [
        { icon: <IoHelpCircle className='w-full h-full' />, href: "/client/help", content: "ヘルプ" },
        { icon: <IoMdSettings className='w-full h-full' />, href: "/client/setting", content: "設定" },
    ]
];