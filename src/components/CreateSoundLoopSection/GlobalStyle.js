import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    .ant-modal-confirm {
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
            font-style: italic;
        }

        .ant-modal-footer {
            border-top: none;
            background-color: transparent;
        }

        .ant-btn-primary {
            background-color: #764ba2;
            color: white;
            border: none;

            &:hover {
                background-color: #667eea;
            }
        }

        .ant-btn-default {
            background-color: transparent;
            color: white;
            border: 1px solid white;

            &:hover {
                background-color: rgba(255, 255, 255, 0.1);
            }
        }
    }
`;
