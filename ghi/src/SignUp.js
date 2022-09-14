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
            hasSignedUp: false,
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
        delete data.hasSignedUp;

        const url = 'http://localhost:8100/api/register';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            let successTag = document.getElementById('success-message');
            let formTag = document.getElementById('create-dog-form');
            successTag.classList.remove('d-none');
            formTag.classList.add('d-none');
            this.setState({
                email: '',
                first_name: '',
                last_name: '',
                password: '',
                verify_password: '',
                hasSignedUp: true,
            });
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
        let messageClasses = 'alert alert-success d-none mb-0';
        let formClasses = '';
        if (this.state.hasSignedUp) {
            messageClasses = 'alert alert-success mb-0';
            formClasses = 'd-none';
        }
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
                                <form className={formClasses} onSubmit={this.handleSubmit} id="create-dog-form">
                                    <div className="form-floating mb-3">
                                        <input onChange={this.handleEmailChange} value={this.state.email}
                                            placeholder="Email" required type="email" name="email"
                                            id="email" />
                                    </div>
                                    <div className="form-floating mb-3" >
                                        <input value={this.state.password} onChange={this.handlePasswordChange}
                                            placeholder="Password" required type="password" name="password"
                                            id="signuppassword" />
                                    </div>
                                    <div className="form-floating mb-3" >
                                        <input value={this.state.verify_password} onChange={this.handleVerify_PasswordChange}
                                            placeholder="Verify Password" required type="password" name="verify-password"
                                            id="verify-password" />
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
                                    <br></br>
                                    <button className="btn btn-secondary" type="submit">Submit</button>
                                    <div className='tolgoin'>
                                        Already Have an Account?  <Link to='/login'>Sign In</Link>
                                    </div>
                                </form>
                                <div className={messageClasses} id="success-message">
                                    Congratulations!
                                    <br></br>
                                    You have an account.
                                    <br></br>
                                    Please log in here:
                                    <br></br>
                                    <Link to="/login/" className="mainlink">
                                        <button type="button" className="btn btn-secondary">Login</button>
                                    </Link>
                                    <br></br>
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

