import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
        <Outlet />
      <Footer />
    </div>
  );
}
