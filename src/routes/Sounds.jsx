import DefaultLayout from "../layout/DefaultLayout"
import SoundsComponent from "../components/SoundsComponent/SoundsComponent"
import { 
    SBackButton, 
    SButton, 
    SContainer, 
    SCustomSpin, 
    SPanel, 
    SSoundLoopNameTitle, 
    SSpinnerContainer, 
    SSubmitSounds, 
    STitle 
} from "./styled"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getSoundLoopDataFromId } from "../utilities/functions"
import { ArrowLeftOutlined } from "@ant-design/icons"
import { notification } from "antd"

export function Sounds() {
    const [ audioBlobs, setAudioBlobs ] = useState([])
    const { userId, loopId } = useParams()
    const [ soundLoopData, setSoundLoopData ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true);
    const navigate = useNavigate();
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        const fetchSoundLoopData = async () => {
            const soundLoopData = await getSoundLoopDataFromId(userId, loopId);
            setSoundLoopData(soundLoopData)
            setIsLoading(false);
        }

        setTimeout(() => {
            fetchSoundLoopData();
        }, 1000);
    },[userId, loopId])

    console.log(audioBlobs);

    const deleteExistingSounds = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/user/${userId}/soundloop/${loopId}/sounds`, {
                method: "DELETE",
            });

            const data = await response.json();

            if (data.status === 200) {
                console.log(data.message);
            }

        } catch (err) {
            console.log(err);
        }
    }
    
    const handleAudioSubmit = async () => {
        if (!audioBlobs) return

        await deleteExistingSounds();
        
        audioBlobs.forEach(async ({blob}, index) => {
            const formData = new FormData()
            formData.append('blob', blob, `audio_${index}_${loopId}_${userId}.webm`);
            formData.append('user_id', userId);
            formData.append('loop_id', loopId);
            
            const requestOptions = {
                method: 'POST',
                body: formData
            }
    
            try {
                const response = await fetch('http://127.0.0.1:8000/user/soundloop/sounds', requestOptions)
    
                if (response.ok) {
                    console.log("Audios sent");
                }
                else {
                    api.error({
                        message: 'Error',
                        description: 'Error while sending audios',
                        showProgress: true,
                        pauseOnHover: false,
                        placement: 'bottomRight',
                        duration: 2
                    });
                }
            }
            catch (err) {
                console.log(err);
            }

        });

        localStorage.setItem('showToast', 'true');
        navigate(-1);
    }

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <DefaultLayout>
            {contextHolder}
            <SContainer>
                {isLoading ? (
                    <SSpinnerContainer>
                        <SCustomSpin size="large" />
                    </SSpinnerContainer>
                ) : (
                    <>
                        <SSoundLoopNameTitle>
                            <SBackButton onClick={handleBack}>
                                <ArrowLeftOutlined />
                            </SBackButton>
                            <STitle>
                                {soundLoopData[0].name}
                            </STitle>
                        </SSoundLoopNameTitle>
                        <SPanel>
                            <SoundsComponent setAudioBlobs={setAudioBlobs} />
                            <SSubmitSounds>
                                <SButton onClick={handleAudioSubmit}>Save sounds</SButton>
                            </SSubmitSounds>
                        </SPanel>
                    </>
                )}
            </SContainer>
        </DefaultLayout>
    )
}