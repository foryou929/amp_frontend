import { Route, Routes } from 'react-router-dom';

import Header from '../Header';
import { client_menus } from "../menu";

import Profile from './Profile';

import ProjectDetail from '../Project/Detail';
import ProjectInfo from '../Project/Info';
import ProjectManage from '../Project/Manage';
import ProjectRegistration from '../Project/Registration';
import ProjectScout from '../Project/Scout';

import SpaceView from '../Space/View';

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

                    <Route path="/project/manage" element={<ProjectManage mode="client" />} />
                    <Route path="/project/registration" element={<ProjectRegistration mode="client" />} />
                    <Route path="/project/detail" element={<ProjectDetail mode="client" />} />
                    <Route path="/project/scout" element={<ProjectScout mode="client" />} />
                    <Route path="/project/info" element={<ProjectInfo mode="client" />} />

                    <Route path="/space/view" element={<SpaceView />} />
                </Routes>
            </div>
        </>
    )
}

export default ClientLayout;