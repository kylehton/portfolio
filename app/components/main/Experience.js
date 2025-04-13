import Entry from "../models/Entry";
import ScrollMotionWrapper from "../../motion/ScrollMotionWrapper";

const Experience = () => {
  return (
    <main id='experience' className="mb-8 px-4 sm:px-8 lg:px-16 py-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className='lg:min-w-full'>
          <ScrollMotionWrapper 
            contents={
              <h1 className="font-medium text-[34px] mb-8">experience</h1>
            }>
          </ScrollMotionWrapper>
          
          <div id='all-experience-wrapper' className="space-y-12">
              
            <Entry
                content={{
                  title: 'software engineering intern',
                  subheading: 'trace - garden grove, ca',
                  dates: 'aug 2024 - jan 2025',
                  description: `streamlined camera version tracking by automating python-based version control logging, improving documentation accuracy for 100+ devices. 
                                reduced manual troubleshooting time by 40% by developing a remote camera control script with paramiko ssh, enabling faster connectivity testing.`
                }}
            />

            <Entry
              content={{
                title: 'ai engineering intern',
                subheading: 'product manager accelerator - remote',
                dates: 'oct 2024 - dec 2024',
                description: `increased resume keyword relevance by 15% by developing a full-stack resume enhancement application that applied trend analysis and ai-driven keyword optimization.
                              improved resume clarity by 20% by implementing a custom rag-based ai agent that retrieved relevant resume suggestions from proprietary datasets.
                              reduced backend processing time by 30% by configuring celery and redis for asynchronous task handling in a fastapi microservice.
                              designed a scalable document storage system by structuring mongodb documents with google id, efficiently managing over 100 stored resumes.`,
              }}
            />

            <Entry
              content={{
                title: 'ai trainer - language models',
                subheading: 'dataannotation - remote [part-time]',
                dates: 'jun 2024 - dec 2024',
                description: `trained over 200 generative ai small language models (slms) on diverse datasets to boost output relevance.
                              performed code evaluations in multiple languages, refining algorithms to enhance response accuracy and correctness.`
              }}
            />

            <Entry
              content={{
                title: 'ai software engineering fellow',
                subheading: 'headstarter ai - remote',
                dates: 'jul 2024 - sep 2024',
                description: `completed hands-on projects applying full-stack development concepts with react, firebase, and next.js, showcasing collaborative coding and ai integration. acquired experience using a variety of apis, such as openai api and stripe api`
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Experience;