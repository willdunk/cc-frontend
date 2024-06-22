import axios from 'axios';
import { getEnv } from '../env';
import urlJoin from 'url-join';
import { GET_USER_FROM_ID } from '../constants/endpoints';
import { getUserSchema } from '../schemas/getUserSchema';

export const getUserFromId = (userId: string) => async () => {
    const response = await axios.get(urlJoin(getEnv().CC_API, GET_USER_FROM_ID(userId)), {
        withCredentials: true,
    });
    return await getUserSchema.validate(response.data);
};
