import { useEffect, useState } from 'react';
import axios from 'axios';
import urlJoin from 'url-join';

export const useAuthenticated = (): { user: any; isLoading: boolean } => {
    const [user, setUser] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const apiStem = process.env.REACT_APP_CC_API;
                if (apiStem !== undefined) {
                    const response = await axios.get(urlJoin(apiStem, '/users'), { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } });
                    setUser(response.data);
                }
            }
            catch (error) {
                // Handle authentication failure
                // You would want to attempt to refresh using the refresh token
                // If that fails, then you should truly fail
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, isLoading };
};