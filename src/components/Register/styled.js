import styled from "styled-components";
import TextField from '@mui/material/TextField';

export const SForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const SInput = styled.input`
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const SButton = styled.button`
    padding: 10px 20px;
    background-color: #764ba2;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    font-family: 'Comic Sans MS', cursive;

    &:hover {
        background-color: #667eea;
    }
`;

export const SErrorMessage = styled.div`
    color: red;
    margin-bottom: 10px;
    border-radius: 5px;
`;

export const STextField = styled(TextField)`
    & .MuiInputBase-input {
        font-family: 'Comic Sans MS', cursive;
    }
    & .MuiInputLabel-root {
        font-family: 'Comic Sans MS', cursive;
    }
`;