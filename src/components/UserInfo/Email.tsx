import { FC } from 'react';
import { getUserSchema } from '../../schemas/getUserSchema';
import * as yup from 'yup';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

type EmailProps = {
    user: yup.InferType<typeof getUserSchema> | undefined;
    isLoading: boolean;
};

const Email: FC<EmailProps> = ({ user, isLoading }) => {
    return isLoading ? <Skeleton /> : <Typography variant="body1">{user?.email}</Typography>;
};

export default Email;
