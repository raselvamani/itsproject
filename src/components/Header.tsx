import React from 'react';
import {AppBar, Toolbar, Typography, Box} from '@mui/material';

const Header: React.FC = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Box display='flex' alignItems='center'>
                    <img src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt='Logo' style={{height:40, marginRight:10}} />
                    <Typography variant='h6'>
                        InfiniteTechSolutions
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

