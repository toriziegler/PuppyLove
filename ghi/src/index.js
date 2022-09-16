// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {Route, BrowserRouter,Routes} from 'react-router-dom';
// import Login from './components/Login';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './Login';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import ListProfiles from './ListProfiles';
import MainPage from './MainPage';
import Nav from './Nav';
import Profile from './Profile';
import SignUp from './SignUp';
import OwnerInfo from './OwnerInfo';
import DogInfo from './DogInfo';
import UploadImageToS3WithNativeSdk from './UploadImageToS3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

function Router(props) {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/articles" element={<App />} />
        <Route exact path="/puppy-love/" element={<MainPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="listprofiles" element={<ListProfiles />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="doginfo" element={<DogInfo />} />
        <Route path="ownerinfo" element={<OwnerInfo />} />
        <Route path="upload" element={<UploadImageToS3WithNativeSdk />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();