import { useState } from "react"
import { Navigate } from "react-router-dom"
import { checkRegisterUserData } from "../../utilities/functions"
import { SButton, SErrorMessage, SForm, SInput, STextField } from "./styled"

export default function Register({ setActiveComponent }) {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        username: '',
        password: '',
        repeatedPassword: '',
    })

    const [response, setResponse] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    

    function handleChange(e) {
        const {name, value} = e.target

        setFormData(prevState => (
            {...prevState, [name]: value}
        ))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        const dataMessage = checkRegisterUserData(formData);

        if (dataMessage === true) {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    surname: formData.surname,
                    email: formData.email,
                    username: formData.username,
                    password_hash: formData.password
                }),
            }
            const response = await fetch("http://127.0.0.1:8000/users", requestOptions);
            const data = await response.json();
            setResponse(data)
            setErrorMessage(false)
            return
        }

        setErrorMessage(dataMessage)
    }

    if (response.status === 200) {
        setActiveComponent('login');
    }

    return (
            <SForm className="form" onSubmit={handleSubmit}>
                <h1>Register</h1>
                {
                    errorMessage && 
                    <SErrorMessage className="errorMessage">
                        {errorMessage}
                    </SErrorMessage>
                }

                <STextField
                    label="Name"
                    variant="outlined"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    color="secondary"
                />

                <STextField
                    label="Surname"
                    variant="outlined"
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    color="secondary"
                />

                <STextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    color="secondary"
                />

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

                <STextField
                    label="Repeat Password"
                    variant="outlined"
                    type="password"
                    name="repeatedPassword"
                    value={formData.repeatedPassword}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    color="secondary"
                />

                <SButton className="my-button" type="submit">Sign up</SButton>
            </SForm>
    )
}