import axios from 'axios';
import { getEnv } from '../env';
import urlJoin from 'url-join';
import { GET_LISTINGS } from '../constants/endpoints';
import { getListingsSchema } from '../schemas/getListingsSchema';

export const getListings = (userId: string) => async () => {
    const response = await axios.get(urlJoin(getEnv().CC_API, GET_LISTINGS(userId)));
    const validatedData = await getListingsSchema.validate(response.data);
    return validatedData;
};
