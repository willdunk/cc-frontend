import axios from 'axios';
import { getEnv } from '../env';
import urlJoin from 'url-join';
import { POST_LOGOUT } from '../constants/endpoints';

export const postLogout = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (Boolean(refreshToken)) {
        await axios.post(urlJoin(getEnv().CC_API, POST_LOGOUT), { refreshToken });
    }
    localStorage.setItem('accessToken', '');
    localStorage.setItem('refreshToken', '');
    return true;
};
