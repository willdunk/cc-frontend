import { FC } from 'react';
import { getUserSchema } from '../../schemas/getUserSchema';
import * as yup from 'yup';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

type BrokerLicenseProps = {
    user: yup.InferType<typeof getUserSchema> | undefined;
    isLoading: boolean;
};

const BrokerLicense: FC<BrokerLicenseProps> = ({ user, isLoading }) => {
    return isLoading ? (
        <Skeleton />
    ) : (
        <Typography variant="body1">BLN#{user?.brokerLicenseNumber}</Typography>
    );
};

export default BrokerLicense;
