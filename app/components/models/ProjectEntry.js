import Entry from "../models/Entry";
import ScrollMotionWrapper from "@/app/motion/ScrollMotionWrapper";

const ProjectEntry = ({ content }) => {

    return (
        <div id='project-container'>
            <ScrollMotionWrapper
                contents={
                    <div id="individual-entry">
                        <div id="div-to-hold-headers">
                        <h4 className="font-medium text-[19.5px]">{content.title}</h4>
                        <div className="text-sm grid grid-cols-1 lg:grid-cols-2">
                            <p className="mb-1">{content.subheading}</p>
                            <p className="lg:text-right text-xs">{content.dates}</p>
                        </div>
                        </div>
                        <p 
                        id="job-summary" 
                        className="mt-3 ml-2 lg:w-4/5 font-light text-sm whitespace-pre-line">
                        {content.description}
                        </p>
                        <div className='mt-2 font-light text-[17px] text-zinc-700 flex flex-col lg:flex-row justify-end'>
                            <a className="lg:ml-4 ml-2 mb-1" target='_blank' rel='external noopener noreferrer' href={content.video}>[video demo]</a>
                            <a className="lg:ml-4 ml-2 mb-1" target='_blank' rel='external noopener noreferrer' href={content.deployment}>[live deployment]</a>
                            <a className="lg:ml-4 ml-2 mb-1" target='_blank' rel='external noopener noreferrer' href={content.github}>[github repo]</a>
                        </div>
                    </div>
                }
            />
        </div>
    );
}
export default ProjectEntry;