import React, {useEffect, useState} from 'react';
import {Tabs, Tab} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';

const Navbar: React.FC = () => {

    const location = useLocation();
    const [value, setValue] = useState<string>('/');

    useEffect(() => {
        let newValue = location.pathname;
        if (newValue === '/' || newValue === '/home') {
            newValue = '/';
        }
        setValue(newValue);
    }, [location.pathname]);

    return (

        <Tabs value={value}>
            <Tab label='Home' value='/' component={Link} to='/' />
            <Tab label='Services' value='/services' component={Link} to='/services' />
            <Tab label='Contact' value='/contact' component={Link} to='/contact' />
            <Tab label='About' value='/about' component={Link} to='/about' />
        </Tabs>
    );
};

export default Navbar;
