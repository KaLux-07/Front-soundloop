import { useEffect, useState } from "react";
import { SButton } from "./styled";

export default function KeyActionButton({ keyCode, label, actionFn, isRecording, isPlaying, disabled }) {
    const [change, setChange] = useState(false);

    const changeColor = () => {
        setChange((prevColor) => !prevColor)
    }

    useEffect(() => {
        if (isPlaying !== undefined) {
            setChange(isPlaying)
        }
    }, [isPlaying])

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === keyCode && !disabled) {
                actionFn();
                changeColor();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [actionFn, disabled, keyCode]);

    useEffect(() => {
        if (isRecording) {
            setChange(true);
        } else if (!isPlaying) {
            setChange(false);
        }
    }, [isRecording, isPlaying]);

    return (
        <SButton 
            $changeColor={change} 
            onClick={!disabled ? () => { actionFn(); changeColor(); } : null}
            disabled={disabled}
            isRecording={isRecording}
            isPlaying={isPlaying}
        >
            {label}
        </SButton>
    )
}