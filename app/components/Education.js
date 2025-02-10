import { Scroll } from "lucide-react";
import ScrollMotionWrapper from "../motion/ScrollMotionWrapper";


const Education = () => {

    return (

        <main id='education' className="px-4 lg:px-12 py-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div>
              <ScrollMotionWrapper 
                contents={
                  <h1 className="font-medium text-3xl mb-8">education</h1>
                }>
              </ScrollMotionWrapper>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <ScrollMotionWrapper 
                    contents={
                      <div id='individual-edu-wrapper'>
                        <div id='div-to-hold-headers'>
                          <h4 className='font-medium text-[17.5px]'>b.s. in computer science &nbsp;[transferring to 4-year university]</h4>
                          <div className='text-sm flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                              <p>orange coast college - costa mesa, ca</p>
                              <p className='mr-2 text-xs'>jun 2023 - aug 2025</p>
                          </div>
                        </div>
                        <div id='div-to-hold-content'>
                          <p id='job-summary' className="mb-10 mt-3 ml-2 lg:w-4/5 font-light text-sm">
                            relevant coursework: object oriented programming, computer architecture and assembly,
                            discrete mathematics, data structures and algorithms, linear algebra, single and 
                            multivariable calculus, differential equations.
                          </p>
                        </div>
                      </div>
                    }>
                  </ScrollMotionWrapper>
                </div>
              </div>
            </div>
          </div>
        </main>
        
    );

}
export default Education;