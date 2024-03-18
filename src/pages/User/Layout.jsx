import { Route, Routes } from 'react-router-dom';

import Header from '../Header';
import { user_menus } from "../menu";

import Profile from '../User/Profile';
import ProfileRegistration from './Profile/Registration';

import ProjectApply from '../Project/Apply';
import ProjectDetail from '../Project/Detail';
import ProjectManage from '../Project/Manage';
import ProjectProgress from '../Project/Progress';
import ProjectView from '../Project/View';

import SpaceDetail from '../Space/Detail';
import SpaceManage from '../Space/Manage';
import SpaceProgress from '../Space/Progress';
import SpaceRegistration from '../Space/Registration';

import SectionMessage from '../Section/Message';
import Settings from '../Setting';

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
                    <Route path="/profile/view" element={<Profile mode={"user"} />} />
                    <Route path="/profile/registration" element={<ProfileRegistration mode={"user"} />} />

                    <Route path="/project/manage" element={<ProjectManage mode={"user"} />} />
                    <Route path="/project/view" element={<ProjectView mode={"user"} />} />
                    <Route path="/project/detail" element={<ProjectDetail mode={"user"} />} />
                    <Route path="/project/apply" element={<ProjectApply mode={"user"} />} />
                    <Route path="/project/progress" element={<ProjectProgress mode={"user"} />} />

                    <Route path="/space/manage" element={<SpaceManage mode={"user"} />} />
                    <Route path="/space/registration" element={<SpaceRegistration mode={"user"} />} />
                    <Route path="/space/detail" element={<SpaceDetail mode={"user"} />} />
                    <Route path="/space/progress" element={<SpaceProgress mode={"user"} />} />

                    <Route path="/section/message" element={<SectionMessage mode={"client"} />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </>
    )
}

export default UserLayout;