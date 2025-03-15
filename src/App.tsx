import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Box, CssBaseline} from '@mui/material';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';

const App: React.FC = () => {
  
  return (
    <Router>
      <CssBaseline />
      <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <Header />
        <Navbar />
        <Box component='main' sx={{flexGrow: 1, p: 3}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;