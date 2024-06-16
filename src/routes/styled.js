import { Spin } from "antd";
import styled from "styled-components";

export const SSubmitSounds = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const SSoundLoopCreationTitle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    color: white;
`;

export const STitle = styled.h1`
    color: white;
    font-size: 48px;
    margin-bottom: 20px;
    font-family: 'Comic Sans MS', cursive;
    font-style: italic;
    text-align: center;
    flex-grow: 1;
`;

export const SButton = styled.button`
    background-color: #764ba2;
    color: white;
    border: none;
    padding: 10px 20px;
    font-family: 'Comic Sans MS', cursive;
    font-weight: bold;
    font-size: 15px;
    border-radius: 5px;
    &:hover {
        background-color: #667eea;
    }
`;

export const SContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
    margin-top: 20px;
    box-sizing: border-box;
`;

export const SPanel = styled.div`
    width: 90%;
    max-width: 1200px;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    margin-top: 20px;
`;

export const SSoundLoopNameTitle = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    color: white;
    width: 100%;
    position: relative;
`;

export const SSpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;

export const SCustomSpin = styled(Spin)`
    .ant-spin-dot {
        font-size: 40px;

        .ant-spin-dot-item {
            background-color: #667eea;
        }
    }
`;

export const SBackButton = styled.button`
    background-color: #764ba2;
    color: white;
    border: none;
    padding: 10px 20px;
    font-family: 'Comic Sans MS', cursive;
    border-radius: 5px;
    &:hover {
        background-color: #667eea;
    }
    left: 0;
    top: 10px;
    position: absolute;
    transform: translateY(-50%);
`;