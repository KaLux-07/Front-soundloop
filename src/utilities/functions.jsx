import { Link } from "react-router-dom";
import Cookies from "js-cookie";

// Change the options in the nav component depending on the page that you are.
export const changeTypeMenu = (typeMenu) => {
    let menu;
        switch(typeMenu) {
            case "home":
                menu = (
                    <>
                        <li><Link to={"/register"}>Sign up</Link></li>
                        <li><Link to={"/login"}>Sign In</Link></li>
                    </>
                );
                
            break;

            default:
                menu = (
                    <li>
                        {
                            typeMenu ? (<Link to={"/register"}>Sign up</Link>) : (<Link to={"/login"}>Sign In</Link>)
                        }
                    </li>
                );
            break
        }

    return menu;
}

export const checkRegisterUserData = (formData) => {
    const {name, surname, email, username, password, repeatedPassword} = formData;
    
    if (!name && !surname && !email && !username && !password) {
        return "Fields are required"
    }

    if (!name) {
        return "Name field is required"
    }

    if (!surname) {
        return "Surname field is required"
    }

    if (!email) {
        return "Email field is requierd"
    }

    if ((!email.includes("@") && !email.includes(".")) || (email.indexOf("@") > email.indexOf("."))) {
        return "Email must have the following format: example@example.com"
    }

    if (!username) {
        return "Username field is required"
    }

    if (!password) {
        return "Password field is required"
    }

    if (password.length < 8) {
        return "Passowrd must be at least 8 characters"
    }

    if (password !== repeatedPassword) {
        return "Passwords does not match"
    }

    return true

}

export const checkLoginUserData = ({username, password}) => {
    if (!username && !password) {
        return "Fields are required"
    }

    if (!username) {
        return "Username field is required"
    }

    if (!password) {
        return "Password field is required"
    }

    return true
}

export const checkIfUserIsRegistered = async (formData) => {
    let isRegistered = false
    const {username, password} = formData
    const users = await getUsers(username, password)
    users.forEach(data => {
        if (username === data.username && password === data.password_hash) {
            isRegistered = true
        }
    });

    return isRegistered
}

export const getUserDataFromToken = async () => {
    let token = Cookies.get('token')
    if (!token) return

    const requestOptions = {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
        }
    };

    try {
        const response = await fetch("http://127.0.0.1:8000/token/data", requestOptions)
        const data = await response.json()
        return data

    } catch (error) {
        console.error(error)
    }
}

export const deleteTemplate = async (id) => {
    const requestOptions = {
        method: "DELETE"
    }

    const response = await fetch(`http://127.0.0.1:8000/user/soundloop/${id}`, requestOptions)
    const deleteData = await response.json()

    return deleteData
}

export const deleteSoundFromTemplate = async (userId, loopId) => {
    const requestOptions = {
        method: "DELETE"
    }

    await fetch(`http://127.0.0.1:8000/user/${userId}/soundloop/${loopId}`, requestOptions)
}

export const getSoundLoopDataFromId = async (userId, loopId) => {
    const response = await fetch(`http://127.0.0.1:8000/user/${userId}/soundloop/${loopId}`)
    const soundLoopData = await response.json()

    return soundLoopData
}

export const updateSoundLoopName = async (userId, loopId, name) => {
    const requestOptions = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: loopId,
            name,
            user_id: userId,
        })
    };

    const response = await fetch(`http://127.0.0.1:8000/user/soundloop/`, requestOptions);
    const data = await response.json();
    return data
}

export const setCookie = (accessToken) => {
    // const expirationSeconds = 10;
    // const expirationDays = expirationSeconds / (24 * 60 * 60)

    Cookies.set('token', accessToken, {expires: 1})
}

export const checkTemplateNameLength = (name) => name.length < 17 ? true : false;



