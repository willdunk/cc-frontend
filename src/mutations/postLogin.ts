import axios from 'axios';
import { getEnv } from '../env';
import urlJoin from 'url-join';
import { POST_LOGIN } from '../constants/endpoints';

type PostLoginRequestBody = {
    email: string;
    password: string;
};

export const postLogin = async (data: PostLoginRequestBody) => {
    const response = await axios.post(urlJoin(getEnv().CC_API, POST_LOGIN), data, {
        withCredentials: true,
    });
    return response.data;
};
