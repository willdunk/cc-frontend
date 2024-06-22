import { FC } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { useAuthenticated } from '../../hooks/useAuthenticated';
import { getListings } from '../../queries/getListings';
import Listing from '../Listing';
import { isDefined } from '../../utils/ts/isDefined';

type ListingsProps = {
    userId?: string;
};

const Listings: FC<ListingsProps> = ({ userId }) => {
    const navigate = useNavigate();

    const {
        user: authenticatedUser,
        isLoading: isAuthenticationLoading,
        isError: isAuthenticationError,
    } = useAuthenticated(!Boolean(userId));

    const userIdToUse = Boolean(userId) ? userId : authenticatedUser?._id;

    const { data, isFetching, isError } = useQuery({
        queryKey: ['listings', userIdToUse],
        queryFn: getListings(userIdToUse ?? ''),
        enabled: Boolean(userIdToUse),
    });

    const handleCreateListingClick = () => {
        navigate('/new/listing');
    };

    return (
        <Container maxWidth="lg">
            <Stack alignItems={'center'} spacing={1}>
                {!Boolean(userId) && isDefined(authenticatedUser) ? (
                    <Button variant="contained" onClick={handleCreateListingClick}>
                        Create Listing
                    </Button>
                ) : null}
                {data?.map((listing) => (
                    <Listing key={listing._id} address={listing.address} />
                ))}
            </Stack>
        </Container>
    );
};

export default Listings;
