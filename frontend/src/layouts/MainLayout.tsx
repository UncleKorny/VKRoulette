import { Routes, Route } from 'react-router-dom';
import Roulette from '../pages/Roulette.tsx';
import MainPage from '../pages/MainPage.tsx';
import Profile from '../pages/Profile.tsx';
import Navbar from '../components/Navbar.tsx';
function MainLayout() {
    return (
        <>
            {/* <Navbar/> */}
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/roulette" element={<Roulette />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    );
}

export default MainLayout;