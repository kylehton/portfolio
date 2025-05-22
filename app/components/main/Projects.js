
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
            <div className="flex flex-col gap-8">
              <ProjectEntry
                  content={{
                    title: "matchpointai",
                    subheading: 'python, react, tailwind css, scikit-learn, pandas, numpy, jupyter notebook',
                    description: [
                      "project is still under construction",
                      "a full stack machine learning application that uses xgboost to predict the likelihood of a tennis match outcome",
                      "feature engineered custom player stats using historical tennis match data",
                      "inspired by me playing tennis and wanting to know whether prime federer would beat alcaraz and/or sinner",
                    ],
                    dates: 'may 2025 - present',
                    deployment: "",
                    github: "https://github.com/kylehton/MatchPointAI",
                    video: ""
                  }}
              />
              </div>
              <ProjectEntry
                  content={{
                    title: "git-lint",
                    subheading: 'python, fastapi, github webhooks, openai api (gpt-4o-mini + text-embedding-3-small), pinecone db, docker, aws ec2 + s3',
                    description: [
                      "a little play on eslint, but for github code diffs + syntax review + security vulnerability analysis",
                      "an automated fastapi service that reviews github pull requests and analyzes the code for security vulnerabilities, performance issues, and code quality, using gpt-4o-mini",
                      "also auto-updates embeddings with changes from the diffs",
                      "implemented rag with pinecone db and openai text-embedding-3-small to provide context to model for better code reviews, with codebase embeddings stored in s3",
                    ],
                    dates: 'may 2025',
                    deployment: "",
                    github: "https://github.com/kylehton/Git-Lint",
                    video: ""
                  }}
              />
              <ProjectEntry
                  content={{
                    title: "stocksense",
                    subheading: 'next.js, spring boot, postgresql, tailwind css, shadcn, google oauth2.0, aws s3, docker, redis, vercel, railway.app',
                    description: [
                      "note: deployment is down -> railway.app free trial credits expired. i am working on getting the deployment back up soon",
                      "a full stack application that displays stock information and stock data visualization. it gathers information based on user input and displays stock numerical data and a chart visualization. using sentiment analysis, it gathers recent related news and articles and analyzes them for a positive/negative rating.", 
                      "the idea came from me trying to get a more holistic understanding of the market to try and keep my roth ira a net positive (unsuccessful so far)",
                    ],
                    dates: 'feb 2025 - apr 2025',
                    deployment: "https://stock-sense-client.vercel.app",
                    github: "https://github.com/kylehton/StockSense",
                    video: "https://youtu.be/O8MnoRQEqNk"
                  }}
              />
                
              </div>
              </div>
            </div>
        </main>
    );
}

export default Projects;