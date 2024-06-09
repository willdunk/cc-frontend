import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { postNewUser } from '../../mutations/postNewUser';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Or from '../Or';

const validationSchema = yup.object({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().required('Password is required'),
    brokerLicenseNumber: yup.string().required('Broker License Number is required'),
});

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    brokerLicenseNumber: '',
};

const NewUserForm: React.FC = () => {
    const navigate = useNavigate();

    const handleGoToLogin = () => {
        navigate('/login');
    };

    const { mutateAsync } = useMutation({ mutationFn: postNewUser });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, formikHelpers) => {
            formikHelpers.setSubmitting(true);
            await mutateAsync(values);
            navigate('/login');
            formikHelpers.setSubmitting(false);
            formikHelpers.resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} style={{ width: '80%' }}>
            <Stack alignItems={'center'} spacing={2}>
                <TextField
                    id="firstName"
                    name="firstName"
                    type="text"
                    label="First Name"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    error={formik.touched.firstName && formik.errors.firstName ? true : false}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                />
                <TextField
                    id="lastName"
                    name="lastName"
                    type="text"
                    label="Last Name"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    error={formik.touched.lastName && formik.errors.lastName ? true : false}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                />
                <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.touched.email && formik.errors.email ? true : false}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.touched.password && formik.errors.password ? true : false}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                    id="brokerLicenseNumber"
                    name="brokerLicenseNumber"
                    type="text"
                    label="Broker License Number"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.brokerLicenseNumber}
                    error={
                        formik.touched.brokerLicenseNumber && formik.errors.brokerLicenseNumber
                            ? true
                            : false
                    }
                    helperText={
                        formik.touched.brokerLicenseNumber && formik.errors.brokerLicenseNumber
                    }
                />
                <Button type="submit" variant="contained" color="primary" size="large">
                    Create Account
                </Button>
                <Or />
                <Button onClick={handleGoToLogin} variant="contained" color="primary" size="large">
                    Login
                </Button>
            </Stack>
        </form>
    );
};

export default NewUserForm;
