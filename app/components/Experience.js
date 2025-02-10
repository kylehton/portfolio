
export default function Experience() {

    return (
        <main id='experience' className="px-4 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div>
            <h1 className="font-medium text-3xl mb-8">experience</h1>
            <div className="space-y-8">
              <div className="space-y-4">
                <div id='individual-exp'>
                  <div id='div-to-hold-headers'>
                    <h4 className='font-medium text-[17.5px]'>software engineering intern</h4>
                    <div className='text-sm flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                        <p>trace - garden grove, ca</p>
                        <p className='mr-2 text-xs'>aug 2024 - jan 2025</p>
                    </div>
                  </div>
                    <p id='job-summary' className="mb-10 mt-3 ml-2 lg:w-4/5 font-light text-sm">
                    automated version control by scripting python-based automation to extract camera version numbers for documentation and maintainability.
                    developed a remote camera control script using paramiko ssh connections for user-initiated commands, enhancing connectivity testing workflows by 20%.
                    </p>
                </div>
                <div id='individual-exp'>
                  <div id='div-to-hold-headers'>
                    <h4 className='font-medium text-[17.5px]'>ai engineering intern</h4>
                    <div className='text-sm flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                        <p>product manager accelerator - remote</p>
                        <p className='mr-2 text-xs'>oct 2024 - dec 2024</p>
                    </div>
                  </div>
                    <p id='job-summary' className="mb-10 mt-3 ml-2 lg:w-4/5 font-light text-sm">
                      developed a full-stack resume enhancement application tailored for product management, implementing trend analysis and keyword optimization.
                      <br></br>built a fastapi microservice with generative ai using prompt engineering to request resume suggestions.
                      <br></br>stored resume contents in a non-relational database using user's google id as the document id.
                      <br></br>leveraged a custom agent that uses blockchain llms with retrieval augmented generation (rag) with custom datasets to optimize resume improvements.
                      <br></br>optimized backend processes by configuring celery and redis for asynchronous task-queue handling; deployed and managed on heroku.
                    </p>
                </div>
                <div id='individual-exp'>
                  <div id='div-to-hold-headers'>
                    <h4 className='font-medium text-[17.5px]'>ai trainer - language models</h4>
                    <div className='text-sm flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                        <p>dataannotation - remote [part-time]</p>
                        <p className='mr-2 text-xs'>jun 2024 - dec 2024</p>
                    </div>
                  </div>
                    <p id='job-summary' className="mb-10 mt-3 ml-2 lg:w-4/5 font-light text-sm">
                    automated version control by scripting python-based automation to extract camera version numbers for documentation and maintainability.
                    developed a remote camera control script using paramiko ssh connections for user-initiated commands, enhancing connectivity testing workflows by 20%.
                    </p>
                </div>
                <div id='individual-exp'>
                  <div id='div-to-hold-headers'>
                    <h4 className='font-medium text-[17.5px]'>ai software engineering fellow</h4>
                    <div className='text-sm flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                        <p>headstarter ai - remote</p>
                        <p className='mr-2 text-xs'>jul 2024 - sep 2024</p>
                    </div>
                  </div>
                    <p id='job-summary' className="mb-10 mt-3 ml-2 lg:w-4/5 font-light text-sm">
                    completed hands-on projects applying full-stack development concepts with react, firebase, and next.js, showcasing collaborative coding and ai integration.
                    acquired experience using a variety of apis, such as openai api and stripe
                    </p>
                </div>

              </div>
            </div>
          </div>
        </div>
        </main>
    );
}