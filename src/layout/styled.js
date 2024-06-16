import styled from "styled-components";

export const SHeader = styled.header`
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    nav ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    nav ul li {
        margin: 0 10px;
    }
`;

export const SLogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
`;

export const SLogo = styled.img`
    width: 50px;
    margin-right: 10px;
`;

export const STitle = styled.h1`
    color: white;
    font-size: 25px;
    font-family: 'Comic Sans MS', cursive;
    font-style: italic;
`;

export const SMainContent = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding-top: 100px; /* Ajustar para evitar superposición con el header fijo */
    box-sizing: border-box;
`;