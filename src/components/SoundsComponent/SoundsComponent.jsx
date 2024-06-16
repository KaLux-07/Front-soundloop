import { SButtonsWrapper } from "./styled";
import { KEYCODES } from '../../constants/keycodes';
import Buttons from "./Buttons/Buttons";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function SoundsComponent({ setAudioBlobs }) {
    const { userId, loopId } = useParams();
    const [ soundDataList, setSoundDataList ] = useState([]);
    const initialBlobsLoaded = useRef(false);

    useEffect(() => {
        let isMounted = true;

        const fetchSounds = async () => {
            const response = await fetch(`http://127.0.0.1:8000/user/${userId}/soundloop/${loopId}/sounds`)
            const data = await response.json();

            if (isMounted) {
                const soundsDataList = data.map((sound) => {
                    const blob = base64ToBlob(sound.sound_data, 'audio/webm');
                    const url = URL.createObjectURL(blob);
                    return { blob, url, id: uuidv4() };
                });

                setSoundDataList(soundsDataList);

                if (!initialBlobsLoaded.current) {
                    setAudioBlobs((prevBlobs) => [
                        ...prevBlobs,
                        ...soundsDataList.map(sound => ({ blob: sound.blob, id: sound.id }))
                    ]);
                    initialBlobsLoaded.current = true;
                }
            }
        }
        
        fetchSounds();

        return () => {
            isMounted = false;
        };
    }, [userId, loopId, setAudioBlobs])
    
    const base64ToBlob = (base64, mime) => {
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length);
    
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
    
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: mime });
      };

    return (
        <SButtonsWrapper>
            <Buttons 
                stopKeyCode={KEYCODES.E} 
                recordKeyCode={KEYCODES.D} 
                deleteKeyCode={KEYCODES.C} 
                setAudioBlobs={setAudioBlobs} 
                soundUrl={soundDataList[0]?.url}
                soundId={soundDataList[0]?.id}
            />

            <Buttons 
                stopKeyCode={KEYCODES.R} 
                recordKeyCode={KEYCODES.F} 
                deleteKeyCode={KEYCODES.V} 
                setAudioBlobs={setAudioBlobs} 
                soundUrl={soundDataList[1]?.url}
                soundId={soundDataList[1]?.id}
            />

            <Buttons 
                stopKeyCode={KEYCODES.T} 
                recordKeyCode={KEYCODES.G} 
                deleteKeyCode={KEYCODES.B} 
                setAudioBlobs={setAudioBlobs} 
                soundUrl={soundDataList[2]?.url}
                soundId={soundDataList[2]?.id}
            />

            <Buttons 
                stopKeyCode={KEYCODES.Y} 
                recordKeyCode={KEYCODES.H} 
                deleteKeyCode={KEYCODES.N} 
                setAudioBlobs={setAudioBlobs} 
                soundUrl={soundDataList[3]?.url}
                soundId={soundDataList[3]?.id}
            />

            <Buttons 
                stopKeyCode={KEYCODES.U} 
                recordKeyCode={KEYCODES.J} 
                deleteKeyCode={KEYCODES.M} 
                setAudioBlobs={setAudioBlobs} 
                soundUrl={soundDataList[4]?.url}
                soundId={soundDataList[4]?.id}
            />
        </SButtonsWrapper>
    )
}