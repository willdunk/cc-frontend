import * as yup from 'yup';

const externalListingLinkSchema = yup.object({
    provider: yup.string().required('Provider is required'),
    url: yup.string().required('URL is required'),
});

const getListingSchema = yup.object({
    _id: yup.string().required('_id is required'),
    userId: yup.string().required('userId is required'),
    address: yup.string().required('Address is required'),
    listingDate: yup.date(),
    listingPrice: yup.number(),
    externalListingLinks: yup.array().of(externalListingLinkSchema),
});

export const getListingsSchema = yup.array().of(getListingSchema);
