
import ScrollMotionWrapper from "../../motion/ScrollMotionWrapper";

const Projects = () => {

    return (

        <main id='projects' className="px-4 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div>
            <ScrollMotionWrapper 
              contents={
                <h1 className="font-medium text-3xl mb-8">projects</h1>
              }>
            </ScrollMotionWrapper>
            <div className="space-y-8">
              <div className="space-y-4">
                <ScrollMotionWrapper 
                  contents={
                    <div id='individual-project'>
                      <div id='div-to-hold-headers'>
                        <h4 className='font-medium text-[17.5px]'>project in progress</h4>
                        <div className='text-sm flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                            <p>incomplete, will be finished by february?</p>
                            <p className='mr-2 text-xs'></p>
                        </div>
                      </div>
                        <p id='job-summary' className="mb-10 mt-3 ml-2 lg:w-4/5 font-light text-sm">

                        </p>
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

export default Projects;