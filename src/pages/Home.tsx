import { FC } from 'react';
import UserInfo from '../components/UserInfo';
import Container from '../components/Container';

const Home: FC = () => {
    return (
        <Container>
            <UserInfo />
        </Container>
    );
};

export default Home;
