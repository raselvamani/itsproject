import React from 'react';
import {Box, Typography} from '@mui/material';

/*
const team = [
    {name: 'Arulselvi Amirrthalingam', role: 'Founder/CEO', image: '/ceo.jpg'},
    {name: 'Selvamani Ramasamy', role: 'CTO', image: '/cto.jpg'},
    {name: 'Selvamani Ramasamy', role: 'Director', image: '/director.jpg'}
]; */

const About: React.FC = () => {

    return (
        <Box sx={{p: 3}}>
            <Typography variant='h4' sx={{mb: 3}}>
                About Our Company
            </Typography>
            <Typography variant='body1' sx={{mb: 3}}>
                We are leading IT consulting company dedicated to providing innovative solutions to business worldwide.
            </Typography>
            {/* 
            <Typography variant='h5' sx={{mb: 2}}>
                Our Leadership Team
            </Typography>
            <Grid container spacing={3}>
                {team.map((member, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}> 
                        <Card>
                            <CardMedia
                                component='img'
                                height='200'
                                image={member.image}
                                alt={member.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component='div'>
                                    {member.name}
                                </Typography>
                                <Typography variant='body2' color='text.secondary'>
                                    {member.role}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            */}
        </Box>
    );
};

export default About;