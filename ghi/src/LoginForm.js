import React from 'react';
import { useContext } from 'react';
import AuthContext from './AuthContext'
import { Link } from 'react-router-dom';


// const LoginForm = () => {
//     let { loginUser } = useContext(AuthContext)
//     return (
//         <div>
//             <form onSubmit={loginUser}>
//                 <input type="text" name="username" placeholder="Enter Username" />
//                 <input type="password" name="password" placeholder="Enter Password" />
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }


// class LoginForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: "",
//             password: "",
//         };

//         // this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChangeUserName = this.handleChangeUserName.bind(this);
//         this.handleChangePassword = this.handleChangePassword.bind(this);
//     }


//     handleChangeUserName(event) {
//         const value = event.target.value;
//         this.setState({ username: value });
//     }

//     handleChangePassword(event) {
//         const value = event.target.value;
//         this.setState({ password: value });
//     }


// handleSubmit = async (e) => {
//     e.preventDefault()
//     const error = await this.props.login(this.state.username, this.state.password);
//     this.setState({ error: error })
//     this.setState({
//         username: '',
//         password: '',
//     });
// }

// validForm() {
//     return this.state.password.length >= 8 &&
//            this.state.username
// }
const LoginForm = () => {
    let { loginUser } = useContext(AuthContext)
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
                    backgroundRepeat: "no-repeat",
                    opacity: .9,
                }}
            >
                <div className="card mx-auto" style={{ width: "18rem" }}>
                    <div className="card" id="wrap" >
                        <div className="shadow p-4 mt-4" id="box" >
                            <form onSubmit={loginUser} id="login-form" >
                                <h1>Login!</h1>
                                <hr />
                                <div className="form-floating mb-3">
                                    <input type='text' id="email" name='email' placeholder='email' />

                                </div>
                                <div className="form-floating mb-3" >
                                    <input type="password" id="password" name='password' placeholder='●●●●●●●●' />

                                </div>
                                <hr />

                                <button
                                    type="submit" name='loginbutton'

                                    className="btn btn-primary" form="login-form">Log In
                                </button>
                                <Link to="/forgotpassword">Forgot Password?</Link>

                                <p>
                                    Don't have an Account?     &nbsp;&nbsp;&nbsp;&nbsp;    <Link to='/signup'>Create Account</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
export default LoginForm;