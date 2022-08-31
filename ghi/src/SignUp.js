import React from 'react';
import { Navigate, Link } from 'react-router-dom';

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            verify_password: '',
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleVerify_PasswordChange = this.handleVerify_PasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.showPassword;
        delete data.verify_password;

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
                username: '',
                password: '',
                verify_password: '',

            });
        } else if (!response.ok){
            const message = ` An error: ${response.status} - ${response.statusText}`;
            throw new Error(message);
        }            

    }
    
    handleUsernameChange(event) {
        const value = event.target.value;
        this.setState({ username: value });
    }
    handlePasswordChange(event) {
        const value = event.target.value;
        this.setState({ password: value });

    }
    handleVerify_PasswordChange(event) {
        const value = event.target.value;
        this.setState({ verify_password: value });
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

                        <div className="form-floating mb-3">
                            <input onChange={this.handleUsernameChange} value={this.state.username} 
                            placeholder="Username" required type="text" name="username" 
                            id="username" />
                        </div>
                        
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

                        <br></br>
                        <button className="btn btn-primary" type="submit">Sign Up</button>
                        <div className='tolgoin'>
                            Already Have an Account?  <Link to='/login'>Sign In</Link> 
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
