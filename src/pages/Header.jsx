import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "../components/common/Avatar";

const Header = ({ avatar, name, menu }) => {
    const navigate = useNavigate()

    const [open, setOpen] = useState(false);
    return (
        <div className={`w-full shadow ${open && "fixed"}`}>
            <div className="w-full h-20 flex justify-between bg-white">
                <div className="flex-none">
                    <img src="/img/logo.png" />
                </div>
                <div className="w-16 flex items-center justify-center" onClick={() => setOpen(!open)}>
                    {
                        open ?
                            <svg key={1} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <line x1="2" y1="2" x2="16" y2="16" stroke="#00146E" strokeWidth="3" strokeLinecap="round" />
                                <line x1="2" y1="16" x2="16" y2="2" stroke="#00146E" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                            :
                            <svg key={2} xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18">
                                <line x1="2" y1="2" x2="22" y2="2" stroke="#00146E" strokeWidth="3" strokeLinecap="round" />
                                <line x1="2" y1="9" x2="22" y2="9" stroke="#00146E" strokeWidth="3" strokeLinecap="round" />
                                <line x1="2" y1="16" x2="22" y2="16" stroke="#00146E" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                    }
                    {/*  */}
                </div>
            </div>
            <div className={`bg-white transition-all overflow-hidden h-[calc(100vh-80px)] p-5 ${open ? "block" : "hidden"}`}>
                <div className="h-12 flex">
                    <div className="w-12">
                        <Avatar src={avatar} />
                    </div>
                    <div className="flex-grow">
                        {name}
                    </div>
                </div>
                <div className="text-gray-400">
                    ユーザーメニュー
                </div>
                {
                    menu.map((submenu, index) => (
                        <div key={index} className="border-b py-4">
                            {
                                submenu.map((menuitem, index) => (
                                    <div
                                        key={index}
                                        className="flex ml-4 p-2 items-center"
                                        onClick={() => {
                                            navigate(menuitem.href);
                                            setOpen(false);
                                        }}
                                    >
                                        <div className="w-8 h-8 p-1">
                                            {
                                                menuitem.icon
                                            }
                                        </div>
                                        <div className="flex-grow">
                                            {
                                                menuitem.content
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default Header;