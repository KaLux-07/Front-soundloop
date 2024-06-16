import { useEffect, useState } from "react";
import { SDeleteButton } from "./styled";
import KeyStyle from "../../../assets/KeyStyle/KeyStyle";

export default function DeleteButton({ deleteKeyCode, actionFn, disabled }) {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === deleteKeyCode && !disabled) {
                actionFn();
                setIsActive(true);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [deleteKeyCode, disabled, actionFn]);

    return (
        <SDeleteButton onClick={!disabled ? actionFn : null} disabled={disabled}>
            <KeyStyle keyBoardkey={deleteKeyCode}/>
        </SDeleteButton>
    );
}
