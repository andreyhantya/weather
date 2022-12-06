import styled from '@emotion/styled';
import Autocomplete from 'react-google-autocomplete';

export const StyledForm = styled.form`
    max-width: 300px;
    margin: 20px auto;
    position: relative;
`;

export const MainWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
`;

export const ErrorMessage = styled.div`
    width: 100%;
    text-align: center;
    color: red;
    position: absolute;
    top: -20px;
    font-family: 'arial', sans-serif;
    font-size: 14px;
`;

export const TextField = styled(Autocomplete)`
    height: 40px;
    padding-left: 10px;
    border-radius: 5px;
    border: 2px solid #5e5e81;
    outline: none;
    font-size: 15px;
    &:focus {
        border-color: #3131ba;
    }
`;
