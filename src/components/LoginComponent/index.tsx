import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import Container from '@mui/material/Container';
import Form from './Form';

const LoginComponent: FC = () => {
    return (
        <Container maxWidth="sm">
            <Paper sx={{ m: 2, p: 2 }}>
                <Stack alignItems="center" spacing={2}>
                    <Typography variant="h3">Commission Clarity</Typography>
                    <Form />
                </Stack>
            </Paper>
        </Container>
    );
};

export default LoginComponent;
