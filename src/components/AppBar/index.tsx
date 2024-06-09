import { FC, useState } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AccountMenu from './AccountMenu';

const AppBar: FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <MuiAppBar position="static">
            <Toolbar>
                <Stack
                    direction="row"
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    sx={{ width: '100%' }}
                >
                    <Typography variant="h6">Commission Clarity</Typography>
                    <IconButton size="large" edge="end" onClick={handleMenuOpen} color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <AccountMenu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    />
                </Stack>
            </Toolbar>
        </MuiAppBar>
    );
};

export default AppBar;
