import GitHubCalendar from "react-github-calendar";

export default function Socials() {

    return (

        <main id='socials' className="px-4 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div>
            <h1 className="font-medium text-3xl mb-2">socials 
              <span className='text-xl font-normal'>&nbsp; [click below]
                </span>
                </h1>
              <div className="text-zinc-600 ml-2 space-y-2">
                <div id='my-social-links'>
                <a href='https://www.linkedin.com/in/kyle-ton/' className='font-normal text-[16px]'>linkedin [kylehton]</a>
                <br></br>
                <a href='https://www.github.com/kylehton/' className='font-normal text-[16px]'>github [kylehton]</a>
              </div>

              <div className="github-calendar-container">
                <h3 className='font-semibold text-lg mt-8 mb-2'>My GitHub Contributions</h3>
                <div className="github-data">
                <GitHubCalendar
                  username="kylehton"
                  theme={{
                    dark: ["#d1d5db", "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f7"], // 5 colors
                    light: ["#d1d5db", "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f7"] // 5 colors
                  }}
                />
                </div>
              </div>
              </div>
          </div>
        </div>
      </main>
    );
}