import React from 'react';
import {Box, Typography} from '@mui/material';

const About: React.FC = () => {

    return (
        <Box sx={{p: 3}}>
            <Typography variant='h4' fontWeight='bold' sx={{mb: 3}}>
                About InfiniteTechSolutions
            </Typography>
            <Typography variant='body1' sx={{mb: 3}}>
                InfiniteTechSolutions is a forward-thinking IT service provider dedicated to driving innovation through technology. 
                We specialize in offering AI/ML solutions, chatbot development, web app development, and IT consulting to business of all sizes.
                Our goal is to help our clients harness the power of emerging technologies to stay competitive in the digital age.
            </Typography>
            <Typography variant='h5' fontWeight='bold' sx={{mb: 3}}>
                Our Mission
            </Typography>
            <Typography variant='body1' sx={{mb: 3}}>
                To deliver exceptional, high-quality, and tailor-made IT solutions that empower business to scale and innovate. We strive to
                provide a seamless experience by leveraging the best tools and technologies while ensuring customer satisfaction and success.
            </Typography>
            <Typography variant='h5' fontWeight='bold' sx={{mb: 3}}>
                Our Vision
            </Typography>
            <Typography variant='body1' sx={{mb: 3}}>
                To be a blobal leader in IT solutions by continually pushing the boundaries of technology and innovation, delivering measurable
                results to our clients, and building lasting relationships based on trust and expertise.
            </Typography>
            <Typography variant='h5' fontWeight='bold' sx={{mb: 3}}>
                Our Values
            </Typography>
            <ul>
                <li>
                    <Typography variant='body1' sx={{mb: 3}}>
                        <strong>Innovation:</strong>We are always looking for the latest technologies to solve challenges and drive change.
                    </Typography>
                </li>
                <li>
                    <Typography variant='body1' sx={{mb: 3}}>
                        <strong>Integrity:</strong>We are committed to doing what is right, acting ethically, and building trust with our clients.
                    </Typography>
                </li>
                <li>
                    <Typography variant='body1' sx={{mb: 3}}>
                        <strong>Excellence:</strong>We consistently strive to deliver top-tier services, ensuring the highest standards of quality.
                    </Typography>
                </li>
                <li>
                    <Typography variant='body1' sx={{mb: 3}}>
                        <strong>Collaboration:</strong>We believe in working closely with our clients, fostering strong partnerships for long-term success.
                    </Typography>
                </li>
            </ul>
            <Typography variant='h5' fontWeight='bold' sx={{mb: 3}}>
                Meet Our Team
            </Typography>
            <Typography variant='body1' sx={{mb: 3}}>
                Our team consists of highly skilled professionals with diverse backgrounds in AI/ML, software development, and IT consulting.
                We are passionate about technology and dedicated to helping you achieve your goals.
            </Typography>
        </Box>
    );
};

export default About;