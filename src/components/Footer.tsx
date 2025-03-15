import React from 'react';
import {Box, Link, Typography} from '@mui/material';

const Footer: React.FC = () => {

    return(
        <Box component='footer' sx={{mt:'auto', py:2, bgcolor:'primary.main', color:'white'}}>
            <Typography variant='body2' align='center'>
                <Link color='inherit' href='/services'>Services</Link>
                {'|'}
                <Link color='inherit' href='/contact'>Contact</Link>
            </Typography>
            <Typography variant='body2' align='center'>
                © {new Date().getFullYear()} InfiniteTechSolutions. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
