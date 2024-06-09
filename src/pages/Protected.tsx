import { FC, useEffect } from 'react';
import { useAuthenticated } from '../hooks/useAuthenticated';
import { Outlet, useNavigate } from 'react-router-dom';

const Protected: FC = () => {
    const { isLoading, isError } = useAuthenticated();
    const navigate = useNavigate();

    useEffect(() => {
        if (isError && !isLoading) {
            navigate('/login');
        }
    }, [isError, isLoading]);

    return <Outlet />;
};

export default Protected;
