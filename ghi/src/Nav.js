import { NavLink } from 'react-router-dom';
import React from 'react';
import logo from "./assets/images/taylordrawing2.png";
import { useCookies } from 'react-cookie';


const footerStyle = {
  backgroundColor: "",
  fontSize: "20px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
  );
}

// function CheckUser(token) {
//   //const statesHost = `${process.env.REACT_APP_ACCOUNT_API}`
//   const Host = 'http://localhost:8100'
//   const URL = Host + '/api/current/';
//   const response = await fetch(URL);
//   if (response.ok) {
//     const data = await response.json();
//     console.log(data)
//   }
// }

function Nav() {
  const [token, SetToken, removeToken] = useCookies(['mytoken']) //token, SetToken,
  const logoutBtn = () => {
    removeToken(['mytoken'])
  }
  // let messageClasses = 'alert alert-success d-none mb-0';
  // let formClasses = '';
  // if (this.state.hasSignedUp) {
  //   messageClasses = 'alert alert-success mb-0';
  //   formClasses = 'd-none';
  // }
  // <form className={formClasses}
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div>
      </div>
      <div className="container-fluid">
        <NavLink to="/puppy-love/" className='home-button' ><img className="logo" src={logo} alt="" width="80px" height="50px" /></NavLink>
        <NavLink className="navbar-brand" to="/puppy-love/">Puppy Love</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/puppy-love/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/listprofiles/">Find a New Friend</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile/">Profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/doginfo/">Dog Information</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ownerinfo">Owner Information</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav justify-content-end mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" onClick={logoutBtn}>Log out</NavLink>
            </li>
          </ul>
          <div>
            <Footer>
              <span>© Copyright 2022 Puppy Love, LLC. All Rights Reserved</span>
            </Footer>
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Nav;
