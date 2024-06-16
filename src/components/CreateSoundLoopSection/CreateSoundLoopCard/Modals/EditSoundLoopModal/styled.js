import { Modal, Button } from "antd";
import styled from "styled-components";

export const SStyledModal = styled(Modal)`
    .ant-modal-content {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        backdrop-filter: blur(10px);
        color: white;
    }

    .ant-modal-header {
        background-color: transparent;
        border-bottom: none;
    }

    .ant-modal-title {
        color: white;
        font-family: 'Comic Sans MS', cursive;
    }

    .ant-modal-footer {
        border-top: none;
        background-color: transparent;
    }

    .ant-modal-close {
        display: none;
    }
`;

export const SStyledFooter = styled.div`
    display: flex;
    justify-content: end;
    gap: 10px;
`;

export const SStyledButton = styled(Button)`
    background-color: #764ba2;
    color: white;
    border: none;
    font-family: 'Comic Sans MS', cursive;
    &:hover {
        background-color: #667eea;
    }
`;

export const SStyledInput = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-top: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    font-family: 'Comic Sans MS', cursive;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;

    &::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }

    &:focus {
        outline: none;
        border-color: #667eea;
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

export const SStyledError = styled.p`
    color: #ff4d4f;
    margin-top: 5px;
    font-family: 'Comic Sans MS', cursive;
    background-color: rgba(255, 77, 79, 0.1);
    padding: 5px 10px;
    border-radius: 5px;
`;