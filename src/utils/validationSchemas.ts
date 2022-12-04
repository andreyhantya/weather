import * as yup from 'yup';
import { ONLY_NUMBERS_REG_EXP } from './constants/regex';

export const createWalletSchema = yup.object().shape({
    cityName: yup.string().required('Введите название кошелька'),
});
