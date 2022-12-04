export interface IFormTextFieldProps {
    placeholder: string;
    onChange: (e: React.ChangeEvent<any>) => void;
    handleBlur: (e: React.FocusEvent<any>) => void;
    id: string;
    errorData?: any;
    name: string;
    variant?: 'outlined' | 'filled' | 'standard';
    width?: string;
    margin?: number;
    autoComplete?: 'on' | 'off';
}
