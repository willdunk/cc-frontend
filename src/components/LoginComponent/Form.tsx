import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { postLogin } from '../../mutations/postLogin';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Or from '../Or';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const initialValues = {
    email: '',
    password: '',
};

const Form: React.FC = () => {
    const navigate = useNavigate();

    const handleGoToNewUser = () => {
        navigate('/new');
    };

    const { mutateAsync } = useMutation({ mutationFn: postLogin });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, formikHelpers) => {
            formikHelpers.setSubmitting(true);
            await mutateAsync(values);
            navigate('/home');
            formikHelpers.setSubmitting(false);
            formikHelpers.resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} style={{ width: '80%' }}>
            <Stack alignItems={'center'} spacing={2}>
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
                <Button type="submit" variant="contained" color="primary" size="large">
                    Login
                </Button>
                <Or />
                <Button
                    onClick={handleGoToNewUser}
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    Start Listing
                </Button>
            </Stack>
        </form>
    );
};

export default Form;
