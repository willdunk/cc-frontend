import * as yup from 'yup';

export const getUserSchema = yup.object().shape({
    _id: yup.string().required('_id is required'),
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    brokerLicenseNumber: yup.string().required('Broker license number is required'),
});
