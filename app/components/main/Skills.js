import ScrollMotionWrapper from "../../motion/ScrollMotionWrapper";

const Skills = () => {

    return (
        <main id='skills' className="mb-8 px-4 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className='lg:min-w-full'>
          <ScrollMotionWrapper 
            contents={
              <h1 className="font-medium text-[30px] mb-2">skills</h1>
            }>
          </ScrollMotionWrapper>
              
              <ScrollMotionWrapper 
                contents={
                  <div id='skillset' className="ml-3 font-light text-[15px] space-y-1">
                    <p><b className='font-semibold'>languages:</b> html/css, javascript, python, java, c++, sql</p>
                    <p><b className='font-semibold'>frameworks:</b> rest api, react, express, fastapi, next.js, flask, spring boot</p>
                    <p><b className='font-semibold'>tools/applications:</b> git, firebase, mongodb, postgresql, aws, vercel, docker, redis, postman, visual studio</p>
                    <p><b className='font-semibold'>machine learning:</b> numpy, pandas, matplotlib, seaborn, scikit-learn</p>
                  </div>
                }>
              </ScrollMotionWrapper>         
          </div>
        </div>
      </main>
    );
}

export default Skills;