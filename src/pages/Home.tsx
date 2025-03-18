import React from 'react';
import {Link} from 'react-router-dom';
import { Typography } from '@mui/material';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <header className="home-header" style={{textAlign: 'center'}}> 
                <Typography variant='h4' fontWeight='bold' style={{color: 'blue'}}>InfiniteTechSolutions</Typography>
                <Typography variant='body1'>Your trusted partner in AI/ML development, web app solutions, and IT consulting</Typography>                
            </header>
            <div style={{textAlign: 'center'}}>
                <img src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt='InfiniteTechSolutions' style={{maxWidth: '100%', height: '200px', margin: 'auto', alignItems: 'center'}} />
            </div>
            <section className='intro'>
                <Typography variant='h5' fontWeight='bold'>Empowering Innovation through Technology</Typography>
                <Typography variant='body1'>
                    At InfiniteTechSolutions, We believe in harnessing the power of cutting-edge technology to drive growth and transformation.
                    Our suite of service includes AI/ML model development, chatbot solutions, web app development, IT consulting, and more.
                    hether you are startup or an enterprise, we offer customized solutions to help you stay ahead in a rapidly evolving digital world.
                </Typography>
            </section>
            <section className='services-preview'>
                <Typography variant='h5' fontWeight='bold'>Our Services</Typography>
                <ul>
                    <li><Link to="/services#ai-ml">AI & ML Model Development</Link></li>
                    <li><Link to="/services#chatbots">Chatbot Development</Link></li>
                    <li><Link to="/services#web-app">Web App Development</Link></li>
                    <li><Link to="/services#it-consulting">IT Consulting</Link></li>
                    <li><Link to="/services#tutoring">Tutoring & Training</Link></li>
                </ul>
            </section>
            <section className='cta'>
                <Typography variant='h6'>Ready to transform your business with the power of technology?</Typography>
                <Link to="/contact" className="cta-btn">Get in touch today</Link>
            </section>
        </div>
    );

};

export default Home;