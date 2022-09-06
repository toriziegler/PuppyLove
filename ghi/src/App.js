import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import PrivateRoute from './utilis/PrivateRoute'
import {AuthProvider} from './context/AuthContext'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'  
import Header from './components/Header'

function App(props) {
  return (
    <div className='App'>
      <BrowserRouter>
        <AuthProvider>
          <Header />
            <Routes>
              <Route exact path="/" element={<PrivateRoute />}>
                <Route exact path="/" element={<HomePage />} />
              </Route>
              <Route path="/login/" element={<LoginPage />} />
            </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;