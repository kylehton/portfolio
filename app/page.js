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
      <div className="flex justify-between items-center ml-12 mt-6">
        <h1 className="font-semibold text-3xl">kyle ton</h1>
        <div className="mt-6 mr-12">
          {/* Menu Container */}
          <div className="relative">
            {/* Menu Items Container - Absolutely positioned */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 flex items-center mr-4">
              {menuItems.map((item, index) => (
                <button
                  key={item.title}
                  className={`
                    mb-4 mr-6 text-lg font-medium
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
    </div>
  );
}
