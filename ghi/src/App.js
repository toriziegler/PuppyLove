import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './utilis/PrivateRoute';
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header/>
        <Routes path="home">
          <PrivateRoute component={HomePage} path="/" exact/>
        </Routes>
        <Routes path="login">
          <Route path="login" element={<LoginPage />}/>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;