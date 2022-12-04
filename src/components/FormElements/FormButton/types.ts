export interface IButtonProps {
    value: string;
    handlerClick?: () => void;
    variant?: 'text' | 'contained' | 'outlined';
    spacing?: number;
    direction?: 'row' | 'column';
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    type: 'button' | 'submit';
}
