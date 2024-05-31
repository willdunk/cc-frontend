import { FC, useEffect } from 'react';
import { useAuthenticated } from '../../hooks/useAuthenticated';
import { useNavigate } from 'react-router-dom';

const HomePage: FC = () => {
    const { user, isLoading } = useAuthenticated();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user && !isLoading) {
            navigate('/');
        }
    }, [navigate, user, isLoading])

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>Hello</h1>
            {typeof user === 'object' ? Object.entries(user).map(([key, value]) => (<p key={key}>{`${key}: ${value}`}</p>)) : null}
        </div>
    );
};

export default HomePage;