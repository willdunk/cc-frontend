import { FC } from 'react';
import Container from '../Container';
import UserInfo from '../UserInfo';
import Listings from '../Listings';

const HomeComponent: FC = () => {
    return (
        <Container>
            <UserInfo />
            <Listings />
        </Container>
    );
};

export default HomeComponent;
