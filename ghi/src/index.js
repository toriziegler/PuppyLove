import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import ListProfiles from './ListProfiles';
import MainPage from './MainPage';
import Nav from './Nav';
import Profile from './Profile';
import OwnerInfo from './OwnerInfo';
import DogInfo from './DogInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/puppy-love/" element={<MainPage />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/listprofiles/" element={<ListProfiles />} />
        <Route path="/doginfo/" element={<DogInfo />} />
        <Route path="/ownerinfo/" element={<OwnerInfo />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/forgotpassword/" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
