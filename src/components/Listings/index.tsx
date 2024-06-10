import { FC } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { useAuthenticated } from '../../hooks/useAuthenticated';
import { getListings } from '../../queries/getListings';
import Listing from '../Listing';

const Listings: FC = () => {
    const navigate = useNavigate();

    const {
        user,
        isLoading: isAuthenticationLoading,
        isError: isAuthenticationError,
    } = useAuthenticated();

    const userId = user?._id ?? '';

    const { data, isFetching, isError } = useQuery({
        queryKey: ['listings', userId],
        queryFn: getListings(userId),
        enabled: Boolean(userId),
    });

    const handleCreateListingClick = () => {
        navigate('/new/listing');
    };

    return (
        <Container maxWidth="lg">
            <Stack alignItems={'center'} spacing={1}>
                <Button variant="contained" onClick={handleCreateListingClick}>
                    Create Listing
                </Button>
                {data?.map((listing) => (
                    <Listing key={listing._id} address={listing.address} />
                ))}
            </Stack>
        </Container>
    );
};

export default Listings;
