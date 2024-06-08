import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useAuthenticated } from '../../hooks/useAuthenticated';
import { useMutation } from '@tanstack/react-query';
import { postLogout } from '../../mutations/postLogout';
import { useNavigate } from 'react-router-dom';

type AccountMenuProps = {
    open: boolean;
    onClose: () => void;
};

const AccountMenu: FC<AccountMenuProps> = ({ open, onClose }) => {
    const navigate = useNavigate();
    const { user, isLoading } = useAuthenticated();

    const { mutateAsync } = useMutation({ mutationFn: postLogout });

    const handleLogout = async () => {
        await mutateAsync();
        onClose();
        navigate('/');
    };

    return (
        <Menu
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            open={open}
            onClose={onClose}
        >
            <MenuItem sx={{ display: 'block', pointerEvents: 'none' }}>
                <Typography>{`${user?.firstName} ${user?.lastName}`}</Typography>
                <Typography>{user?.email}</Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    );
};

export default AccountMenu;
