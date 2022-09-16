import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import APIService from './APIService'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    let navigate = useNavigate()
    const [isLogin, setLogin] = useState(true)


    useEffect(() => {
        var user_token = token['mytoken']
        console.log('Login User token is', user_token)
        console.log('Data type', typeof (token['mytoken']))

        if (String(user_token) === 'undefined') {
            navigate('/login')
        } else {
            navigate('/articles')
        }

    }, [navigate, token])

    const loginBtn = () => {
        if (username.trim().length !== 0 && password.trim().length) {
            console.log('Username And Password Are Set')
            APIService.LoginUser({ username, password })
                .then(resp => setToken('mytoken', resp.token))
                .catch(error => console.log(error))
        } else {
            console.log('Username And Password Are Not Set')
            navigate('/')
        }
    }


    const RegisterBtn = () => {
        if (username.trim().length !== 0 && password.trim().length !== 0) {
            console.log('Username and password are set');
            APIService.RegisterUser({ username, password })
                .then(() => loginBtn())
                .catch(error => console(error))
        } else {
            navigate('/')
            console.log('Username and password are not set');

        }
    }

    return (
        <div className="App">
            <div
                className="container-fluid d-flex align-items-center"
                style={{
                    height: "100vh",
                    backgroundImage:
                        "url(https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    opacity: .9,
                }}
            >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-4">
                            {isLogin ? <h3>Please Login Here</h3> : <h3>Please Register Here</h3>}
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" value={username} className="form-control" placeholder="Enter Username" onChange={e => setUsername(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" value={password} className="form-control" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
                            </div>
                            <br />
                            <div>
                                {isLogin ?
                                    <div>
                                        <button onClick={loginBtn} className="btn btn-success">Login</button>
                                        <br>
                                        </br>
                                        <br>
                                        </br>
                                        <p>If You Don't Have Account, Please Register</p><button onClick={() => setLogin(false)} className="btn btn-success">Register</button></div>
                                    :
                                    <div>
                                        <button onClick={RegisterBtn} className="btn btn-success">Register</button>
                                        <p>If You Have Account, Please <button className="btn btn-success" onClick={() => setLogin(true)}>Login</button></p></div>
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
