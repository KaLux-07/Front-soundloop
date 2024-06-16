import styled from "styled-components";

export const SSoundLoopButton = styled.button`
    height: 150px;
    width: 200px;
    border: 1px solid white;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    transition: background-color 0.3s ease, color 0.3s ease;

    & div {
        font-size: 20px;
        font-weight: bold;
    }

    & button {
        position: absolute;
        top: 0;
        right: 0;
    }

`;

export const SSoundLoopCard = styled(SSoundLoopButton)`
    border: none;
    & :hover {
        background-color: rgb(152, 144, 209);

        & div, button, svg {
            background: none;
        }
    }
`;

export const SDeleteTemplateButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    &:focus {
        outline: none;
    }

`;

export const SEditTemplateButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 162px;
    margin-top: 1px;

    &:focus {
        outline: none;
    }
`;