import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import Container from '../Container';
import Form from './Form';

const NewListingComponent: FC = () => {
    return (
        <Container>
            <Paper sx={{ m: 2, p: 2 }}>
                <Stack alignItems="center" spacing={2}>
                    <Typography variant="h3" textAlign={'center'}>
                        Create a New Listing
                    </Typography>
                    <Form />
                </Stack>
            </Paper>
        </Container>
    );
};

export default NewListingComponent;
