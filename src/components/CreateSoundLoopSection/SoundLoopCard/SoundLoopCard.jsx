import { useNavigate } from "react-router-dom";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { blueGrey } from "@mui/material/colors";

import { 
    SSoundLoopButton, 
    SDeleteTemplateButton, 
    SSoundLoopCard, 
    SEditTemplateButton
} from "./styled";

export default function SoundLoopsCard({ name, deleteSoundLoop, soundLoopId, userId, editTemplateButton, setTemplateName, setTemplateId }) {
    const navigate = useNavigate()

    function goToSoundsPage() {
        navigate(`/dashboard/${userId}/template/${soundLoopId}/sounds`)
    }

    function handleDeleteTempleteButton(e) {
        e.stopPropagation();
        deleteSoundLoop();
    }

    function handleEditTempleteButton(e) {
        e.stopPropagation();
        setTemplateName(name);
        setTemplateId(soundLoopId);
        editTemplateButton();
    }

    return (
        <SSoundLoopCard>
            <SSoundLoopButton onClick={() => goToSoundsPage()}>
                <div>{name}</div>
                    <SDeleteTemplateButton onClick={handleDeleteTempleteButton}>
                        <DeleteForeverIcon sx={{ color: blueGrey[500] }}/>
                    </SDeleteTemplateButton>
                    <SEditTemplateButton onClick={handleEditTempleteButton}>
                        <BorderColorIcon sx={{ color: blueGrey[500], fontSize: 22 }}/>
                    </SEditTemplateButton>
            </SSoundLoopButton>
        </SSoundLoopCard>
    )
}