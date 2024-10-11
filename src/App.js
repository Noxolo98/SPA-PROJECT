import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import UserProfile from './Components/UserProfile';
import { UserProvider } from './context/UserContext';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/user/:username" element={<UserProfile />} />
                </Routes>
            </Router>
        </UserProvider>
    );
};


export default App;
