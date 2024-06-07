import * as yup from 'yup';

export const postLoginSchema = yup.object().shape({
    accessToken: yup.string().required('Access token is required'),
    refreshToken: yup.string().required('Refresh token is required'),
});