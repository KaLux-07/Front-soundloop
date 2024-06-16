import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext()

export function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [ data, setData ] = useState(false)

    const checkAuthentication =  async () => {
        let token = Cookies.get('token')
        let data = false
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
            data = await response.json()

            if (!response.ok) {
                setIsAuthenticated(false)
                return
            }

            setIsAuthenticated(true)
    
            setData(data)

        } catch (error) {
            console.error(error)
        }

    }

    const handleAuthentication = () =>  {
        setIsAuthenticated(!isAuthenticated)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, checkAuthentication, handleAuthentication, data, setData}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
