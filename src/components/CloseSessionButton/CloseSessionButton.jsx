import LogoutIcon from '@mui/icons-material/Logout';
import { SButton } from "./styled";

export default function CloseSessionButton({closeSession}) {
    return (
        <li className="close-session">
            <SButton onClick={closeSession}>
                <LogoutIcon />
                Logout
            </SButton>
        </li>
    )
}