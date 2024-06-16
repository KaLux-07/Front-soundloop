import RecordButton from "../RecordButton/RecordButton";
import StopButton from "../StopButton/StopButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { SButtonWrapper } from "./styled";
import useAudioRecorder from "./hooks/useAudioRecorder/useAudioRecorder";

export default function Buttons ({ 
    recordKeyCode, 
    stopKeyCode, 
    deleteKeyCode, 
    setAudioBlobs, 
    soundUrl,
    soundId 
}) {
    const {
        startRecording,
        stopRecording,
        togglePlayback,
        deleteRecording,
        isRecording,
        isPlaying,
        hasSound,
        recordingComplete,
    } = useAudioRecorder(soundUrl, setAudioBlobs, soundId);

    return (
        <SButtonWrapper>
            <StopButton 
                stopKeyCode={stopKeyCode} 
                actionFn={togglePlayback} 
                isPlaying={isPlaying}
                hasSound={hasSound}
            />

            <RecordButton 
                recordKeyCode={recordKeyCode} 
                actionFn={isRecording ? stopRecording : startRecording} 
                disabled={!!soundUrl && recordingComplete} 
                isRecording={isRecording}
                recordingComplete={recordingComplete}
            />

            <DeleteButton
                deleteKeyCode={deleteKeyCode}
                actionFn={deleteRecording}
                disabled={!hasSound}
            />
        </SButtonWrapper>
    )
}