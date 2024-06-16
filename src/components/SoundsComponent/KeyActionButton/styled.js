import styled from "styled-components";

export const SButton = styled.button`
    border-radius: 50%;
    padding: 4rem;
    background-color: ${(props) => {
        if (props.disabled) {
            return '#600909';
        }
        if (props.isRecording) {
            return '#ffcc00'; // Color para el estado de grabación
        }
        if (props.isPlaying) {
            return '#103913'; // Color para el estado de reproducción
        }
        return props.$changeColor ? '#103913' : 'black';
    }};
    border-width: 10px;
    border-color: ${(props) => {
        if (props.disabled) {
            return 'red';
        }
        return props.$changeColor ? 'green' : 'gray';
    }};
    &:disabled {
        cursor: not-allowed;
    }
`;