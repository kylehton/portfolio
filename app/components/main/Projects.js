
import ScrollMotionWrapper from "../../motion/ScrollMotionWrapper";
import ProjectEntry from "../models/ProjectEntry";

const Projects = () => {

    return (

        <main id='projects' className="mb-8 px-4 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className='lg:min-w-full'>
          <ScrollMotionWrapper 
            contents={
              <h1 className="font-medium text-[32px] lg:mb-6 mb-4">projects</h1>
            }>
          </ScrollMotionWrapper>
          <div id='all-projects-wrapper'>
              <ProjectEntry
                  content={{
                    title: "stocksense",
                    subheading: 'next.js, spring boot, postgresql, tailwind css, shadcn, google oauth2.0, aws s3, docker, redis, vercel, railway.app',
                    description: [
                      "a full stack application that displays stock information and stock data visualization. it gathers information based on user input and displays stock numerical data and a chart visualization. using sentiment analysis, it gathers recent related news and articles and analyzes them for a positive/negative rating.", 
                      "the idea came from me trying to get a more holistic understanding of the market to try and keep my roth ira a net positive (unsuccessful so far)",
                      "MVP deployed version is up! (side note: it is not the prettiest thing in the world, but it works; will be touching up the UI and edge case handling soon)",
                    ],
                    dates: 'feb 2025 - apr 2025',
                    deployment: "https://stock-sense-client.vercel.app",
                    github: "https://github.com/kylehton/StockSense",
                    video: "https://www.youtube.com/watch?v=example"
                  }}
                />
              </div>
              </div>
            </div>
        </main>
    );
}

export default Projects;