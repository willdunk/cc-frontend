import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import urlJoin from 'url-join';
import axios from 'axios';

const NewUserForm: React.FC = () => {
    // Define validation schema using Yup
    const validationSchema = yup.object({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        email: yup.string().email('Invalid email address').required('Email is required'),
        password: yup.string().required('Password is required'),
        brokerLicenseNumber: yup.string().required('Broker License Number is required'),
    });

    // Handle form submission
    const handleSubmit = async (values: any) => {
        try {
            const apiStem = process.env.REACT_APP_CC_API;
            if (apiStem !== undefined) {
                const response = await axios.post(urlJoin(apiStem, 'users'), values);
            } else {
                throw new Error('API stem is undefined');
            }
        } catch (error) {
            console.error(error); // Handle the error as needed
        }
    };

    return (
        <div>
            <h1>New User Form</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <Field type="text" id="firstName" name="firstName" />
                        <ErrorMessage name="firstName" component="div" />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <Field type="text" id="lastName" name="lastName" />
                        <ErrorMessage name="lastName" component="div" />
                    </div>

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

                    <div>
                        <label htmlFor="brokerLicenseNumber">Broker License Number</label>
                        <Field type="text" id="brokerLicenseNumber" name="brokerLicenseNumber" />
                        <ErrorMessage name="brokerLicenseNumber" component="div" />
                    </div>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default NewUserForm;