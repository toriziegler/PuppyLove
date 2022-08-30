
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import MainPage from './MainPage';
import Nav from './Nav';
import Profile from './Profile';
import LoginForm from './LoginForm';
import SignUp from './SignUp';
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
        <Routes path="login">
          <Route path="login" element={<LoginForm />}/>
        </Routes>
        <Routes path="signup">
          <Route path="signup" element={<SignUp />}/>
        </Routes>

    </BrowserRouter>
  );
}
export default App;