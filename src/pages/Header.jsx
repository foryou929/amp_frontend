import { useState } from "react";
import { NavLink } from "react-router-dom";

import Avatar from "../components/Avatar";

const Header = ({ avatar, name, subname, menu, children }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`w-full shadow ${open && "fixed"}`}>
            <div className="w-full h-20 py-4 flex justify-between bg-white">
                <NavLink
                    to="/"
                    className="w-36 flex-none flex justify-center items-center"
                >
                    <img src="/logo512.png" className="h-12"/>
                </NavLink>
                <div className="flex-grow flex justify-center items-end">
                    {
                        children
                    }
                </div>
                <div className="w-16 flex-none flex justify-center items-center cursor-pointer" onClick={() => setOpen(!open)}>
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
                <div className="h-12 flex items-center gap-2">
                    <div className="w-12">
                        <Avatar src={avatar} circle />
                    </div>
                    <div className="flex-grow">
                        {name}
                    </div>
                </div>
                <div className="text-gray-400 mt-4">
                    {subname}
                </div>
                {
                    menu?.map((submenu, index) => (
                        <div key={index} className="border-b py-4">
                            {
                                submenu.map((menuitem, index) => (
                                    <NavLink
                                        key={index}
                                        className="flex ml-4 p-2 items-center"
                                        to={menuitem.href}
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
                                    </NavLink>
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