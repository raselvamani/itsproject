import React from 'react';
import {Box, Typography} from '@mui/material';

const Home: React.FC = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3}}>
            <img src='/images/logo.jpg' alt='InfiniteTechSolutions' style={{maxWidth: '100%', height: '200px', margin: 'auto'}} />
            <Typography variant='h4' sx={{mt: 2}}>
                Welcome to Infinite Tech Solutions.
            </Typography>
            <Typography variant='body1' sx={{mt: 2}}>
                We provide expert IT consulting services to help business leverage technology for growth and efficiency
            </Typography>
        </Box>
    );
};

export default Home;