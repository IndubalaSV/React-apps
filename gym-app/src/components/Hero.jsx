import React from 'react';
import Button from './Button';

export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col gap-10 justify-center items-center text-center max-w-[900px] w-full mx-auto p-4">
            <div className='flex flex-col gap-4'>
                <p>IT'S TIME TO GET</p>
                <h1 className='uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Cute<span className='text-blue-400'>normous</span> </h1>
            </div>
            <p className='text-sm md:text-base font-light'>I hereby acknowledge that I may become <span className='text-blue-400 text-medium'>unbelievably cutenormous</span> and accept all risks of becoming the local <span className='text-blue-400 text-medium'>mass montrosity,</span> affected with severe body dismorphia, unable to fit through doors</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={'Accept & Begin'} />
        </div>
    );
}