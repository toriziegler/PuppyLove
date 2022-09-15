import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LoginForm from './LoginForm';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/articles" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
