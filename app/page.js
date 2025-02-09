'use client';

import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-12 py-6">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          {/* Title content */}
          <div className="order-2 lg:order-1 flex items-center mt-6 lg:mt-0">
            <h1 className="font-semibold text-2xl lg:text-3xl">kyle ton</h1>
            <span className="text-xl font-normal mx-4 text-zinc-600">|</span>
            <span className="mt-1 text-sm font-light text-zinc-500">
              student and software engineer
            </span>
          </div>

          {/* Menu Container */}
          <div id="menu-container" className="order-1 lg:order-2 relative flex justify-end lg:block">
            {/* Menu Items */}
            <div className="absolute right-8 lg:right-full top-1/2 -translate-y-1/2 flex items-center lg:mr-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className={`
                    mr-4 lg:mr-8 text-sm lg:text-lg font-normal text-zinc-600
                    transition-all duration-500 ease-in-out
                    ${item.delay}
                    ${isMenuOpen 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-16 pointer-events-none'
                    }
                  `}
                >
                  {item.title}
                </a>
              ))}
            </div>
            
            {/* Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none relative z-10"
              aria-label="Toggle menu"
            >
              <Menu className="mt-2 h-4 w-4 lg:h-6 lg:w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Rest of the content remains unchanged */}
      <main className="px-4 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="lg:w-3/5">
            <h2 className="font-medium text-2xl mb-6">hello, i'm . . .</h2>
            <div className="space-y-6">
              <p className="font-light text-sm">
                kyle ton, a <span className="font-semibold">sophomore</span> at{" "}
                <span className="font-semibold">orange coast college</span> studying{" "}
                <span className="font-semibold">computer science!</span> i am an 
                aspiring software engineer with a passion for creating and developing 
                full-stack applications.
              </p>
              <p className="font-light text-sm">
                i have a large interest in machine learning and ai, particularly in 
                language models and llms. i want to one day specialize in{" "}
                <span className="font-semibold">natural language processing</span> and 
                be able to work on integrating nlp alongside machine learning models.
              </p>
              <p className="font-light text-sm">
                my goal for my career one day is to become a{" "}
                <span className="font-semibold">full-stack software engineer!</span> i 
                am beginning my full-stack journey building my skillsets and creating 
                new projects. i hope one day, i can transition into machine learning 
                and ai engineer roles and contribute to the advancement of the 
                artificial intelligence sector! please feel free to contact me for 
                anything at all!
              </p>
            </div>
          </div>

          <div className="lg:w-2/5">
            <div className="relative aspect-[4/3] w-full max-w-md mx-auto">
              <img 
                src={images[currentImageIndex]} 
                alt={`carousel image ${currentImageIndex + 1}`} 
                className="w-full h-full object-cover rounded-lg border-2 border-zinc-500"
              />
              <p className="mr-2 mt-2 text-xs text-right font-mono">japan 04.2024</p>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
}