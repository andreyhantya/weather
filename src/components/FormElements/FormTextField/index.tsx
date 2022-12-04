import * as React from 'react';
import { StyledInput, InputWrapper } from './styles';
import { IFormTextFieldProps } from './types';

const FormTextField = ({
    variant = 'outlined',
    width = '200px',
    margin = 2,
    placeholder,
    autoComplete = 'off',
    onChange,
    name,
    id,
    handleBlur,
    errorData,
}: IFormTextFieldProps) => {
    return (
        <InputWrapper>
            <StyledInput
                id={id}
                error={!!errorData}
                onChange={onChange}
                label={errorData ? errorData : placeholder}
                name={name}
                variant={variant}
                onBlur={handleBlur}
            />
        </InputWrapper>
    );
};

export default React.memo(FormTextField);
