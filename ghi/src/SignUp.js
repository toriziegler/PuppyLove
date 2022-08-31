import React from 'react';
import { Navigate, Link } from 'react-router-dom';

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // email: '',
            username: '',
            // first_name:'',
            // last_name:'',
            // date_of_birth: new Date().toISOString(),
            // location:'',
            password: '',
            verify_password: '',
            // interested: [],
            // error: '',
            // redirect: false,
        };
        // this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        // this.handleLastNameChange = this.handleLastNameChange.bind(this);
        // this.handleDate_of_BirthChange = this.handleDate_of_BirthChange.bind(this);
        // this.handleLocationChange = this.handleLocationChange.bind(this);
        // this.handleInterestedChange = this.handleInterestedChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleVerify_PasswordChange = this.handleVerify_PasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        // data.interested = { interested: data.interested}
        delete data.showPassword;
        delete data.verify_password;
        // delete data.error;
        // delete data.redirect;
        const url = `${process.env.REACT_APP_API_HOST}/api/accounts/`;
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                credentials: "include",
            },
        };

        const response = await fetch(url, fetchConfig);
        if(response.ok){
            this.setState({
                // email: '',
                username: '',
                // first_name: '',
                // last_name: '',
                // date_of_birth: '',
                // location: '',
                // interested: [],
                password: '',
                verify_password: '',
                // error: '',
                // redirect: true,
            });
        } else if (!response.ok){
            const message = ` An error: ${response.status} - ${response.statusText}`;
            throw new Error(message);
        }            

    }
    
    // handleEmailChange(event) {
    //     const value = event.target.value;
    //     this.setState({ email: value });
    // }
    handleUsernameChange(event) {
        const value = event.target.value;
        this.setState({ username: value });
    }
    // handleFirstNameChange(event) {
    //     const value = event.target.value;
    //     this.setState({ first_name: value });
    // }
    // handleLastNameChange(event) {
    //     const value = event.target.value;
    //     this.setState({ last_name: value });
    // }
    // handleDate_of_BirthChange(event) {
    //     const value = event.target.value;
    //     this.setState({ date_of_birth: value });
    // }
    // handleLocationChange(event) {
    //     const value = event.target.value;
    //     this.setState({ location: value });
    // }
    handlePasswordChange(event) {
        const value = event.target.value;
        this.setState({ password: value });

    }
    handleVerify_PasswordChange(event) {
        const value = event.target.value;
        this.setState({ verify_password: value });
    }
    // handleInterestedChange(event) {
    //     const { value, checked } = event.target;

    //     let listed = this.state.interested;

    //     if(checked) {
    //         listed.push(value);
    //     } else {      
    //         let index = listed.indexOf(value)

    //         if (index > -1 ){
    //             listed.splice(index, 1);
    //         }
    //     }
    //     this.setState({
    //         interested: [...listed]
    //     });
    // }

    
    // validForm() {
    //     return this.state.password.length >= 8 &&
    //            this.state.password === this.state.verify_password &&
    //         //    this.state.email &&
    //            this.state.username &&
    //         //    this.state.first_name &&
    //         //    this.state.last_name &&
    //         //    this.state.location &&
    //         //    this.state.interested &&
    //         //    this.state.date_of_birth;
    // }

    
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
                  "url(https://media.npr.org/assets/img/2021/08/06/dog-4415649-18eab39206426b985f7a5f69e3146a2cd1a56c0d-s800-c85.webp)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
            <div className="signup" id="signuptop">
                <div className="card mx-auto" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h1>Create an Account</h1>
                        <hr/>
 
                        {/* <div className="form-floating mb-3">
                            <input onChange={this.handleEmailChange} value={this.state.email} 
                            placeholder="Email" required type="email" name="email" 
                            id="email" />
                        </div> */}

                        <div className="form-floating mb-3">
                            <input onChange={this.handleUsernameChange} value={this.state.username} 
                            placeholder="Username" required type="text" name="username" 
                            id="username" />
                        </div>
                        
                        {/* <div className="form-floating mb-3" >
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
                        </div> */}

                        {/* <div className="form-floating mb-3">
                            <input onChange={this.handleLocationChange} value={this.state.location} 
                                placeholder="Location" required type="text" name="location" 
                                id="location" />
                        </div>

                        <label htmlFor="interested">Looking for</label>
                            <div className="form-check m-3" require onChange={this.handleInterestedChange} >
                                <input type="checkbox" id={this.state.interested==="neutered"}
                                    value="neutered" name="neutered" />Neutered&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="form-check m-3" require onChange={this.handleInterestedChange} >
                                <input type="checkbox" id={this.state.interested==="non-neutered"}
                                    value="non-neutered"  name="non-neutered" />&nbsp;Non-Neutered&nbsp;
                            </div> */}

                        <div className="form-floating mb-3" >
                            <input  value={this.state.password} onChange={this.handlePasswordChange}
                                placeholder="Password" required type="text" name="password" 
                                id="signuppassword" /> 
                        </div>

                        <div className="form-floating mb-3" >
                            <input value={this.state.verify_password} onChange={this.handleVerify_PasswordChange}
                                placeholder="Verify Password" required type="text" name="verify-password" 
                                id="verify-password"  />
                        </div>

                        <div>
                            <input type="checkbox" id="terms_condition" value="terms_condition" />
                            <label htmlFor="terms_condition">&nbsp;&nbsp;&nbsp;<a href="https://www.google.com">
                                Terms and Conditions</a></label>
                        </div>

                        <br></br>
                        <button className="btn btn-primary" type="submit">Sign Up</button>
                        <div className='tolgoin'>
                            Already have an account?  <Link to='/login'>Log In</Link> 
                        </div>
                    
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}


export default SignUp;
