import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import MainPage from './MainPage';
import Nav from './Nav';
import Profile from './Profile';
import OwnerInfo from './OwnerInfo';
import DogInfo from './DogInfo';
import ListProfiles from './ListProfiles';

function App(props) {
  return (
    <div className='App'>
      <BrowserRouter>
        <AuthProvider>
          <Nav />
          <Routes>
            <Route exact path="/puppy-love/" element={<MainPage />} />
            <Route path="listprofiles" element={<ListProfiles />} />
            <Route path="profile" element={<Profile />} />
            <Route path="doginfo" element={<DogInfo />} />
            <Route path="ownerinfo" element={<OwnerInfo />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;