import styled from "styled-components";

export const SButton = styled.button`
    display: flex;
    background-color: #764ba2;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    font-family: 'Comic Sans MS', cursive;
    text-align: center;

    &:hover {
        background-color: #667eea;
    }
`;