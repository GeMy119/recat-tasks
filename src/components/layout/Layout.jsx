import React from 'react';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

export default function Layout(props) {
    return (
        <>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </>
    )
}