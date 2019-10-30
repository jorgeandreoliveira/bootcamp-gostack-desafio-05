import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    width: 1024px;
    height: 64px;
    background: #4A90E2;
    border-radius: 4px;
    box-sizing: border-box;
`
export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: #FFFFFF;
    display: flex;
    padding-left: 50px;
    flex-direction: row;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;

    perfil {
        font-size: 15px;
        padding-left: 700px;
    }

    svg {
        padding-left: 10px;
    }
`;