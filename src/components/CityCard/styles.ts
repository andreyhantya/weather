import styled from 'styled-components';

interface ShadowedProps {
    readonly icon: string;
}

export const StyledHeader = styled.div`
    position: relative;
`;

export const CardWrapper = styled.div`
    color: #000;
    min-width: 150px;
    margin-right: 15px;
    background-color: #79a463;
    border: 1px solid black;
    border-radius: 5px;
    display: inline-block;
    padding: 10px;
    margin-top: 10px;
`;

export const CardHeader = styled.div`
    display: flex;
    height: 30px;
    justify-content: space-between;
    align-items: center;
`;

export const CardTitle = styled.h3`
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
`;

export const CardSubtitle = styled.h4`
    font-size: 13px;
    font-family: Arial, Helvetica, sans-serif;
    height: 3px;
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
