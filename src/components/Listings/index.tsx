import { FC } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router';

const Listings: FC = () => {
    const navigate = useNavigate();

    const handleCreateListingClick = () => {
        navigate('/new/listing');
    };

    return (
        <Container maxWidth="lg">
            <Stack alignItems={'center'}>
                <Button variant="contained" onClick={handleCreateListingClick}>
                    Create Listing
                </Button>
            </Stack>
        </Container>
    );
};

export default Listings;
