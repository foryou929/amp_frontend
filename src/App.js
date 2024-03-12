import { useEffect } from 'react';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Page404 from './pages/common/Page404';

import ClientLayout from './pages/Client/Layout';
import UserLayout from './pages/User/Layout';

import { initializeApp/*, initializeSocket*/ } from './app/init';
import query from './utils/query';

import { getAccessToken } from './app/auth';
import { login } from './common/userSlice';

initializeApp();

function App() {
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.user)

  useEffect(() => {
    const access_token = getAccessToken();
    if (access_token) {
      query.auth.get(`/auth/loginWithToken`, (user) => {
        dispatch(login(user))
      });
    }
    // return () => {
    //   if (window.socket)
    //     window.socket.disconnect();
    // }
  }, []);

  // useEffect(() => {
  //   if (user.id ) {
  //     const access_token = getAccessToken();
  //     initializeSocket(access_token);
  //   }
  // }, [user]);

  return (
    <main>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {
            user.id ?
              <>
                <Route path="/client/*" element={<ClientLayout />} />
                <Route path="/user/*" element={<UserLayout />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Page404 />} />
              </> :
              <Route path="*" element={<Login />} />
          }
        </Routes>
      </Router>
      <NotificationContainer />
    </main>
  );
}

export default App;
