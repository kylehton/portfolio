import ScrollMotionWrapper from "../../motion/ScrollMotionWrapper";
import EduExpEntry from "../models/Entry";


const Education = () => {

    return (
      <main id='education' className="mb-8 px-4 sm:px-8 lg:px-16 py-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className='lg:min-w-full'>
          <ScrollMotionWrapper 
            contents={
              <h1 className="font-medium text-[34px] mb-8">education</h1>
            }>
          </ScrollMotionWrapper>
          
          <div id='all-education-wrapper' className="space-y-8">
            <EduExpEntry
              content={{
                title: "bachelor's in computer science [transferring to 4-year university]",
                subheading: 'orange coast college - costa mesa, ca',
                dates: 'jun 2023 - aug 2025',
                description: `relevant coursework: object oriented programming, computer architecture and assembly, discrete mathematics, data structures and algorithms, linear algebra, single and multivariable calculus, differential equations.`
              }}>
            </EduExpEntry>
                
          </div>
        </div>
      </div>
    </main>
        
    );

}
export default Education;