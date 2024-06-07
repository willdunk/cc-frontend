import { FC, useEffect } from 'react';
import { useAuthenticated } from '../../hooks/useAuthenticated';
import { useNavigate } from 'react-router-dom';
import { isDefined } from '../../utils/ts/isDefined';

const HomePage: FC = () => {
    const { user, isLoading, isError } = useAuthenticated();
    const navigate = useNavigate();

    useEffect(() => {
        if (isError) {
            navigate('/');
        }
    }, [navigate, user, isLoading, isError])

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>Hello</h1>
            {isDefined(user) ? <p>Welcome, {user.email}</p> : null}
        </div>
    );
};

export default HomePage;