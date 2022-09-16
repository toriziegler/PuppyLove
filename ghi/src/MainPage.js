import React from 'react';
import "./App.css";
import { Link } from 'react-router-dom';

class MainPage extends React.Component {


  render() {
    return (
      <div className="App">
        <div
          className="container-fluid d-flex align-items-center"
          style={{
            height: "100vh",
            backgroundImage:
              "url(https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="card mx-auto" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Puppy Love</h5>
              <div className="form-floating mb-3">
                <h6>This social network is for dog owners who are seeking compatible playmates for their dogs. In this post-pandemic world where we are all a little more
                  remote and further disconnected, we are trying to connect our furry friends and their owners.</h6>
                <p className="card-text">Sign your pup up today!</p>
                <Link to="/login" className="mainlink"><button type="button" className="btn btn-success">Sign Up</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}


export default MainPage;
