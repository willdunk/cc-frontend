import { FC } from 'react';
import Container from '../Container';
import UserInfo from '../UserInfo';
import Listings from '../Listings';
import { useParams } from 'react-router-dom';

const UserComponent: FC = () => {
    const { userId } = useParams();
    return (
        <Container>
            <UserInfo userId={userId} />
            <Listings userId={userId} />
        </Container>
    );
};

export default UserComponent;
