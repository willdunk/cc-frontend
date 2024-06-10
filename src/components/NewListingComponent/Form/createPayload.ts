import { PostNewListingRequestBody } from '../../../mutations/postNewListing';
import { validationSchema } from './validationSchema';

const formatAddress = ({
    addressLine1,
    addressLine2,
    zipCode,
    city,
    state,
}: {
    addressLine1: string;
    addressLine2?: string;
    zipCode: string;
    city: string;
    state: string;
}): string => {
    return `${addressLine1}${
        addressLine2 ? `, ${addressLine2}` : ''
    }, ${city}, ${state} ${zipCode}`;
};

export const createPayload: (values: any) => PostNewListingRequestBody = (values) => {
    const validatedValues = validationSchema.validateSync(values);
    return {
        address: formatAddress(validatedValues),
        externalListingLinks: validatedValues.externalListingLinks,
        listingDate: validatedValues.listingDate,
        listingPrice: validatedValues.listingPrice,
    };
};
