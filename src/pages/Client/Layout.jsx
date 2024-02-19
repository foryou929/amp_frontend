import { Routes, Route } from 'react-router-dom';

import Profile from './Profile';
import ProjectRegistration from './Project/Registration'

import Header from '../Header';

import { client_menus } from "../menu";

const ClientLayout = () => {
    return (
        <>
            <Header
                name={"クライアントモードに切り替え"}
                subname={"クライアントメニュー"}
                menu={client_menus}
            />
            <div className="container">
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/project/registration" element={<ProjectRegistration />} />
                </Routes>
            </div>
        </>
    )
}

export default ClientLayout;