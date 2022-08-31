import React from 'react';
import "./App.css";

class MainPage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "",
  //     age: "",
  //     gender: "",
  //     zip:"",
  //   };

  //   // this.handleSubmit = this.handleSubmit.bind(this);
  //   this.handleChangeName = this.handleChangeName.bind(this);
  //   this.handleChangeAge = this.handleChangeAge.bind(this);
  //   this.handleChangeGender = this.handleChangeGender.bind(this);
  //   this.handleChangeZip = this.handleChangeZip.bind(this);
  // }

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
  // handleChangeName(event) {
  //   const value = event.target.value;
  //   this.setState({ name: value });
  // }
  // handleChangeAge(event) {
  //   const value = event.target.value;
  //   this.setState({ age: value })
  // }
  // handleChangeGender(event){
  //   const value = event.target.value;
  //   this.setState({ Gender: value })
  // }
  // handleChangeZip(event){
  //   const value = event.target.value;
  //   this.setState({ zip: value })
  // }

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
                <h6>This social network is for dog owners who are seeking compatible playmates for their dogs. In this post-pandemic world where we are all a little more remote and 
                  further disconnected, we are trying to connect our furry friends and their owners</h6>
              {/* <form onSubmit={this.handleSubmit} id="create-account-form">
                <input onChange={this.handleChangeName} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <input onChange={this.handleChangeAge} value={this.state.age} placeholder="Age" required type="text" name="age" id="age" className="form-control" />
                <input onChange={this.handleChangeGender} value={this.state.Gender} placeholder="Gender" required type="text" name="Gender" id="Gender" className="form-control" />
                <input onChange={this.handleChangeZip} value={this.state.zip} placeholder="Zip" required type="text" name="zip" id="zip" className="form-control" /> */}
              <p className="card-text">Sign your pup up today!</p>
              <button className="btn btn-primary">Sign Up</button>
              {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default MainPage;
  