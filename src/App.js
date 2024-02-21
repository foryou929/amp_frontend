import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import initializeApp from './app/init';

import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import UserLayout from './pages/User/Layout';
import ClientLayout from './pages/Client/Layout';

import query from './utils/query';

import { getAccessToken } from './app/auth';

import { login } from './common/userSlice';

initializeApp();

function App() {
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)

  useEffect(() => {
    const access_token = getAccessToken();
    if (access_token) {
      query.auth.get("/api/auth/loginWithToken", (data) => {
        console.log(data);
        // dispatch(login(data))
      })
    }
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/*" element={<UserLayout />} />
          <Route path="/client/*" element={<ClientLayout />} />
        </Routes>
      </Router>
      <NotificationContainer />
    </>
  );
}

export default App;
