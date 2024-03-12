import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

import Avatar from "../components/Avatar";

import { user_menus, client_menus } from "./menu";
import { clear } from "../common/messageSlice";

const Header = ({ children }) => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    const [open, setOpen] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [location]);

    const [mode, setMode] = useState(localStorage.getItem("mode") == "client");
    const [menu, setMenu] = useState([]);

    const message = useSelector(state => state.message);

    useEffect(() => {
        if (mode) {
            localStorage.setItem("mode", "client");
            setMenu(client_menus);
        } else {
            localStorage.setItem("mode", "user");
            setMenu(user_menus);
        }
    }, [mode]);

    return (
        <div className={`w-full shadow ${open && "fixed z-50"}`}>
            <div className="w-full h-20 py-4 flex justify-between bg-white">
                <NavLink
                    to="/"
                    className="w-36 flex-none flex justify-center items-center"
                >
                    <img src="/logo512.png" className="h-12" />
                </NavLink>
                <div className="flex-grow flex justify-center items-end">
                    {
                        children
                    }
                </div>
                <div className="w-16 flex-none flex justify-center items-center cursor-pointer" onClick={() => setOpen(!open)}>
                    {
                        open ?
                            <img src="/img/menu-close.svg" /> :
                            <img src="/img/menu.svg" />
                    }
                    {/*  */}
                </div>
            </div>
            <div className={`bg-white transition-all overflow-hidden h-[calc(100vh-80px)] p-5 ${open ? "block" : "hidden"}`}>
                <div className="h-12 flex items-center gap-2 cursor-pointer">
                    <Avatar className="w-12 h-12" src={user.avatar} circle />
                    <div className="flex-grow" onClick={() => setMode(!mode)}>
                        {mode ? "ユーザーに切り替え" : "クライアントモードに切り替え"}
                    </div>
                </div>
                <div className="text-gray-400 mt-4">
                    {mode ? "クライアントメニュー" : "ユーザーメニュー"}
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
            {
                message.type > 0 && (
                    <div className={`px-8 relative text-center ${message.type == 1 ? "text-green-500" : message.type == 3 ? "text-red-500" : "text-yellow-500"}`}>
                        <p className="py-1">{message.content}</p>
                        <div className="absolute w-4 right-4 top-0 text-xl cursor-pointer" onClick={() => {
                            dispatch(clear());
                        }}>
                            &times;
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default Header;