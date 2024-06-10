import React from 'react';
import { useFormik } from 'formik';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { postNewListing } from '../../../mutations/postNewListing';
import { validationSchema } from './validationSchema';
import { createPayload } from './createPayload';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import states from 'states-us';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';

const initialValues = {
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
};

const NewListingForm: React.FC = () => {
    const navigate = useNavigate();

    const { mutateAsync } = useMutation({ mutationFn: postNewListing });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, formikHelpers) => {
            formikHelpers.setSubmitting(true);
            const payload = createPayload(values);
            console.log(payload);
            await mutateAsync(payload);
            navigate('/home');
            formikHelpers.setSubmitting(false);
            formikHelpers.resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} style={{ width: '80%' }}>
            <Stack alignItems={'center'} spacing={2}>
                <TextField
                    id="addressLine1"
                    name="addressLine1"
                    type="text"
                    label="Address Line 1"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.addressLine1}
                    error={formik.touched.addressLine1 && formik.errors.addressLine1 ? true : false}
                    helperText={formik.touched.addressLine1 && formik.errors.addressLine1}
                />
                <TextField
                    id="addressLine2"
                    name="addressLine2"
                    type="text"
                    label="Address Line 2"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.addressLine2}
                    error={formik.touched.addressLine2 && formik.errors.addressLine2 ? true : false}
                    helperText={formik.touched.addressLine2 && formik.errors.addressLine2}
                />
                <TextField
                    id="city"
                    name="city"
                    type="text"
                    label="City"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    error={formik.touched.city && formik.errors.city ? true : false}
                    helperText={formik.touched.city && formik.errors.city}
                />
                <TextField
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    label="Zip Code"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.zipCode}
                    error={formik.touched.zipCode && formik.errors.zipCode ? true : false}
                    helperText={formik.touched.zipCode && formik.errors.zipCode}
                />
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="state">State</InputLabel>
                    <NativeSelect
                        input={<OutlinedInput label={'State'} />}
                        id="state"
                        name="state"
                        type="text"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.state}
                        error={formik.touched.state && formik.errors.state ? true : false}
                    >
                        {formik.touched.state ? null : <option key={''} value={''} />}
                        {states
                            .filter((s) => !s.territory)
                            .map(({ abbreviation }) => (
                                <option key={abbreviation} value={abbreviation}>
                                    {abbreviation}
                                </option>
                            ))}
                    </NativeSelect>
                </FormControl>
                <Typography variant="caption">Listing Date Coming Soon</Typography>
                <Typography variant="caption">Listing Price Coming Soon</Typography>
                <Typography variant="caption">External Listing Links Coming Soon</Typography>
                <Button type="submit" variant="contained" color="primary" size="large">
                    Create Listing
                </Button>
            </Stack>
        </form>
    );
};

export default NewListingForm;
