import ScrollMotionWrapper from "../../motion/ScrollMotionWrapper";

const Entry = ({ content }) => {
  return (
    <div id='entry-wrapper-container'>
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
              className="mt-3 ml-2 lg:w-4/5 font-light text-sm whitespace-pre-line"
            >
              {content.description}
            </p>
          </div>
        }
      />
    </div>
  );
};

export default Entry;