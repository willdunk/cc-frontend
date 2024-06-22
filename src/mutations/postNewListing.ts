import axios from 'axios';
import { getEnv } from '../env';
import urlJoin from 'url-join';
import { POST_NEW_LISTING } from '../constants/endpoints';

export type PostNewListingRequestBody = {
    address: string;
    externalListingLinks?: {
        provider: string;
        url: string;
    }[];
    listingDate?: Date;
    listingPrice?: number;
};

export const postNewListing = async (data: PostNewListingRequestBody) => {
    return await axios.post(urlJoin(getEnv().CC_API, POST_NEW_LISTING), data, {
        withCredentials: true,
    });
};
