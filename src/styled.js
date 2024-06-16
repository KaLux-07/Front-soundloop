import styled from "styled-components";

export const SContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
    font-family: 'Comic Sans MS', cursive;
    overflow: hidden;
`

export const SPanel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90%;
    max-width: 1200px;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 20px;
    border-radius: 10px;
    transition: height 0.3s ease;
    overflow: hidden;
    font-family: 'Comic Sans MS', cursive;
`;

export const SLeftPanel = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-family: 'Comic Sans MS', cursive;
    margin-bottom: 40px;
    margin-left: 20px;
`;

export const SRightPanel = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-family: 'Comic Sans MS', cursive;
`;

export const STitle = styled.h1`
    color: white;
    font-size: 48px;
    margin-bottom: 0;
    font-family: 'Comic Sans MS', cursive;
    font-style: italic;
`;

export const SButtonGroup = styled.div`
    display: flex;
    gap: 20px;
    font-family: 'Comic Sans MS', cursive;
`;

export const SButton = styled.button`
    background-color: #764ba2;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    font-family: 'Comic Sans MS', cursive;

    &:hover {
        background-color: #667eea;
    }
`;

export const SLogo = styled.img`
    width: 200px;
    margin-bottom: 15px;
`;