import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import urlJoin from 'url-join';
import { useNavigate } from 'react-router-dom';
import { getEnv } from '../../env';

const LoginPage: React.FC = () => {
    const initialValues = {
        email: '',
        password: '',
    };

    const navigate = useNavigate();

    const handleSubmit = async (values: any) => {
        try {
            const response = await axios.post(urlJoin(getEnv().CC_API, 'login'), values);
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            navigate("/home");

        } catch (error) {
            console.error(error); // Handle the error as needed
        }
    };

    const validateForm = (values: any) => {
        const errors: any = {};

        if (!values.email) {
            errors.email = 'Email is required';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        }

        return errors;
    };

    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validate={validateForm}
            >
                <Form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginPage;