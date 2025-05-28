import React from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;