import { FC, PropsWithChildren } from 'react';
import MuiContainer from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '../AppBar';

const Container: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box>
            <AppBar />
            <MuiContainer maxWidth={'lg'}>{children}</MuiContainer>
        </Box>
    );
};

export default Container;
