import axios from 'axios';
import { getEnv } from '../env';
import urlJoin from 'url-join';
import { GET_USER } from '../constants/endpoints';
import { getUserSchema } from '../schemas/getUserSchema';

export const getUser = async () => {
    const response = await axios.get(urlJoin(getEnv().CC_API, GET_USER), { withCredentials: true });
    return await getUserSchema.validate(response.data);
};
