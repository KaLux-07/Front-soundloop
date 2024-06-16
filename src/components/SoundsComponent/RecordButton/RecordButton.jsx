import KeyStyle from "../../../assets/KeyStyle/KeyStyle";
import KeyActionButton from "../KeyActionButton/KeyActionButton";

export default function RecordButton({ recordKeyCode, actionFn, disabled, isRecording, recordingComplete }) {
    return (
        <KeyActionButton 
            label={<KeyStyle keyBoardkey={recordKeyCode} />} 
            keyCode={recordKeyCode} 
            actionFn={actionFn} 
            disabled={disabled || recordingComplete}
            isRecording={isRecording}
        />
    )
}
