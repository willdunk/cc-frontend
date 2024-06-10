import * as yup from 'yup';

const externalListingLinkSchema = yup.object({
    provider: yup.string().required('Provider is required'),
    url: yup.string().required('URL is required'),
});

export const validationSchema = yup.object({
    addressLine1: yup.string().required('Address Line 1 is required'),
    addressLine2: yup.string(),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required').notOneOf([''], 'State is required'),
    zipCode: yup
        .string()
        .required('Zip Code is required')
        .matches(/^\d{5}$/, 'Zip Code must be a 5-digit number'),
    listingDate: yup.date(),
    listingPrice: yup.number(),
    externalListingLinks: yup.array().of(externalListingLinkSchema),
});
