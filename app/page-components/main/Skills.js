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
                    <p><b className='font-semibold'>languages:</b> html/css, javascript/typescript, python, java, sql</p>
                    <p><b className='font-semibold'>frameworks:</b> rest api, react, express, fastapi, next.js, flask, spring boot, playwright</p>
                    <p><b className='font-semibold'>tools/applications:</b> git, firebase, mongodb, postgresql, pinecone, vercel, docker, redis, postman</p>
                    <p><b className='font-semibold'>cloud (aws):</b> lambda, ec2, s3, dynamodb, sqs, eventbridge pipes, api gateway, cloudfront cdn</p>
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