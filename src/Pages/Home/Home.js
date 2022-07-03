import React from 'react';
import Footer from '../Navbar/Footer';
import Bannar from './Bannar';
import ContactUs from './ContactUs';
import Coures from './Coures';
import Features from './Features';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Coures></Coures>
            <Features></Features>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;