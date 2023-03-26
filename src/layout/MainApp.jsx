import React from 'react';
import { Footer } from '../components/footer/Footer';
import { NavbarWeb } from '../components/NavbarWeb';
import { Body } from './body/Body';
import './MainApp.css';

export const MainApp = () => {
  return (
    <>
    <NavbarWeb/>
    <Body/>
    <Footer/>
    </>
  )
}
