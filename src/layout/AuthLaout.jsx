import React from 'react';
import Logo from '../components/Logo';
import { Outlet } from 'react-router';
import AuthImg from '../assets/authImage.png'

const AuthLaout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Logo></Logo>
            <div className='flex'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={AuthImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLaout;