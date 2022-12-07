import styled from 'styled-components';

export const StyledCardList = styled.div`
    max-height: 60vh;
    padding: 25px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    background-color: #d4d4d4;
    border-radius: 5px;
    margin: 0 auto;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        background: #c1c1c1;
    }

    &::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 20px;
    }
`;

export const NoCardMessage = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: #c78181;
    border-radius: 5px;
    font-size: 25px;
    text-align: center;
    color: #1b1a1d;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
`;
