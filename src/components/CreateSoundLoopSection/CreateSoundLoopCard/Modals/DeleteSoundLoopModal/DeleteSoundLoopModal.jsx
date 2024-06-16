import { ExclamationCircleFilled } from "@ant-design/icons";
import { SStyledButton, SStyledContent, SStyledFooter, SStyledModal, SStyledModalTitle, STitleContainer } from "./styled";
import { useEffect } from "react";

export default function DeleteSoundLoopModal({ 
    modal, 
    setModal, 
    handleDelete 
}) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <SStyledModal
            title={
                <STitleContainer>
                    <ExclamationCircleFilled style={{ color: 'yellow', marginRight: '10px' }} />
                    <SStyledModalTitle>Delete Confirmation</SStyledModalTitle>
                </STitleContainer>
            }
            centered
            open={modal}
            closable={false}
            footer={() => (
                <SStyledFooter>
                    <SStyledButton 
                        onClick={() => {
                            setModal(false);
                        }}
                    >
                        No
                    </SStyledButton>
                    <SStyledButton 
                        onClick={handleDelete} 
                        type="primary"
                    >
                        Yes
                    </SStyledButton>
                </SStyledFooter>
            )}
        >
            <SStyledContent>
                Do you want to delete the SoundLoop?
            </SStyledContent>
        </SStyledModal>
    );
}