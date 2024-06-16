import KeyStyle from '../../../assets/KeyStyle/KeyStyle'
import KeyActionButton from '../KeyActionButton/KeyActionButton'

export default function StopButton({ stopKeyCode, actionFn, isPlaying, hasSound}) {
    return (
        <KeyActionButton 
            label={<KeyStyle keyBoardkey={stopKeyCode}/>} 
            keyCode={stopKeyCode} 
            actionFn={actionFn} 
            isPlaying={isPlaying}
            disabled={!hasSound}
        />
    )
}