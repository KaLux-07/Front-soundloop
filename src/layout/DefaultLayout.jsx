import { useAuth } from "../auth/AuthProvider";
// import CloseSessionButton from "../components/CloseSessionButton/CloseSessionButton";
import Cookies from "js-cookie";
import { SHeader, SLogo, SLogoContainer, SMainContent } from "./styled";
import logo from "../assets/logo.png";
import { STitle } from "./styled";
import { useEffect } from "react";
import UserDataDropdown from '../components/UserDataDropdown/UserDataDropdown';

export default function DefaultLayout({children}) {
    const { isAuthenticated, data } = useAuth()

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <>
            <SHeader>
                <SLogoContainer>
                    <SLogo src={logo} alt="SoundLoop logo"/>
                    <STitle>SoundLoop</STitle>
                </SLogoContainer>
                <nav>
                    <ul>
                        {isAuthenticated ? <UserDataDropdown userName={data.username}/> : menu}
                    </ul>
                </nav>
            </SHeader>
            <SMainContent>
                {children}
            </SMainContent>
        </>
    )
}