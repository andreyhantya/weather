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
        width: 12px; /* ширина всей полосы прокрутки */
    }

    &::-webkit-scrollbar-track {
        background: #c1c1c1; /* цвет зоны отслеживания */
    }

    &::-webkit-scrollbar-thumb {
        background-color: gray; /* цвет бегунка */
        border-radius: 20px; /* округлось бегунка */
    }
`;
