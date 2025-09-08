import ScrollMotionWrapper from "../../motion/ScrollMotionWrapper";
import EduExpEntry from "../models/Entry";


const Education = () => {

    return (
      <main id='education' className="mb-8 px-4 sm:px-8 lg:px-16 py-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className='lg:min-w-full'>
          <ScrollMotionWrapper 
            contents={
              <h1 className="font-medium text-[32px] lg:mb-6 mb-4">education</h1>
            }>
          </ScrollMotionWrapper>
          
          <div id='all-education-wrapper' className="space-y-8">
          <EduExpEntry
              content={{
                title: "bachelor's in mathematics and computer science",
                subheading: 'university of california, san diego - la jolla, ca',
                dates: 'aug 2025 - jun 2027',
                description: ["possible minor in data science "]
              }}>
            </EduExpEntry>
            <EduExpEntry
              content={{
                title: "transfers' in computer science",
                subheading: 'orange coast college - costa mesa, ca',
                dates: 'jun 2023 - aug 2025',
                description: ["gpa: 3.7/4.0", "relevant coursework: object oriented programming, computer architecture and assembly, discrete mathematics, data structures and algorithms, linear algebra, single and multivariable calculus, differential equations."]
              }}>
            </EduExpEntry>
            <EduExpEntry
              content={{
                title: "high school diploma",
                subheading: 'la quinta high school - westminster, ca',
                dates: 'sep 2019 - jun 2023',
                description: ["gpa: 3.93/4.0 uw 4.35/4.0 w | rank: 36/550", "awarded seal of biliteracy in spanish."]
              }}>
            </EduExpEntry>
                
          </div>
        </div>
      </div>
    </main>
        
    );

}
export default Education;