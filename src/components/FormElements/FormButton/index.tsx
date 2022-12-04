import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { IButtonProps } from './types';

const FormButton = ({
    variant = 'contained',
    spacing = 2,
    direction = 'row',
    color,
    value,
    handlerClick,
    type,
}: IButtonProps) => {
    return (
        <Stack spacing={spacing} direction={direction}>
            <Button type={type} variant={variant} color={color} onClick={handlerClick}>
                {value}
            </Button>
        </Stack>
    );
};

export default FormButton;
