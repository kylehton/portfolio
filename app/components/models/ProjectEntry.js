import Entry from "../models/Entry";
import ScrollMotionWrapper from "@/app/motion/ScrollMotionWrapper";

const ProjectEntry = ({ content }) => {

    return (
        <div id='project-container'>
            <ScrollMotionWrapper
                contents={
                    <div id="individual-entry" className="mb-10 border border-zinc-500 shadow-lg rounded-lg p-4">
                        <div id="div-to-hold-headers">
                        <h4 className="font-medium text-[19.5px]">{content.title}</h4>
                        <div className="text-sm flex flex-col lg:flex-row lg:justify-between">
                            <p className="font-extralight mb-1">{content.subheading}</p>
                            <p className="mr-2 lg:text-right text-xs">{content.dates}</p>
                        </div>
                        </div>
                        <div 
                            id="job-summary"
                            className="mt-3 ml-2 lg:w-4/5 font-light text-sm whitespace-pre-line">
                                {content.description.map((item, index) => (
                                    <p key={index} className="mb-2">
                                    {item}
                                    </p>
                                    ))
                                }
                        </div>
                        <div className='mr-2 mt-4 lg:mt-2 font-light text-[17px] text-zinc-700 flex flex-col lg:flex-row justify-end'>
                            <a className="lg:ml-4 ml-2 mb-3 lg:mb-1" target='_blank' rel='external noopener noreferrer' href={content.video}>
                                <button className="inline-block px-4 py-1.5 text-sm font-medium text-gray-800 bg-gray-100 border rounded-md 
                                shadow-md ease-out hover:bg-gray-200">
                                    video demo
                                </button>
                            </a>
                            <a className="lg:ml-4 ml-2 mb-3 lg:mb-1" target='_blank' rel='external noopener noreferrer' href={content.deployment}>
                            <button className="inline-block px-4 py-1.5 text-sm font-medium text-gray-800 bg-gray-100 border rounded-md 
                                shadow-md ease-out hover:bg-gray-200">
                                    live deployment
                                </button>
                            </a>
                            <a className="lg:ml-4 ml-2 mb-3 lg:mb-1" target='_blank' rel='external noopener noreferrer' href={content.github}>
                            <button className="inline-block px-4 py-1.5 text-sm font-medium text-gray-800 bg-gray-100 border rounded-md 
                                shadow-md ease-out hover:bg-gray-200">
                                    github
                                </button>
                            </a>
                        </div>
                    </div>
                }
            />
        </div>
    );
}
export default ProjectEntry;