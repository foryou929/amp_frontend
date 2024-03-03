import { Route, Routes } from 'react-router-dom';

import Header from '../Header';
import { user_menus } from "../menu";

import Profile from '../User/Profile';
import ProfileRegistration from './Profile/Registration';

import ProjectDetail from '../Project/Detail';
import ProjectManage from '../Project/Manage';
import ProjectView from '../Project/View';

import SpaceManage from '../Space/Manage';
import SpaceRegistration from '../Space/Registration';

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
                    <Route path="/profile/view" element={<Profile mode={"user"} />} />
                    <Route path="/profile/registration" element={<ProfileRegistration mode={"user"} />} />

                    <Route path="/project/manage" element={<ProjectManage mode={"user"} />} />
                    <Route path="/project/view" element={<ProjectView mode={"user"} />} />
                    <Route path="/project/detail" element={<ProjectDetail mode={"user"} />} />

                    <Route path="/space/manage" element={<SpaceManage mode={"user"} />} />
                    <Route path="/space/registration" element={<SpaceRegistration mode={"user"} />} />
                </Routes>
            </div>
        </>
    )
}

export default UserLayout;