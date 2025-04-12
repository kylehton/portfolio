import ScrollMotionWrapper from "../../motion/ScrollMotionWrapper";

const Skills = () => {

    return (
        <main id='skills' className="px-4 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className='lg:min-w-full'>
          <ScrollMotionWrapper 
            contents={
              <h1 className="font-medium text-3xl mb-2">skills</h1>
            }>
          </ScrollMotionWrapper>
              
              <ScrollMotionWrapper 
                contents={
                  <div id='skillset' className="ml-2 font-light text-[15px] space-y-1">
                    <p><b className='font-semibold'>languages:</b> html/css, javascript, python, java, c++, sql</p>
                    <p><b className='font-semibold'>frameworks:</b> rest api, react, express, fastapi, next.js, flask, spring boot</p>
                    <p><b className='font-semibold'>tools/applications:</b> git, firebase, mongodb, postgresql, aws, vercel, docker, postman, visual studio</p>
                    <p><b className='font-semibold'>libraries:</b> numpy, pandas, matplotlib, tailwind css, material ui, shadcn, framer motion</p>
                  </div>
                }>
              </ScrollMotionWrapper>         
          </div>
        </div>
      </main>
    );
}

export default Skills;