import { Routes, Route } from 'react-router-dom';

import Registration from './Profile/Registration';
import Info from './Project/Info';

import Header from '../Header';

import { user_menus } from "../menu";

const UserLayout = () => {
    return (
        <>
            <Header
                name={"クライアントモードに切り替え"}
                subname={"ユーザーメニュー"}
                menu={user_menus}
            />
            <div className="container">
                <Routes>
                    <Route path="/profile/registration" element={<Registration />} />
                    <Route path="/project/info" element={<Info />} />
                </Routes>
            </div>
        </>
    )
}

export default UserLayout;