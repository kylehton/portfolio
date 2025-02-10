'use client';
import { Menu } from 'lucide-react';
import React, { useState } from 'react';


export default function NameAndMenu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { title: 'education', delay: 'delay-500', link: '#education' },
        { title: 'experience', delay: 'delay-300', link: '#experience'},
        { title: 'projects', delay: 'delay-100', link: '#projects'}
    ];

    return (

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
    );
}