import { useContext } from 'react';
import { Navigate, Route, Outlet, BrowserRouter } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = () => {
    console.log("PRivate route works!")
    const {user} = useContext(AuthContext); // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute