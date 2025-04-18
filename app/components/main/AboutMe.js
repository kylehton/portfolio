'use client';
import ScrollMotionWrapper from "@/app/motion/ScrollMotionWrapper";
import { useState } from "react";

const AboutMe = () => {

    // arrays to hold file names for pics
    const personalContent = [
        "/images/aboutme/personal/IMG_SEASIDE.JPG",
        "/images/aboutme/personal/IMG_0149.jpg",
        "/images/aboutme/personal/IMG_1038.JPG",
        "/images/aboutme/personal/IMG_1123.JPG",
        "/images/aboutme/personal/IMG_1126.JPEG",
        "/images/aboutme/personal/IMG_7622.JPG",
        "/images/aboutme/personal/IMG_8579.JPG",
        "/images/aboutme/personal/IMG_8601.JPG",
        "/images/aboutme/personal/IMG_8879.JPG",
        "/images/aboutme/personal/IMG_NEMO.JPG",
    ];
    const [currentPersonalContent, setCurrentPersonalContent] = useState(0);
    const foodContent = [
        "/images/aboutme/food/IMG_1038.JPG",
    ];
    const [currentFoodContent, setCurrentFoodContent] = useState(0);
    const bookContent = [
        "/images/aboutme/books/IMG_1123.JPG",  
    ];
    const [currentBookContent, setCurrentBookContent] = useState(0);

    return (
        <main id='about-me' className="mb-8 px-4 lg:px-16 py-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                <div className='lg:min-w-full'>
                    <ScrollMotionWrapper 
                        contents={
                            <h1 className="font-medium text-[32px] mb-4">about me</h1>
                        }>
                    </ScrollMotionWrapper>
                    <div className='w-full flex flex-col lg:flex-row'>
                    <ScrollMotionWrapper
                        contents={
                            <div id='about-me-content' className="ml-1 font-light space-y-1">
                                <div id="personal-content" className="lg:w-5/6 space-between flex flex-col">
                                    <div id="personal-content-img" className="">
                                        <img 
                                            src={personalContent[currentPersonalContent]} 
                                            alt={"image here"}
                                            className="lg:w-2/3 w-5/6 h-auto object-cover rounded-lg border-2 border-zinc-500"
                                        />
                                    </div>
                                    <p className='m-2 font-light text-xs text-center w-3/5'>
                                        i like spending time with friends and family, doing whatever really.
                                        also, ive been playing pickleball for the last year and a half throughout college.
                                        lmk if youre down to hit sometime!
                                    </p>
                                    
                                </div>
                            </div>
                        }>
                    </ScrollMotionWrapper>
                    <ScrollMotionWrapper
                        contents={
                            <div id='about-me-content' className="ml-1 font-light space-y-1">
                                <div id="personal-content" className="lg:w-5/6 space-between flex flex-col">
                                    <div id="personal-content-img" className="">
                                        <img 
                                            src={foodContent[currentFoodContent]} 
                                            alt={"image here"}
                                            className="lg:w-2/3 w-5/6 h-auto object-cover rounded-lg border-2 border-zinc-500"
                                        />
                                    </div>
                                    <p className='m-2 font-light text-xs text-center w-3/5'>
                                        i like spending time with friends and family, doing whatever really.
                                        also, ive been playing pickleball for the last year and a half throughout college.
                                        lmk if youre down to hit sometime!
                                    </p>
                                    
                                </div>
                            </div>
                        }>
                    </ScrollMotionWrapper>
                    <ScrollMotionWrapper
                        contents={
                            <div id='about-me-content' className="ml-1 font-light space-y-1">
                                <div id="personal-content" className="lg:w-5/6 space-between flex flex-col">
                                    <div id="personal-content-img" className="">
                                        <img 
                                            src={bookContent[currentBookContent]} 
                                            alt={"image here"}
                                            className="lg:w-2/3 w-5/6 h-auto object-cover rounded-lg border-2 border-zinc-500"
                                        />
                                    </div>
                                    <p className='m-2 font-light text-xs text-center w-3/5'>
                                        i like spending time with friends and family, doing whatever really.
                                        also, ive been playing pickleball for the last year and a half throughout college.
                                        lmk if youre down to hit sometime!
                                    </p>
                                    
                                </div>
                            </div>
                        }>
                    </ScrollMotionWrapper>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default AboutMe;