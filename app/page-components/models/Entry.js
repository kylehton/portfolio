import ScrollMotionWrapper from "../../motion/ScrollMotionWrapper";

const Entry = ({ content }) => {
  return (
    <div id='entry-wrapper-container'>
      <ScrollMotionWrapper
        contents={
          <div id="individual-entry">
            <div id="div-to-hold-headers">
              <h4 className="font-medium text-[19px]">{content.title}</h4>
              <div className="text-sm grid grid-cols-1 lg:grid-cols-2">
                <p className="lg:mb-0 mb-1">{content.subheading}</p>
                <p className="lg:text-right text-xs">{content.dates}</p>
              </div>
            </div>
            <div 
              id="job-summary" 
              className="mt-3 ml-2 lg:w-4/5 font-light text-sm whitespace-pre-line"
            >
              {content.description.map((item, index) => (
                    <p key={index} className="mb-1.5">
                      {item}
                    </p>
                  ))
                
              }

            </div>
          </div>
        }
      />
    </div>
  );
};

export default Entry;