import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import MainPage from './MainPage';
import Nav from './Nav';
import Profile from './Profile';
import LoginForm from './LoginForm';
import SignUp from './SignUp';
import OwnerInfo from './OwnerInfo';
import DogInfo from './DogInfo';
import UploadImageToS3WithNativeSdk from './UploadImageToS3';
import PrivateRoute from './PrivateRoute'
import { AuthProvider } from './AuthContext'
import ListProfiles from './ListProfiles';

function App(props) {
  return (
    <div className='App'>
      <BrowserRouter>
        <AuthProvider>
          <Nav />
          <Routes>
            <Route exact path="/puppy-love/" element={<PrivateRoute />}>
              <Route exact path="/puppy-love/" element={<MainPage />} />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="listprofiles" element={<ListProfiles />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="doginfo" element={<DogInfo />} />
            <Route path="ownerinfo" element={<OwnerInfo />} />
            <Route path="upload" element={<UploadImageToS3WithNativeSdk />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;