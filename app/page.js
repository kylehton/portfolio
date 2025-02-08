'use client';

import React, { useState, useEffect } from 'react';
import MenuIcon from "@mui/icons-material/Menu";

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const menuItems = [
    { title: 'experience', delay: 'delay-500', link: '#experience' },
    { title: 'projects', delay: 'delay-300', link: '#projects'},
    { title: 'socials', delay: 'delay-100', link: '#biography'}
  ];

  const images = [
    'images/IMG_0076.JPEG',
    'images/IMG_0028.JPG',
    'images/IMG_0086.JPEG',
    'images/IMG_0088.JPG',
    'images/IMG_0092.JPEG',
    'images/IMG_0133.JPEG'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div id='header' className="flex justify-between items-center ml-12 mt-6">
        <h1 className="font-semibold text-3xl">kyle ton
          <span className="font-normal mx-4 text-zinc-600 ">|</span> 
          <span className="align-middle text-sm font-light text-zinc-500">
           student and software engineer</span>
        </h1>
        <div className="mt-5 mr-12">
          <div className="relative">
            <div className="absolute right-full top-1/2 -translate-y-1/2 flex items-center mr-4">
              {menuItems.map((item, index) => (
                <button
                  key={item.title}
                  href={item.link}
                  className={`
                    mb-[17px] mr-8 text-lg font-normal text-zinc-600
                    transition-all duration-500 ease-in-out
                    ${item.delay}
                    ${isMenuOpen 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-16 pointer-events-none'
                    }
                  `}
                >
                  {item.title}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-10 mb-4 focus:outline-none"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
      <div id="biography" className='flex inline justify-start items-center'>
      <div className='ml-40 mt-12 w-2/6'>
          <h1 className='font-medium text-[24px] mb-6'>hello, i'm . . .</h1>
          <div className='ml-2 space-y-6'>
            <p className='font-light text-sm'>
              kyle ton, a <span className='font-semibold'>sophomore </span> 
               at <span className='font-semibold'>orange coast college</span> studying <span className='font-semibold'>computer science! </span>
              i am an aspiring software engineer with a passion for creating and developing full-stack applications.
            </p>
            <p className='font-light text-sm'>
              i have a large interest in machine learning and ai, particularly in language models and llms.
              i want to one day specialize in <span className='font-semibold'>natural language processing</span> and be able to work on integrating nlp
              alongside machine learning models.
            </p>
            <p className='font-light text-sm'>
              my goal for my career one day is to become a <span className='font-semibold'>full-stack software engineer! </span> 
              i am beginning my full-stack journey building my skillsets and creating new projects. i hope one day, i can 
              transition into machine learning and ai engineer roles and contribute to the advancement of the artificial 
              intelligence sector! please feel free to contact me for anything at all!
            </p>
          </div>
      </div>

      <div id="Image Carousel" className="ml-44 mb-48 w-1/4 h-48 m-6">
        <img 
          src={images[currentImageIndex]} 
          alt={`carousel image ${currentImageIndex + 1}`} 
          className="w-full h-auto max-h-128 rounded-lg border-2 border-zinc-500"
        />
        <p className='mt-1 mr-2 text-xs text-right prestige-elite'>japan 04.2024</p>
      </div>
      </div>
      <div id="experience" className="mt-20">
        <h2>Experience Section</h2>
      </div>
      <div id="socials" className="mt-20">
        <h2>Contacts Section</h2>
      </div>
    </div>
  );
}
