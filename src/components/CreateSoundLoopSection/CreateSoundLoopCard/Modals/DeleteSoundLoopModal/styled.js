import styled from 'styled-components';
import { Modal, Button } from 'antd';

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
    &:hover {
        background-color: #667eea;
    }
`;

export const SStyledContent = styled.div`
    color: white;
    font-family: 'Comic Sans MS', cursive;
`;

export const STitleContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const SStyledModalTitle = styled.div`
    color: white;
    font-family: 'Comic Sans MS', cursive;
    font-style: italic;
`;