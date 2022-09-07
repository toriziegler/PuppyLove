import React, {useContext} from 'react';
import { Navigate, Link } from 'react-router-dom';
import AuthContext from './AuthContext'



const LoginForm = () => {
  let {loginUser} = useContext(AuthContext)
  return (
      <div>
          <form onSubmit={loginUser}>
              <input type="text" name="username" placeholder="Enter Username" />
              <input type="password" name="password" placeholder="Enter Password" />
              <input type="submit"/>
          </form>
      </div>
  )
}


// class LoginForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         username: "",
//         password: "",
//       };
  
//       // this.handleSubmit = this.handleSubmit.bind(this);
//       this.handleChangeUserName = this.handleChangeUserName.bind(this);
//       this.handleChangePassword = this.handleChangePassword.bind(this);
//     }


//     handleChangeUserName(event) {
//         const value = event.target.value;
//         this.setState({ username: value });
//       }

//     handleChangePassword(event) {
//         const value = event.target.value;
//         this.setState({ password: value });
//       }


//     // handleSubmit = async (e) => {
//     //     e.preventDefault()
//     //     const error = await this.props.login(this.state.username, this.state.password);
//     //     this.setState({ error: error })
//     //     this.setState({
//     //         username: '',
//     //         password: '',
//     //     });
//     // }

//     // validForm() {
//     //     return this.state.password.length >= 8 &&
//     //            this.state.username
//     // }
//     render(){

//         if (this.props.token) {
//             return <Navigate to="/profile" />;
//         }

//         return(
//             <div className="App">
//             <div
//               className="container-fluid d-flex align-items-center"
//               style={{
//                 height: "100vh",
//                 backgroundImage:
//                   "url(https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg)",
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//                 backgroundRepeat: "no-repeat"
//               }}
//             >
//             <div className="card mx-auto" style={{ width: "18rem" }}>
//                 <div className="card" id="wrap" >
//                     <div className="shadow p-4 mt-4" id="box" >
//                         <form onSubmit={this.handleSubmit} id="login-form" >
//                             <h1>Login!</h1>
//                             <hr/>
//                             <div className="form-floating mb-3">
//                                 <input type='text' id="Username" name='Username' placeholder='Username' 
//                                     required onChange={this.handleChangeUserName} />
//                             </div>
//                             <div className="form-floating mb-3" >
//                                 <input type={this.state.showPassword ? "text" : "password"} id="password" name='password' placeholder='●●●●●●●●' 
//                                     required onChange={this.handleChangePassword} />
//                             </div>
//                             <hr/>
//                             <div>
//                                 <button 
//                                     type="submit" name='loginbutton'
                                   
//                                     className="btn btn-primary" form="login-form">Log In
//                                 </button>
//                                 <Link to='/login/new'>Forgot Password?</Link> 
//                             </div>
//                                 <p>
//                                     Don't have an Account?     &nbsp;&nbsp;&nbsp;&nbsp;    <Link to='/login/new'>Create Account</Link> 
//                                 </p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             </div>
//             </div>
//         )
//     }
       
// }


export default LoginForm;
