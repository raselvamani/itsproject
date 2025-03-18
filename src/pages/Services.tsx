import React from 'react';
import {Box, Typography, Grid, Card, CardContent, CardMedia} from '@mui/material';

const services = [
    {
        title: 'AI training', 
        image: process.env.PUBLIC_URL + "/images/ai-training.jpg", 
        description: "Learn from experts with personalized training sessions. Whether you're looking to upskill your team or learn new technologies, our personalized tutoring and training services are designed to meet your needs. We offer one-on-one sessions in various IT domains, including AI/ML, web development, and more."
    },
    {
        title: 'AI/ML Model Development', 
        image: process.env.PUBLIC_URL + "/images/ai-model.jpg", 
        description: "Unlock the potential of AI and Machine Learning to solve complex business challenges. Our AI/ML experts build custom models tailored to your needs, from data collection and preprocessing to model training, testing, and deployment. Whether it’s predictive analytics, natural language processing (NLP), or computer vision, we create intelligent solutions that drive business growth."
    },
    {
        title: 'Chatbot Development', 
        image: process.env.PUBLIC_URL + "/images/ai-chatbot.jpg",
        description: "Enhance user engagement and provide 24/7 support with AI-powered chatbots. Our chatbot development service enables you to create conversational bots that can assist with customer service, lead generation, and user interaction. Using natural language processing, we ensure that your bots understand and respond intelligently to customer queries."
    },
    {
        title: 'Web App Development', 
        image: process.env.PUBLIC_URL + "/images/webdesign.jpg",
        description: "Build powerful and responsive web applications that elevate your business. We design and develop web apps that are user-friendly, scalable, and secure. From front-end design to back-end integration, our team ensures your app is optimized for performance and provides seamless user experiences across all devices."
    },
    {
        title: 'Tutoring', 
        image: process.env.PUBLIC_URL + "/images/tutoring.jpg",
        description: "Learn from experts with personalized training sessions. Whether you're looking to upskill your team or learn new technologies, our personalized tutoring and training services are designed to meet your needs. We offer one-on-one sessions in various IT domains, including AI/ML, web development, and more."
    },
    {
        title: "IT Consulting", 
        image: process.env.PUBLIC_URL + "/images/consulting.jpg",
        description: "Strategic IT consulting to help you optimize your technology infrastructure. Our IT consulting services are designed to guide your business in making informed decisions about technology adoption, digital transformation, cybersecurity, and more. We’ll help you create a roadmap for implementing IT solutions that align with your business goals."
    },
];

const Services: React.FC = () => {
    return (
        <Box sx={{p: 3}}>
            <Typography variant='h4' fontWeight='bold' sx={{mb: 3}}>
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
