import axios from 'axios';
import { getEnv } from '../env';
import urlJoin from 'url-join';
import { POST_LOGOUT } from '../constants/endpoints';

export const postLogout = async () => {
    return await axios.post(urlJoin(getEnv().CC_API, POST_LOGOUT), { withCredentials: true });
};
