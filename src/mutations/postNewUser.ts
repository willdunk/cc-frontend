import axios from 'axios';
import { getEnv } from '../env';
import urlJoin from 'url-join';
import { POST_NEW_USER } from '../constants/endpoints';
import { postNewUserSchema } from '../schemas/postNewUserSchema';

type PostNewUserRequestBody = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    brokerLicenseNumber: string;
};

export const postNewUser = async (data: PostNewUserRequestBody) => {
    const response = await axios.post(urlJoin(getEnv().CC_API, POST_NEW_USER), data);
    const validatedData = await postNewUserSchema.validate(response.data);
    return validatedData;
};
