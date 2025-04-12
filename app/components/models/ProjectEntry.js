import Entry from "../models/Entry";
import ScrollMotionWrapper from "@/app/motion/ScrollMotionWrapper";

const ProjectEntry = ({ content }) => {

    return (
        <div id='project-container'>
            <ScrollMotionWrapper
                contents={
                    <div id="individual-entry">
                        <div id="div-to-hold-headers">
                        <h4 className="font-medium text-[18px]">{content.title}</h4>
                        <div className="text-sm grid grid-cols-1 lg:grid-cols-2">
                            <p>{content.subheading}</p>
                            <p className="lg:text-right text-xs">{content.dates}</p>
                        </div>
                        </div>
                        <p 
                        id="job-summary" 
                        className="mt-3 ml-2 lg:w-4/5 font-light text-sm whitespace-pre-line">
                        {content.description}
                        </p>
                        <div className='m-1 ml-4 font-light text-lg text-zinc-700 flex flex-row space-between lg:w-4-5'>
                            <a className="mr-12" rel='external noopener noreferrer' href={content.video}>[video demo]</a>
                            <a className="mr-12" rel='external noopener noreferrer' href={content.deployment}>[live deployment]</a>
                            <a className="mr-12" rel='external noopener noreferrer' href={content.github}>[github repo]</a>
                        </div>
                    </div>
                }
            />
        </div>
    );
}
export default ProjectEntry;