import React from 'react';
import {Tabs, Tab} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();

    return (
        <Tabs value={location.pathname}>
            <Tab label='Home' value='/' component={Link} to='/' />
            <Tab label='Services' value='/services' component={Link} to='/services' />
            <Tab label='Contact' value='/contact' component={Link} to='/contact' />
            <Tab label='About' value='/about' component={Link} to='/about' />
        </Tabs>
    );
};

export default Navbar;
