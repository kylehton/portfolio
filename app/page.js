'use client';

import React from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from 'react';

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Experience', delay: 'delay-100' },
    { title: 'Projects', delay: 'delay-200' },
    { title: 'Contacts', delay: 'delay-300' }
  ];

  return (
    <div>
      <div id='Header' className="flex justify-between items-center ml-12 mt-6">
        <h1 className="font-semibold text-3xl">kyle ton</h1>
        <div className="mt-6 mr-12">
          <div className="relative">
            <div className="absolute right-full top-1/2 -translate-y-1/2 flex items-center mr-4">
              {menuItems.map((item, index) => (
                <button
                  key={item.title}
                  className={`
                    mb-4 mr-8 text-lg font-medium
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
            
            {/* Menu Icon */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-10 mb-4 focus:outline-none"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
      <div id='Biography' className='ml-20 mt-10 w-2/6'>
          <h1 className='font-medium text-2xl mb-6'>hello, i'm . . .</h1>
          <div className='ml-2 space-y-6'>
            <p className='font-normal text-sm'>
              kyle ton, a student at orange coast college studying computer science!
              i am an aspiring software engineer with a passion for creating and developing full-stack applications.
            </p>
            <p className='font-normal text-sm'>
              i have a large interest in machine learning and ai, particularly in language models and llms.
              i want to one day specialize in natural language processing and be able to work on integrating nlp
              alongside machine learning models.
            </p>
            <p className='font-normal text-sm'>
              my goal for my career one day is to become a full-stack software engineer! i am beginning my full-stack journey,
              building my skillsets and creating new projects! i hope one day, i can transition into machine learning and ai
              engineer roles and make my mark on the tech industry! please feel free to contact me for anything at all!
            </p>
          </div>
      </div>
    </div>
  );
}