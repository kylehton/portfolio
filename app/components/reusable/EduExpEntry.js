import ScrollMotionWrapper from "../../motion/ScrollMotionWrapper";

const EduExpEntry = ({ content }) => {
  return (
    <div>
      <ScrollMotionWrapper
        contents={
          <div id="individual-exp">
            <div id="div-to-hold-headers">
              <h4 className="font-medium text-[17.5px]">{content.title}</h4>
              <div className="text-sm grid grid-cols-1 lg:grid-cols-2">
                <p>{content.location}</p>
                <p className="lg:text-right text-xs">{content.dates}</p>
              </div>
            </div>
            <p id="job-summary" className="mb-10 mt-3 ml-2 lg:w-4/5 font-light text-sm">
              {content.description}
            </p>
          </div>
        }
      />
    </div>
  );
};

export default EduExpEntry;