import { useEffect, useRef, useState } from 'react';
import Login from './components/Login/Login';
import { SButton, SButtonGroup, SContainer, SLeftPanel, SLogo, SPanel, SRightPanel, STitle } from './styled';
import Register from './components/Register/Register';
import logo from './assets/logo.png';
import { useAuth } from './auth/AuthProvider';

function App() {
    const [activeComponent, setActiveComponent] = useState('login');
    const panelRef = useRef(null);

    const { checkAuthentication, isAuthenticated } = useAuth();

    useEffect(() => {
        const checkToken = async () => {
            await checkAuthentication()
        }

        checkToken()
    }, [])

    useEffect(() => {
        if (panelRef.current) {
            const panel = panelRef.current;
            const activeForm = panel.querySelector('form');
            if (activeForm) {
                panel.style.height = `${activeForm.offsetHeight + 60}px`;  // Ajustar la altura del panel
            }
        }
    }, [activeComponent]);

    return (
        <SContainer>
            <SPanel ref={panelRef}>
                <SLeftPanel>
                    <STitle>SoundLoop</STitle>
                    <SLogo src={logo} alt="SoundLoop Logo" />
                    <SButtonGroup>
                        <SButton onClick={() => setActiveComponent('login')}>Login</SButton>
                        <SButton onClick={() => setActiveComponent('register')}>Register</SButton>
                    </SButtonGroup>
                </SLeftPanel>
                <SRightPanel>
                    {activeComponent === 'login' ? <Login /> : <Register setActiveComponent={setActiveComponent}/>}
                </SRightPanel>
            </SPanel>
        </SContainer>
    );
}

export default App
