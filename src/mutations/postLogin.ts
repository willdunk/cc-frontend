import axios from "axios";
import { getEnv } from "../env";
import urlJoin from "url-join";
import { POST_LOGIN } from "../constants/endpoints";
import { postLoginSchema } from "../schemas/postLoginSchema";

type PostLoginRequestBody = {
    email: string;
    password: string;
};

export const postLogin = async (data: PostLoginRequestBody) => {
    const response = await axios.post(urlJoin(getEnv().CC_API, POST_LOGIN), data);
    const validatedData = await postLoginSchema.validate(response.data);
    localStorage.setItem('accessToken', validatedData.accessToken);
    localStorage.setItem('refreshToken', validatedData.refreshToken);
    return validatedData;
};