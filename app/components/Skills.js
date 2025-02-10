
export default function Skills() {

    return (
        <main id='skills' className="px-4 lg:px-12 py-4">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div>
            <h1 className="font-medium text-3xl mb-2">skills</h1>
            
              <div id='skillset' className="ml-2 font-light text-[15px] space-y-1">
                <p><b className='font-semibold'>languages:</b> html/css, javascript, python, java, c++</p>
                <p><b className='font-semibold'>frameworks:</b> rest api, react, express, fastapi, next.js</p>
                <p><b className='font-semibold'>tools/applications:</b> git, firebase, mongodb, postman, visual studio code</p>
                <p><b className='font-semibold'>libraries:</b> numpy, pandas, matplotlib, tailwind css,</p>
              </div>
          </div>
        </div>
      </main>
    );
}