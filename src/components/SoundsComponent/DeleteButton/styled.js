import styled from "styled-components";

export const SDeleteButton = styled.button`
    background-color: #ff4d4f;
    color: white;
    border: none;
    padding: 10px 20px;
    font-family: 'Comic Sans MS', cursive;
    border-radius: 5px;
    display: flex; /* Nuevo: Flexbox para centrar el contenido */
    align-items: center; /* Nuevo: Centrar verticalmente */
    justify-content: center; /* Nuevo: Centrar horizontalmente */
    text-align: center; /* Asegurarnos de que el texto esté centrado */
    &:hover {
        background-color: #ff7875;
    }
    &:disabled {
        background-color: #ffa39e;
        cursor: not-allowed;
    }
`;