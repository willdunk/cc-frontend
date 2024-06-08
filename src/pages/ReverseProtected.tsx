import { FC, useEffect } from 'react';
import { useAuthenticated } from '../hooks/useAuthenticated';
import { Outlet, useNavigate } from 'react-router-dom';

const ReverseProtected: FC = () => {
    const { isLoading, isError } = useAuthenticated();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isError && !isLoading) {
            // When there is no error, it means the user is authenticated, and should not access a ReverseProtected route
            navigate('/home');
        }
    }, [isError, isLoading]);

    return <Outlet />;
};

export default ReverseProtected;
