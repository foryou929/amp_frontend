import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Client/Profile';
import Registration from './pages/User/Profile/Registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client/profile" element={<Profile />} />
        <Route path="/client/project/registration" element={<Registration />} />
        <Route path="/user/profile/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
