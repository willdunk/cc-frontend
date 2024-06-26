import * as yup from 'yup';

export const postNewUserSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    brokerLicenseNumber: yup.string().required('Broker license number is required'),
});
