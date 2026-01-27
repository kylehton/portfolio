'use client';

import React, { useState, useEffect } from 'react';
import ResumeDownloadButton from '../models/ResumeDownloadButton';

const Intro = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    /*
    const images = [
        'images/intro/japan 04.2024/IMG_0076.JPEG',
        'images/intro/japan 04.2024/IMG_0028.JPG',
        'images/intro/japan 04.2024/IMG_0086.JPEG',
        'images/intro/japan 04.2024/IMG_0088.JPG',
        'images/intro/japan 04.2024/IMG_0092.JPEG',
        'images/intro/japan 04.2024/IMG_0133.JPEG',
        'images/intro/japan 04.2024/IMG_0235.JPG',
        'images/intro/japan 04.2024/IMG_0219.JPG',
        'images/intro/japan 04.2024/IMG_0269.JPEG',
    ];
    */
    const images = [
        "images/intro/korea 11.2025/IMG_0016.JPG",
        "images/intro/korea 11.2025/IMG_0051.JPG",
        "images/intro/korea 11.2025/IMG_0091.JPG",
        "images/intro/korea 11.2025/IMG_0112.JPG",
        "images/intro/korea 11.2025/IMG_0120.JPG",
    ]

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
                                kyle ton, a <span className="font-semibold">junior</span> at
                                <span className="font-semibold"> ucsd</span> studying
                                <span className="font-semibold"> math + computer science!</span> i'm currently
                                learning about making systems more optimized and efficient. i have a passion for creating and developing 
                                full-stack applications, with some cloud computing and machine learning integration.
                            </p>
                            <p className="2xl:font-extralight font-light ">
                                i have a large interest in machine learning and ai, particularly in large
                                language models, and <span className="font-semibold"> integrating ai/ml with software development. </span> 
                                 i just finished interning at foln, where i worked on the devops side of things, 
                                 and took care of the app's initial launch w/ aws and supabase hosting/config + 
                                 integrated stripe subscriptions and payment, among other things!
                            </p>
                            <p className="2xl:font-extralight font-light">
                                my goal for my career one day is to become a
                                <span className="font-semibold"> software engineer! </span> 
                                i also have secondary interests in finance (especially wealth management) 
                                and artficial intelligence/machine learning, and would love to get the opportunity 
                                to work in such environments! if you have any questions or opportunities, or for absolutely any
                                reason at all, please feel free to contact me!
                            </p>
                            <p className="2xl:font-extralight font-light">
                            {"{ "} notion, if you're reading, please hire me {" }"}
                            </p>
                        <ResumeDownloadButton />
                        </div>
                    </div>

                    {/* Image section */}
                    <div className="mt-6 lg:w-2/5 2xl:w-[45%]">
                        <div className="relative aspect-[4/3] w-full max-w-xl mx-auto">
                            <img 
                                src={images[currentImageIndex]} 
                                alt={`carousel image ${currentImageIndex + 1}`} 
                                className="w-full h-full object-cover rounded-lg border-2 border-zinc-500"
                                
                            />
                            <p className="mr-2 mt-2 text-xs text-right font-mono">canon sd700is - {(images[0].split('/'))[2]}</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Intro;