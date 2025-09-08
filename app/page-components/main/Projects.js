
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
                        title: "syllabify",
                        subheading: 'openai api, next.js, node.js, google calendar api, google oauth 2.0',
                        description: [
                          "my tool for deconstructing syllabi for class information and assignment/exam scheduling",
                          "plan on introducing more features, like a chatbot + building a better dashboard for multiple classes",
                          "currently uses local storage to store single-class syllabus schedule"
                        ],
                        dates: 'sep 2025',
                        deployment: "",
                        github: "https://github.com/kylehton/Syllabify",
                        video: ""
                      }}
                  />
                <ProjectEntry
                      content={{
                        title: "git-support-hub",
                        subheading: 'openai api, fastapi, langchain, mongodb, github documentation',
                        description: [
                          "specialized customer support multi-agentic system for github basics, that uses langchain + rag, built on openai api (gpt-4o-mini)",
                          "creates embeddings via open source embedding model (all-minilm-l6-v2), storing and searching using mongodb and atlas search",
                        ],
                        dates: 'aug 2025',
                        deployment: "",
                        github: "https://github.com/kylehton/AI-Customer-Support-Agent",
                        video: ""
                      }}
                  />
                  <ProjectEntry
                      content={{
                        title: "matchpointai",
                        subheading: 'numpy, pandas, scikit-learn, fastapi, next.js (typescript), postgresql (neon), aws lambda, docker, vercel',
                        description: [
                          "a full stack machine learning application that uses xgboost to predict the likelihood of a tennis match outcome",
                          "feature engineered custom player stats using historical tennis match data",
                          "inspired by me playing tennis and wanting to know whether prime federer would beat alcaraz and/or sinner",
                          "estimated at ~68% accuracy"
                        ],
                        dates: 'may 2025 - jun 2025',
                        deployment: "https://match-point-ai.vercel.app/",
                        github: "https://github.com/kylehton/MatchPointAI",
                        video: ""
                      }}
                  />
                  <ProjectEntry
                      content={{
                        title: "git-lint v2",
                        subheading: 'python, fastapi, github webhooks, openai api (gpt-4o-mini + text-embedding-3-small), pinecone db, docker, aws lambda + s3',
                        description: [
                          "a little play on eslint, but for github code diffs + syntax review + security vulnerability analysis",
                          "an openai agent system that uses gpt-4o-mini to review github code diffs and provide a code review, hosted on fastapi",
                          "also auto-updates embeddings with changes from the diffs",
                          "implemented rag with pinecone db and openai text-embedding-3-small to provide context to model for better code reviews, with codebase embedding hashes stored in s3 for validation",
                          "version 1 upgraded to v2, Chat Completions API -> OpenAI Agent SDK + Assistants API"
                        ],
                        dates: 'may 2025 - jun 2025',
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
          </div>
        </main>
    );
}

export default Projects;