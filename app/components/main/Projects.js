
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
                    title: "e-commerce spending prediction model",
                    subheading: 'python, scikit-learn, pandas, numpy, matplotlib, seaborn, jupyter notebook',
                    description: [
                      "a linear regression model that predicts the spending of a user based on specific features, such as their time spent on the website",
                      "trained on a kaggle dataset, achieving an r2 score of 0.984 (98.4% accuracy) on the test set",
                      "implemented stochasitc gradient descent to optimize the model's parameters, tested using cross-validation",
                    ],
                    dates: 'apr 2025',
                    deployment: "",
                    github: "https://github.com/kylehton/ml-learning/tree/main/linear-regression",
                    video: ""
                  }}
              />
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