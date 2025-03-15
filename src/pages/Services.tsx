import React from 'react';
import {Box, Typography, Grid, Card, CardContent, CardMedia} from '@mui/material';

const services = [
    {
        title: 'AI training', 
        image: 'images/ai-training.jpg', 
        description: 'We provide AI training for individuals and organizations.'
    },
    {
        title: 'AI/ML Model Development', 
        image: '/images/ai-model.jpg', 
        description: 'We develop AI/ML models for various applications.'
    },
    {
        title: 'Chatbot Development', 
        image: '/images/ai-chatbot.jpg',
        description: 'We develop chatbots for various applications.'
    },
    {
        title: 'Web App Development', 
        image: '/images/webdesign.jpg',
        description: 'We develop web applications for various domains.'
    },
    {
        title: 'Tutoring', 
        image: '/images/tutoring.jpg',
        description: 'We provide tutoring services for various subjects from kindergarden to 12th grade.'
    },
    {
        title: 'IT Consulting', 
        image: '/images/consulting.jpg',
        description: 'We provide IT consulting services for organizations.'
    },
];

const Services: React.FC = () => {
    return (
        <Box sx={{p: 3}}>
            <Typography variant='h4' sx={{mb: 3}}>
                Our Services
            </Typography>
            <Grid container spacing={3}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardMedia 
                                component='img'
                                height='140'
                                image={service.image}
                                alt={service.title} 
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5' component='div'>
                                    {service.title}
                                </Typography>
                                <Typography gutterBottom variant='body2' component='div'>
                                    {service.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>        
                ))}
            </Grid>
        </Box>
    );
};

export default Services;
