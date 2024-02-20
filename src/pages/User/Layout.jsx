import { Routes, Route } from 'react-router-dom';

import { user_menus } from "../menu";

import Header from '../Header';
import Profile from '../User/Profile';
import Registration from './Profile/Registration';
import Info from './Project/Info';

const UserLayout = () => {
    return (
        <>
            <Header
                avatar={"/1"}
                name={"クライアントモードに切り替え"}
                subname={"ユーザーメニュー"}
                menu={user_menus}
            />
            <div className="container">
                <Routes>
                    <Route path="/profile/view" element={<Profile />} />
                    <Route path="/profile/registration" element={<Registration />} />
                    <Route path="/project/info" element={<Info />} />
                </Routes>
            </div>
        </>
    )
}

export default UserLayout;