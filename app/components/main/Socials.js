import GitHubCalendar from "react-github-calendar";
import ScrollMotionWrapper from "../../motion/ScrollMotionWrapper";
import { Button } from '@/components/ui/button';


const Socials = () => {

    return (  
        <main id='socials' className="px-4 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className='lg:min-w-full'>
            <ScrollMotionWrapper 
              contents={
                <h1 className="font-medium text-[30px] mb-2">socials 
                  <span className='text-[20px] font-extralight'>&nbsp; [@kylehton]</span>
                </h1>
              }>
            </ScrollMotionWrapper>

            <div className="ml-3 space-y-8">
              <ScrollMotionWrapper 
                contents={
                    <div id='my-social-links' className='flex flex-col font-normal text-[18px] text-zinc-500'> 
                        <a target='_blank' href='https://www.linkedin.com/in/kyle-ton/' className='w-min'>
                            <Button className="bg-[#0A66C2] text-white font-bold py-2 px-4 lg:py-2 lg:px-5 border-2 border-white rounded-md 
                                  shadow-[3px_3px_0px_0px_gray] hover:shadow-[1px_1px_0px_0px_white] hover:translate-x-[2px] 
                                  hover:translate-y-[2px] mt-3 hover:scale-[1.02] hover:bg-[#004182] transition-all mr-4">
                                      linkedin
                            </Button>
                        </a>
                        <a target='_blank' href='https://www.github.com/kylehton/' className='w-min'>
                            <Button className="bg-zinc-700 text-white font-bold py-2 px-5 lg:py-2 lg:px-6 border-2 border-white rounded-md 
                                  shadow-[3px_3px_0px_0px_black] hover:shadow-[1px_1px_0px_0px_white] hover:translate-x-[2px] 
                                  hover:translate-y-[2px] mt-4 hover:scale-[1.02] hover:bg-[#5FA85F] transition-all mr-4">
                                        github
                            </Button>
                        </a>
                        <a target='_blank' href='https://www.devpost.com/kylehton/' className='w-min'>
                            <Button className="bg-[#12394c] text-white font-bold py-2 px-4 lg:py-2 lg:px-5 border-2 border-white rounded-md 
                                    shadow-[3px_3px_0px_0px_#6BD1EC] hover:shadow-[1px_1px_0px_0px_white] hover:translate-x-[2px] 
                                    hover:translate-y-[2px] mt-4 hover:scale-[1.02] hover:bg-[#3BA29D] transition-all mr-4">
                                        devpost
                            </Button>
                        </a>
                    </div>
                }>
              </ScrollMotionWrapper>
              
              <ScrollMotionWrapper 
                contents={
                  <div className="github-calendar-container prestige-elite">
                    <h3 className='text-zinc-800 font-semibold text-xl mt-20 mb-6'>my github contributions</h3>
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