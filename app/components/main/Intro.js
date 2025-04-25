'use client';

import React, { useState, useEffect } from 'react';
import ResumeDownloadButton from '../models/ResumeDownloadButton';
import Image from 'next/image';

const Intro = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        'images/intro/IMG_0076.JPEG',
        'images/intro/IMG_0028.JPG',
        'images/intro/IMG_0086.JPEG',
        'images/intro/IMG_0088.JPG',
        'images/intro/IMG_0092.JPEG',
        'images/intro/IMG_0133.JPEG',
        'images/intro/IMG_0235.JPG',
        'images/intro/IMG_0219.JPG',
        'images/intro/IMG_0269.JPEG',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id='intro-wrapper'>
            <main id='biography' className="px-4 pt-10 sm:py-4 md:py-6 sm:mt-2 sm:px-28 lg:px-16">
                <div className="2xl:ml-6 mb-10 flex flex-col lg:flex-row gap-8 lg:gap-16">
                    <div className="lg:w-3/5"> 
                        <h2 className="2xl:text-3xl font-medium text-[32px] mb-6 2xl:mb-12">hello, i'm . . .</h2> {/* Increased margin bottom for 2xl */}
                        <div className="text-sm 2xl:text-lg space-y-6 max-w-prose">
                            <p className="2xl:font-extralight font-light">
                                kyle ton, a <span className="font-semibold">sophomore</span> at
                                <span className="font-semibold"> orange coast college</span> studying
                                <span className="font-semibold"> computer science!</span> i am an 
                                aspiring software engineer with a passion for creating and developing 
                                full-stack applications.
                            </p>
                            <p className="2xl:font-extralight font-light ">
                                i have a large interest in machine learning and ai, particularly in 
                                language models and llms. i hope, one day, to specialize in
                                <span className="font-semibold"> natural language processing</span> and 
                                be able to work on integrating machine learning with software development,
                                or even directly contribute to the advancement of the field itself!
                            </p>
                            <p className="2xl:font-extralight font-light">
                                my goal for my career one day is to become a
                                <span className="font-semibold"> full-stack software engineer!</span> i 
                                am beginning my full-stack journey building my skillsets and creating 
                                new projects. i hope one day, i can transition into machine learning 
                                and ai engineer roles and contribute to the advancement of the 
                                artificial intelligence sector! please feel free to contact me for 
                                anything at all!
                            </p>
                        <ResumeDownloadButton />
                        </div>
                    </div>

                    {/* Image section */}
                    <div className="mt-6 lg:w-2/5 2xl:w-[45%]">
                        <div className="relative aspect-[4/3] w-full max-w-xl mx-auto">
                            <Image 
                                src={images[currentImageIndex]} 
                                alt={`carousel image ${currentImageIndex + 1}`} 
                                className="w-full h-full object-cover rounded-lg border-2 border-zinc-500"
                                width={525}
                                height={400}
                            />
                            <p className="mr-2 mt-2 text-xs text-right font-mono">canon sd700is - japan 04.2024</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Intro;