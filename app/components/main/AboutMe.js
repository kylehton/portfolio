'use client';
import ScrollMotionWrapper from "@/app/motion/ScrollMotionWrapper";
import { AboutTabs } from "../models/AboutMeTabs";


const AboutMe = () => {

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