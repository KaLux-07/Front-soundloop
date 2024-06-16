import { useEffect, useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "../auth/AuthProvider";
import CreateSoundLoopSection from "../components/CreateSoundLoopSection/CreateSoundLoopSection";
import { SSoundLoopCreationTitle, STitle, SContainer, SPanel, SSpinnerContainer, SCustomSpin } from "./styled";

export default function Dashboard() {
    const { checkAuthentication } = useAuth();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const authenticate = async () => {
            await checkAuthentication();
            setIsLoading(false);
        };

        setTimeout(() => {
            authenticate();
        }, 1000);
    }, [])

    return (
        <DefaultLayout>
            {isLoading ? (
                <SSpinnerContainer>
                    <SCustomSpin size="large" />
                </SSpinnerContainer>
            ) : (
                <SContainer>
                    <SSoundLoopCreationTitle>
                        <STitle>SoundLoop creation</STitle>
                    </SSoundLoopCreationTitle>
                    <SPanel>
                        <CreateSoundLoopSection />
                    </SPanel>
                </SContainer>
            )}
        </DefaultLayout>

    )
}