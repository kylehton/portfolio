'use client';
import ScrollMotionWrapper from "@/app/motion/ScrollMotionWrapper";
import { useState } from "react";
import BookRecForm from "../models/BookRecForm";
import { AboutTabs } from "../models/AboutMeTabs";

import  PictureCarousel  from "../models/pictureCarousel";

const AboutMe = () => {

    // arrays to hold file names for pics
    const personalContent = [
        "/images/aboutme/personal/burlington.jpeg",
        "/images/aboutme/personal/christmas.jpeg",
        "/images/aboutme/personal/famjapan.jpeg",
        "/images/aboutme/personal/gentlemonster.jpeg",
        "/images/aboutme/personal/kbbq.jpeg",
        "/images/aboutme/personal/nemo.jpeg",
        "/images/aboutme/personal/pizza.jpeg",
        "/images/aboutme/personal/seaside.jpeg",
        "/images/aboutme/personal/thesource.jpeg",
        "/images/aboutme/personal/venicebeach.jpeg",
    ];
    const foodContent = [
        "/images/aboutme/food/IMG_1038.JPG",
    ];
    const bookContent = [
        "/images/aboutme/books/bookshelf.jpeg",  
    ];
    const [currentBookContent, setCurrentBookContent] = useState(0);

    return (
        <main id='about-me' className="mb-8 px-4 lg:px-16 py-8">
            <div className="jflex flex-col lg:flex-row gap-8 lg:gap-16">
                <div className='lg:min-w-full'>
                    <ScrollMotionWrapper 
                        contents={
                            <h1 className="font-medium text-[32px] lg:mb-6 mb-4">about me</h1>
                        }>
                    </ScrollMotionWrapper>
                    <div className='mt-4 lg:mt-8 w-full flex flex-col lg:flex-row mb-12 items-center justify-center'>
                        <ScrollMotionWrapper
                            contents={
                            <div className="flex flex-col items-center text-center space-y-2 w-full">
                                <AboutTabs />

                            </div>
                            }
                        />
                    </div>   
                </div>
            </div>
        </main>
    );
}
export default AboutMe;