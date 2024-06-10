import { FC } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

type ListingProps = {
    address: string;
};

const Listing: FC<ListingProps> = ({ address }) => {
    return (
        <Paper sx={{ width: '100%', height: 64, p: 1 }}>
            <Stack sx={{ height: '100%' }} justifyContent={'center'}>
                <Typography variant="body1">{address}</Typography>
            </Stack>
        </Paper>
    );
};

export default Listing;
