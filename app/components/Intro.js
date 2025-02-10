'use client';

import React, { useState, useEffect } from 'react';

export default function Intro() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        'images/IMG_0076.JPEG',
        'images/IMG_0028.JPG',
        'images/IMG_0086.JPEG',
        'images/IMG_0088.JPG',
        'images/IMG_0092.JPEG',
        'images/IMG_0133.JPEG',
        'images/IMG_0235.JPG',
        'images/IMG_0219.JPG',
        'images/IMG_0269.JPEG',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
    <div id='intro-wrapper'>
      {/* Rest of the content remains unchanged */}
      <main id='biography' className="px-4 lg:px-12 py-8">
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
