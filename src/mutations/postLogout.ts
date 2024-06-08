import axios from 'axios';
import { getEnv } from '../env';
import urlJoin from 'url-join';
import { POST_LOGOUT } from '../constants/endpoints';

export const postLogout = async () => {
    console.log(localStorage.getItem('refreshToken'));
    const data = { refreshToken: localStorage.getItem('refreshToken') };
    await axios.post(urlJoin(getEnv().CC_API, POST_LOGOUT), data);
    localStorage.setItem('accessToken', '');
    localStorage.setItem('refreshToken', '');
    return true;
};
