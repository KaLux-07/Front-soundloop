import { useEffect } from 'react';
import { SStyledButton, SStyledError, SStyledFooter, SStyledInput, SStyledModal } from './styled';

export default function EditSoundLoopModal({ 
    modal, 
    setModal, 
    setIsTemplateNameEmpty, 
    setIsTemplateNameLengthOk,
    handleSoundLoopNameEdit, 
    handleNameChange, 
    isTemplateNameEmpty,
    isTemplateNameLengthOk, 
    previousName,
    setTemplateName,
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
            title="Rename template name"
            centered
            open={modal}
            closable={false}
            footer={() => (
                <SStyledFooter>
                    <SStyledButton 
                        onClick={() => {
                            setModal(false)
                            setIsTemplateNameEmpty(false)
                            setIsTemplateNameLengthOk(true)
                            setTemplateName(false)
                        }}
                    >
                        Close
                    </SStyledButton>
                    <SStyledButton 
                        onClick={handleSoundLoopNameEdit} 
                        type="primary"
                    >
                        Edit
                    </SStyledButton>
                </SStyledFooter>
                )}
        >
            <form>
                <SStyledInput id="inpName" type="text" onChange={handleNameChange} value={previousName}/>
                {isTemplateNameEmpty && (<SStyledError>This field is required</SStyledError>)}
                {!isTemplateNameLengthOk && (<SStyledError>Name must be less than 17 characters</SStyledError>)}
            </form>
        </SStyledModal>
    )
}