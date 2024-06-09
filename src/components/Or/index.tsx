import Typography from '@mui/material/Typography';
import { FC } from 'react';

const Or: FC = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <hr style={{ flex: 1, borderTop: '1px solid black' }} />
            <Typography variant="body1" style={{ margin: '0 10px' }}>
                OR
            </Typography>
            <hr style={{ flex: 1, borderTop: '1px solid black' }} />
        </div>
    );
};

export default Or;
