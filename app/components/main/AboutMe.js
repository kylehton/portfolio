import ScrollMotionWrapper from "@/app/motion/ScrollMotionWrapper";
import { useState } from "react";

const AboutMe = () => {

    // arrays to hold file names for pics
    const personalContent = [];
    const [currentPersonalContent, setCurrentPersonalContent] = useState(0);
    const foodContent = [];
    const [currentFoodContent, setCurrentFoodContent] = useState(0);
    const bookContent = [];
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
                    <ScrollMotionWrapper
                        contents={
                            <div id='about-me-content' className="ml-1 font-light space-y-1">
                                <div id="personal-content" className="flex flex-col lg:flex-row">
                                    <p className='text-[17px]'>
                                        i like spending time with friends and family, doing whatever really.
                                        also, ive been playing pickleball for the last year and a half throughout college.
                                        lmk if youre down to play!
                                    </p>
                                    <div id="personal-content-img" className="">
                                        <img 
                                            src={personalContent[currentPersonalContent]} 
                                            alt={""}
                                            className="w-full h-full object-cover rounded-lg border-2 border-zinc-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        }>
                    </ScrollMotionWrapper>
                </div>
            </div>
        </main>
    );
}
export default AboutMe;