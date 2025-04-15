import ScrollMotionWrapper from "@/app/motion/ScrollMotionWrapper";

const AboutMe = () => {

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
                            <div id='about-me-content' className="ml-1 font-light text-[17px] space-y-1">
                                <p>non-cs related personalized about me section coming soon!!!</p>
                            </div>
                        }>
                    </ScrollMotionWrapper>
                </div>
            </div>
        </main>
    );
}
export default AboutMe;