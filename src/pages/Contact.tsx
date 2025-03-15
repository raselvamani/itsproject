import React, {useState} from 'react';
import {Box, Typography, TextField, Button} from '@mui/material';

const Contact: React.FC = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        const mailtoLink = `mailto:raselvamani@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(`
            <h1>Contact Form Submission</h1>
            <p><strong>First Name:</strong> ${formData.firstName}</p>
            <p><strong>Last Name:</strong> ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
        `)}`;

        window.location.href = mailtoLink;
    };

    return (
        <Box sx={{p: 3, maxWidth: 600, mx: 'auto'}}>
            <Typography variant='h4' sx={{mb: 3}}>
                Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin='normal'
                    label='First Name'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <TextField 
                    fullWidth
                    margin='normal'
                    label='Last Name'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <TextField 
                    fullWidth
                    margin='normal'
                    label='Email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <TextField 
                    fullWidth
                    margin='normal'
                    label='Phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <TextField 
                    fullWidth
                    margin='normal'
                    label='Message'
                    name='message'
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <Button type='submit' variant='contained' color='primary' sx={{mt: 2}}>
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default Contact;