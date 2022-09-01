import React from 'react';

class DogInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            gender:'',
            first_name:'',
            last_name:'',
            date_of_birth:'',
            location:'',
            interested: [],
        };
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleDate_of_BirthChange = this.handleDate_of_BirthChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleInterestedChange = this.handleInterestedChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // async handleSubmit(event) {
    //     event.preventDefault();
    //     const data = { ...this.state };
    //     data.interested = { interested: data.interested}

    //     const url = `${process.env.REACT_APP_API_HOST}/api/dogs/`;
    //     const fetchConfig = {
    //         method: "POST",
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             credentials: "include",
    //         },
    //     };

    //     const response = await fetch(url, fetchConfig);
    //     if(response.ok){
    //         this.setState({
    //             gender: '',
    //             first_name: '',
    //             last_name: '',
    //             date_of_birth: '',
    //             location: '',
    //             interested: [],
    //         });
    //     } else if (!response.ok){
    //         const message = ` An error: ${response.status} - ${response.statusText}`;
    //         throw new Error(message);
    //     }            

    // }
    
    handleGenderChange(event) {
        const value = event.target.value;
        this.setState({ gender: value });
    }

    handleFirstNameChange(event) {
        const value = event.target.value;
        this.setState({ first_name: value });
    }
    handleLastNameChange(event) {
        const value = event.target.value;
        this.setState({ last_name: value });
    }
    handleDate_of_BirthChange(event) {
        const value = event.target.value;
        this.setState({ date_of_birth: value });
    }
    handleLocationChange(event) {
        const value = event.target.value;
        this.setState({ location: value });
    }
    handleInterestedChange(event) {
        const { value, checked } = event.target;

        let listed = this.state.interested;

        if(checked) {
            listed.push(value);
        } else {      
            let index = listed.indexOf(value)

            if (index > -1 ){
                listed.splice(index, 1);
            }
        }
        this.setState({
            interested: [...listed]
        });
    }

    render() {
        // if (this.state.redirect){
        //     return <Navigate to="/login"/>;
        // }
        // if (this.props.token) {
        //     return <Navigate to="/profiles/myself" />;
        // }
        return (
            <div className="App">
            <div
              className="container-fluid d-flex align-items-center"
              style={{
                height: "100vh",
                backgroundImage:
                  "url(https://images.pexels.com/photos/776373/pexels-photo-776373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
            <div className="doginfo" id="doginfo">
                <div className="card mx-auto" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h1>Dog Information</h1>
                        <hr/>
 
                        <div className="form-floating mb-3">
                            <input onChange={this.handleGenderChange} value={this.state.gender} 
                            placeholder="Gender" required type="text" name="gender" 
                            id="gender" />
                        </div>

                        <div className="form-floating mb-3" >
                            <input value={this.state.first_name} onChange={this.handleFirstNameChange}
                            placeholder="First Name" required type="text" name="first_name" 
                            id="first_name" />
                        </div>

                        <div className="form-floating mb-3" >
                            <input value={this.state.last_name} onChange={this.handleLastNameChange}
                            placeholder="Last Name" required type="text" name="last_name" 
                            id="last_name" />
                        </div>

                        <div className="form-floating mb-3">
                            <input onChange={this.handleDate_of_BirthChange} value={this.state.date_of_birth }  
                            placeholder="yyyy-MM-dd" required type="date" name="date" 
                            id="date" />
                        </div>

                        <div className="form-floating mb-3">
                            <input onChange={this.handleLocationChange} value={this.state.location} 
                                placeholder="Location" required type="text" name="location" 
                                id="location" />
                        </div>

                        <label htmlFor="interested">Looking for</label>
                            <div className="form-check m-3" require onChange={this.handleInterestedChange} >
                            &nbsp;<input type="checkbox" id={this.state.interested==="neutered"}
                                    value="neutered" name="neutered" />&nbsp;Neutered&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="form-check m-3" require onChange={this.handleInterestedChange} >
                                <input type="checkbox" id={this.state.interested==="non-neutered"}
                                    value="non-neutered"  name="non-neutered" />&nbsp;Non-Neutered&nbsp;
                            </div>

                        <br></br>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}


export default DogInfo;
