import styled from "styled-components";

export const SCreateSoundLoopButton = styled.button`
    height: 150px;
    width: 200px;
    border: 2px dashed white;
    border-radius: 10px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease, color 0.3s ease;
    margin: 0 auto;

    & div {
        font-size: 20px;
        font-weight: bold;
    }

    &:hover {
        background-color: rgb(152, 144, 209);
        color: white;
    }
`;

export const SCreateSoundLoopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;

`;

export const SSoundLoopsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* Reducimos el gap */
    justify-content: center; /* Centramos los items */
    padding: 10px; /* Reducimos el padding */
`;