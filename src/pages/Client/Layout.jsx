import { Route, Routes } from 'react-router-dom';

import Header from '../Header';
import { client_menus } from "../menu";

import Profile from './Profile';
import ProfileRegistration from "./Profile/Registration";

import ProjectDetail from '../Project/Detail';
import ProjectInfo from '../Project/Info';
import ProjectManage from '../Project/Manage';
import ProjectRegistration from '../Project/Registration';
import ProjectScout from '../Project/Scout';
import ProjectProgress from '../Project/Progress';

import SpaceView from '../Space/View';
import SpaceDetail from '../Space/Detail';
import SpaceApply from '../Space/Apply';
import SpaceProgress from '../Space/Progress';

const ClientLayout = () => {
    return (
        <>
            <Header
                avatar={"/1"}
                name={"クライアントモードに切り替え"}
                subname={"クライアントメニュー"}
                menu={client_menus}
            />
            <div className="container">
                <Routes>
                    <Route path="/profile/view" element={<Profile mode="client" />} />
                    <Route path="/profile/registration" element={<ProfileRegistration mode="client" />} />

                    <Route path="/project/manage" element={<ProjectManage mode="client" />} />
                    <Route path="/project/registration" element={<ProjectRegistration mode="client" />} />
                    <Route path="/project/detail" element={<ProjectDetail mode="client" />} />
                    <Route path="/project/scout" element={<ProjectScout mode="client" />} />
                    <Route path="/project/info" element={<ProjectInfo mode="client" />} />
                    <Route path="/project/progress" element={<ProjectProgress mode="client" />} />

                    <Route path="/space/view" element={<SpaceView mode="client" />} />
                    <Route path="/space/detail" element={<SpaceDetail mode={"client"} />} />
                    <Route path="/space/apply" element={<SpaceApply mode={"client"} />} />
                    <Route path="/space/progress" element={<SpaceProgress mode={"client"} />} />
                </Routes>
            </div>
        </>
    )
}

export default ClientLayout;