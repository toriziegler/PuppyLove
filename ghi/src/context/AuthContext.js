import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {

    let [authTokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)

    let loginUser = async (e)=> {
        e.preventDefault()
        let response = 'http://localhost:8100/api/token/'
        const fetchConfig = {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        }
        let data = await fetch(response, fetchConfig)
        console.log('data:', data)
        console.log('response:', response)
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
        }else{
            alert('Something went wrong!!!')
        }
    }

    let contextData = {
        user:user,
        loginUser:loginUser
    }
    return(
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}