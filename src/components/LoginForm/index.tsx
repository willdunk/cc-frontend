import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { postLogin } from '../../mutations/postLogin';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const initialValues = {
    email: '',
    password: '',
};

const LoginPage: React.FC = () => {

    const navigate = useNavigate();
    const { mutateAsync } = useMutation({ mutationFn: postLogin })

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, formikHelpers) => {
            formikHelpers.setSubmitting(true);
            await mutateAsync(values);
            navigate("/home");
            formikHelpers.setSubmitting(false);
            formikHelpers.resetForm();
        }
    });

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div >
    );
};

export default LoginPage;