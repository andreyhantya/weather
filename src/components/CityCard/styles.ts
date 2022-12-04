import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardWrapper = styled.div`
    min-width: 150px;
    margin-right: 15px;
    padding: 10px;
    margin-top: 10px;
    display: inline-block;
    background-color: #79a463;
    border: 1px solid black;
    border-radius: 5px;
    color: #000;
    font-family: 'Arial', sans-serif;
`;

export const CardHeader = styled.div`
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CardTitle = styled.p`
    font-size: 25px;
    max-width: 100px;
    white-space: nowrap; /* Запрещаем перенос строк */
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const CardSubtitle = styled.h4`
    height: 3px;
    font-size: 13px;
`;

export const CardIcon = styled.img`
    width: 50px;
    height: 50px;
`;

export const CardContent = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CardButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MoreInfo = styled(Link)`
    margin: 0 auto;
    padding: 3px;
    background-color: #1d7e16;
    border-radius: 5px;
    color: #d4d4d4;
    text-decoration: none;
    text-align: center;
    display: block;
    font-weight: bold;
    &:hover {
        background-color: #11660b;
    }
`;
