import Entry from "../models/Entry";
import ScrollMotionWrapper from "../../motion/ScrollMotionWrapper";

const Experience = () => {
  return (
    <main id='experience' className="mb-8 px-4 sm:px-8 lg:px-16 py-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className='lg:min-w-full'>
          <ScrollMotionWrapper 
            contents={
              <h1 className="font-medium text-[32px] lg:mb-6 mb-4">experience</h1>
            }>
          </ScrollMotionWrapper>
          
          <div id='all-experience-wrapper' className="space-y-12">

          <Entry
              content={{
                title: 'ai engineering intern',
                subheading: 'product manager accelerator - remote',
                dates: 'oct 2024 - dec 2024',
                description: ["developed a full-stack application to enhance resumes, using an llm pipeline to analyze and increase industry-specific keywords and relevance.",
                  "also implemented a mongodb database to store and manage resumes, storing over 100 resumes and allowing for efficient retrieval and analysis."
                ]
              }}
            />
              
            <Entry
                content={{
                  title: 'software engineering intern',
                  subheading: 'trace - garden grove, ca',
                  dates: 'aug 2024 - oct 2024',
                  description: ["created automated scripts for camera testing, for version control and calibration, increasing efficiency and accuracy of quality assurance and documentation.",
                    "using baud rates of camera modules, i diagnosed issues in the pre-release module software updates, leading to a more efficient and reliable update-integration process."
                  ]
                }}
            />

            <Entry
              content={{
                title: 'ai trainer - language models',
                subheading: 'dataannotation - remote [part-time]',
                dates: 'jun 2024 - dec 2024',
                description: ["evaluated and improved the accuracy of language model responses in various subjects, including various programming languages, validating performance and consistency."]
              }}
            />

            <Entry
              content={{
                title: 'ai software engineering fellow',
                subheading: 'headstarter ai - remote',
                dates: 'jul 2024 - sep 2024',
                description: ["worked in a group setting, creating full-stack applications with generative ai applications, learning and using various apis and technologies.",
                  "also participated in a hackathon, creating a natural language processing application, parsing and analyzing data from a csv file and classifying it based on sentiment, entering it into a postgresql database."
                ]
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Experience;