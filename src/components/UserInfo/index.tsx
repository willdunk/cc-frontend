import { FC, useMemo } from 'react';
import { useAuthenticated } from '../../hooks/useAuthenticated';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Name from './Name';
import Email from './Email';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import BrokerLicense from './BrokerLicense';
import { useQuery } from '@tanstack/react-query';
import { getUserFromId } from '../../queries/getUserFromId';

type UserInfoProps = {
    userId?: string;
};

const UserInfo: FC<UserInfoProps> = ({ userId }) => {
    // If userId is defined, we are looking at someone else's profile, therefore we don't need to check if the user is authenticated
    const { user: authenticatedUser, isLoading: isAuthenticatedUserLoading } = useAuthenticated(
        !Boolean(userId),
    );

    const {
        data: otherUser,
        isFetching,
        isError,
    } = useQuery({
        queryKey: ['user', userId],
        queryFn: getUserFromId(userId ?? ''),
        enabled: Boolean(userId),
    });

    const { user, isLoading } = useMemo(() => {
        if (Boolean(userId)) {
            return { user: otherUser, isLoading: isFetching };
        }
        return { user: authenticatedUser, isLoading: isAuthenticatedUserLoading };
    }, [authenticatedUser, otherUser, isAuthenticatedUserLoading, isFetching, userId]);

    return (
        <Container fixed sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
                sx={{
                    borderRadius: 0,
                    m: 2,
                    p: 2,
                    height: 400,
                    width: 700,
                    overflow: 'hidden',
                    backgroundColor: '#FAF9F6',
                }}
            >
                <Box sx={{ display: 'flex', height: '100%', position: 'relative' }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 400, opacity: 0.5 }}>
                        <HomeIcon sx={{ height: 450, width: 450 }} />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Stack justifyContent={'end'} sx={{ height: '100%' }}>
                            <Name user={user} isLoading={isLoading} />
                            <Email user={user} isLoading={isLoading} />
                        </Stack>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Stack justifyContent={'end'} sx={{ height: '100%' }}>
                            <BrokerLicense user={user} isLoading={isLoading} />
                        </Stack>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default UserInfo;
