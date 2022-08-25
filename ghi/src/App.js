
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import MainPage from './MainPage';
import Nav from './Nav';
import Profile from './Profile';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Routes path="profile">
          <Route path="profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;