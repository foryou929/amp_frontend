import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import initializeApp from './app/init';

import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/Client/Profile';
import Registration from './pages/User/Profile/Registration';
import Info from './pages/User/Project/Info';

initializeApp();

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/client/profile" element={<Profile />} />
          <Route path="/client/project/registration" element={<Registration />} />
          <Route path="/user/profile/registration" element={<Registration />} />
          <Route path="/user/project/info" element={<Info />} />
        </Routes>
      </Router>
      <NotificationContainer />
    </>
  );
}

export default App;
