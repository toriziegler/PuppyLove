import React from 'react';
import "./App.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip:"",
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeZip = this.handleChangeZip.bind(this);
  }

//   async handleSubmit(event) {
//     event.preventDefault();
//     const data = {...this.state};

//     const url = 'http://localhost:8100/api/manufacturers/';
//     const fetchConfig = {
//       method: "post",
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };
//     const response = await fetch(url, fetchConfig);
//     if (response.ok) {
//       const newManufacturer = await response.json();
//       console.log(newManufacturer);
//       this.setState({
//         name: "",
//       });
//     }
//   }
  handleChangeZip(event){
    const value = event.target.value;
    this.setState({ zip: value })
  }

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
              <h5 className="card-title">Doggy Match</h5>
              <div className="form-floating mb-3">
                <h6>This social network is for dog owners who are seeking compatible playmates for their dogs. In this post-pandemic world where we are all a little more 
                  remote and further disconnected, we are trying to connect our furry friends and their owners.</h6>
              <p className="card-text">Sign your pup up today!</p>
              <button className="btn btn-primary">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default MainPage;
  