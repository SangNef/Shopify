import React from 'react';

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
    return (
      <footer className="flex top-[100%] h-20 bg-green-400 text-lg w-full text-white">
        <p className='flex w-full items-center justify-center text-xl'>&copy; {year} All Rights Reserved</p>
      </footer>
    );
};

export default Footer;