import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            password: '',
            verify_password: '',
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFirsNameChange = this.handleFirsNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleVerify_PasswordChange = this.handleVerify_PasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.password;
        delete data.verify_password;

        const url = 'http://localhost:8100/api/register';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                credentials: "include",
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            this.setState({
                email: '',
                first_name: '',
                last_name: '',
                password: '',
                verify_password: '',

            });
        } else if (!response.ok) {
            const message = ` An error: ${response.status} - ${response.statusText}`;
            throw new Error(message);
        }

    }

    handleEmailChange(event) {
        const value = event.target.value;
        this.setState({ email: value });
    }
    handlePasswordChange(event) {
        const value = event.target.value;
        this.setState({ password: value });

    }
    handleFirsNameChange(event) {
        const value = event.target.value;
        this.setState({ first_name: value });

    }
    handleLastNameChange(event) {
        const value = event.target.value;
        this.setState({ last_name: value });

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
                                <hr />

                                <div className="form-floating mb-3">
                                    <input onChange={this.handleEmailChange} value={this.state.email}
                                        placeholder="Email" required type="text" name="email"
                                        id="email" />
                                </div>

                                <div className="form-floating mb-3" >
                                    <input value={this.state.password} onChange={this.handlePasswordChange}
                                        placeholder="Password" required type="password" name="password"
                                        id="signuppassword" />
                                </div>
                                <div className="form-floating mb-3" >
                                    <input value={this.state.first_name} onChange={this.handleFirsNameChange}
                                        placeholder="first_name" required type="text" name="first_name"
                                        id="first_name" />
                                </div>
                                <div className="form-floating mb-3" >
                                    <input value={this.state.last_name} onChange={this.handleLastNameChange}
                                        placeholder="last_name" required type="text" name="last_name"
                                        id="last_name" />
                                </div>

                                <div className="form-floating mb-3" >
                                    <input value={this.state.verify_password} onChange={this.handleVerify_PasswordChange}
                                        placeholder="Verify Password" required type="password" name="verify-password"
                                        id="verify-password" />
                                </div>

                                <br></br>
                                <Link to="/puppy-love/"> <button type="submit" name='loginbutton'
                                    className="btn btn-primary" form="login-form">Log In
                                </button></Link>
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
