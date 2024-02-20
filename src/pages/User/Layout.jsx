import { Routes, Route } from 'react-router-dom';

import { user_menus } from "../menu";
import Header from '../Header';

import Profile from '../User/Profile';
import ProfileRegistration from './Profile/Registration';

import ProjectManage from '../Project/Manage';
import ProjectView from '../Project/View';

import SpaceManage from '../Space/Manage';
import SpaceRegistration from '../Space/Manage';

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
                    <Route path="/profile/registration" element={<ProfileRegistration />} />
                    <Route path="/project/manage" element={<ProjectManage />} />
                    <Route path="/project/view" element={<ProjectView />} />

                    <Route path="/space/manage" element={<SpaceManage />} />
                    <Route path="/space/registration" element={<SpaceRegistration />} />
                </Routes>
            </div>
        </>
    )
}

export default UserLayout;