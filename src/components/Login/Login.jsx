import { useState } from "react"
import { useAuth } from "../../auth/AuthProvider"
import { Navigate } from "react-router-dom"
import { checkLoginUserData, setCookie } from "../../utilities/functions"
import { SButton, SErrorMessage, SForm, STextField } from "./styled"
import TextField from '@mui/material/TextField';

export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const { handleAuthentication, isAuthenticated } = useAuth()

    const [errorMessage, setErrorMessage] = useState(false)

    function handleChange(e) {
        const {name, value} = e.target
    
        setFormData(prevState => (
            {...prevState, [name]: value}
        ))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const dataMessage = checkLoginUserData(formData)
        
        if (dataMessage === true) {
            const username = formData.username
            const password = formData.password

            const requestOptions = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    username,
                    password,
                }),
            }

            const response = await fetch("http://127.0.0.1:8000/token", requestOptions)
            const data = await response.json()
            const { access_token } = data

            if (access_token) {
                handleAuthentication()
                setCookie(access_token)
            }
            else {
                setErrorMessage("Login error")
                return
            }
        }
        else {
            setErrorMessage(dataMessage)
        }
        
    } 

    if (isAuthenticated) {
        return <Navigate to={"/dashboard"}/>
    }
    
    return (
        <SForm className="form" onSubmit={handleSubmit}>
            <h1>Login</h1>
            {errorMessage && 
                <SErrorMessage className="errorMessage">
                    {errorMessage}
                </SErrorMessage>
            }

            <STextField
                label="Username"
                variant="outlined"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                fullWidth
                margin="normal"
                color="secondary"
            />

            <STextField
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
                color="secondary"
            />

            <SButton className="my-button">Sign in</SButton>
        </SForm>
    )
}