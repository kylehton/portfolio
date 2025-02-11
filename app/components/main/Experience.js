import EduExpEntry from "../reusable/EduExpEntry";
import ScrollMotionWrapper from "../../motion/ScrollMotionWrapper";

const Experience = () => {
  return (
    <main id='experience' className="px-4 lg:px-12 py-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div>
          <ScrollMotionWrapper 
            contents={
              <h1 className="font-medium text-3xl mb-8">experience</h1>
            }>
          </ScrollMotionWrapper>
          
          <div id='all-experience-wrapper' className="space-y-8">
              
            <EduExpEntry
              content={{
                title: 'software engineering intern',
                location: 'trace - garden grove, ca',
                dates: 'aug 2024 - jan 2025',
                description: 'automated version control by scripting python-based automation to extract camera version numbers for documentation and maintainability. developed a remote camera control script using paramiko ssh connections for user-initiated commands, enhancing connectivity testing workflows by 20%.'
              }}>
            </EduExpEntry>
                
            <EduExpEntry
              content={{
                title: 'ai engineering intern',
                location: 'product manager accelerator - remote',
                dates: 'oct 2024 - dec 2024',
                description: 'developed a full-stack resume enhancement application tailored for product management, implementing trend analysis and keyword optimization.\nbuilt a fastapi microservice with generative ai using prompt engineering to request resume suggestions.\nstored resume contents in a non-relational database using user\'s google id as the document id.\nleveraged a custom agent that uses blockchain llms with retrieval augmented generation (rag) with custom datasets to optimize resume improvements.\noptimized backend processes by configuring celery and redis for asynchronous task-queue handling; deployed and managed on heroku.'
              }}>
            </EduExpEntry>
                
            <EduExpEntry
              content={{
                title: 'ai trainer - language models',
                location: 'dataannotation - remote [part-time]',
                dates: 'jun 2024 - dec 2024',
                description: 'automated version control by scripting python-based automation to extract camera version numbers for documentation and maintainability. developed a remote camera control script using paramiko ssh connections for user-initiated commands, enhancing connectivity testing workflows by 20%.'
              }}>
            </EduExpEntry>

            <EduExpEntry
              content={{
                title: 'ai software engineering fellow',
                location: 'headstarter ai - remote',
                dates: 'jul 2024 - sep 2024',
                description: 'completed hands-on projects applying full-stack development concepts with react, firebase, and next.js, showcasing collaborative coding and ai integration. acquired experience using a variety of apis, such as openai api and stripe'
              }}>
            </EduExpEntry>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Experience;