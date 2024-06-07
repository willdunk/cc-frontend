import axios from "axios";
import { getEnv } from "../env";
import urlJoin from "url-join";
import { GET_USER, POST_REFRESH } from "../constants/endpoints";
import { getUserSchema } from "../schemas/getUserSchema";
import { postRefreshTokenSchema } from "../schemas/postRefreshTokenSchema";

const getUserOnly = async () => {
    const response = await axios.get(urlJoin(getEnv().CC_API, GET_USER), { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } });
    const validatedData = await getUserSchema.validate(response.data);
    return validatedData;
};

const refreshTokenOnly = async () => {
    const response = await axios.post(urlJoin(getEnv().CC_API, POST_REFRESH), { refreshToken: localStorage.getItem('refreshToken') });
    const validatedData = await postRefreshTokenSchema.validate(response.data);
    localStorage.setItem('accessToken', validatedData.accessToken);
    localStorage.setItem('refreshToken', validatedData.refreshToken);
    return validatedData;
}

export const getUser = async () => {
    try {
        return await getUserOnly();
    }
    catch (error) {
        // Likely failed to authenticate with accessToken, try to refresh the token
        try {
            await refreshTokenOnly();
            return await getUserOnly();
        }
        catch (error) {
            // Failed to refresh the token, clear the tokens and return false
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            return undefined;
        }
    }
};