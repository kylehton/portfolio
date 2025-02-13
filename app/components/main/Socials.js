import GitHubCalendar from "react-github-calendar";
import ScrollMotionWrapper from "../../motion/ScrollMotionWrapper";

const Socials = () => {

    return (

        <main id='socials' className="px-4 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className='lg:min-w-full'>
            <ScrollMotionWrapper 
              contents={
                <h1 className="font-medium text-3xl mb-2">socials 
                  <span className='text-xl font-normal'>&nbsp; [click below]</span>
                </h1>
              }>
            </ScrollMotionWrapper>

            <div className="ml-2 space-y-8">

              <ScrollMotionWrapper 
                contents={
                    <div id='my-social-links' className='text-zinc-500'>
                    <a href='https://www.linkedin.com/in/kyle-ton/' className='font-normal text-[18px]'>linkedin [kylehton]</a>
                    <br></br>
                    <a href='https://www.github.com/kylehton/' className='font-normal text-[18px]'>github [kylehton]</a>
                    </div>
                }>
              </ScrollMotionWrapper>
              
              <ScrollMotionWrapper 
                contents={
                  <div className="github-calendar-container prestige-elite">
                    <h3 className='text-zinc-800 font-semibold text-xl mt-16 mb-6'>my github contributions</h3>
                    <div className="text-zinc-700 github-calendar">
                      <GitHubCalendar
                        username="kylehton"
                        theme={{
                          dark: ["#d1d5db", "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f7"], // 5 colors
                          light: ["#d1d5db", "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f7"] // 5 colors
                        }}
                      />
                    </div>
                  </div>
                }>
              </ScrollMotionWrapper>

            </div>
          </div>
        </div>
      </main>
    );
}

export default Socials;