import { FC } from 'react';
import { getUserSchema } from '../../schemas/getUserSchema';
import * as yup from 'yup';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

type NameProps = {
    user: yup.InferType<typeof getUserSchema> | undefined;
    isLoading: boolean;
};

const Name: FC<NameProps> = ({ user, isLoading }) => {
    const name = user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : 'User';
    return isLoading ? <Skeleton /> : <Typography variant="h5">{name}</Typography>;
};

export default Name;
