import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import initializeApp from './app/init';

import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import UserLayout from './pages/Layout/UserLayout';
import ClientLayout from './pages/Layout/ClientLayout';

initializeApp();

function App() {
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
