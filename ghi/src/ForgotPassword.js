import React from 'react';


class ForgotPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            oldpassword: '',
            password: '',
            verify_password: '',
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleOldPasswordChange = this.handleOldPasswordChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleVerify_PasswordChange = this.handleVerify_PasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.showPassword;
        delete data.verify_password;

        const url = 'http://localhost:8100/api/create_users/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            this.setState({
                email: '',
                oldpassword: '',
                password: '',
                verify_password: '',
            });
        }
    }

    handleEmailChange(event) {
        const value = event.target.value;
        this.setState({ email: value });
    }
    handleOldPasswordChange(event) {
        const value = event.target.value;
        this.setState({ oldpassword: value });
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
        return (
            <div className="App">
                <div
                    className="container-fluid d-flex align-items-center"
                    style={{
                        height: "100vh",
                        backgroundImage:
                            "url(https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="card mx-auto" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h1>Reset your password</h1>
                            <hr />
                            <form onSubmit={this.handleSubmit} id="create-owner-form">
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleEmailChange} value={this.state.email}
                                        placeholder="Email" required type="email" name="email"
                                        id="email" />
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={this.handleOldPasswordChange} value={this.state.oldpassword}
                                        placeholder="Old Password" required type="password" name="password"
                                        id="password" />
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

                                <br></br>
                                <button type="submit" name='newpassword'
                                    className="btn btn-success" form="newpassword-form">Confirm new password
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ForgotPassword;

