'use client';

import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import GitHubCalendar from "react-github-calendar";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const menuItems = [
    { title: 'education', delay: 'delay-500', link: '#education' },
    { title: 'experience', delay: 'delay-300', link: '#experience'},
    { title: 'projects', delay: 'delay-100', link: '#projects'}
  ];

  const images = [
    'images/IMG_0076.JPEG',
    'images/IMG_0028.JPG',
    'images/IMG_0086.JPEG',
    'images/IMG_0088.JPG',
    'images/IMG_0092.JPEG',
    'images/IMG_0133.JPEG'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-12 py-6">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          {/* Title content */}
          <div className="order-2 lg:order-1 flex items-center mt-6 lg:mt-0">
            <h1 className="font-semibold text-2xl lg:text-3xl">kyle ton</h1>
            <span className="text-xl font-normal mx-4 text-zinc-600">|</span>
            <span className="mt-1 text-sm font-light text-zinc-500">
              student and software engineer
            </span>
          </div>

          {/* Menu Container */}
          <div id="menu-container" className="order-1 lg:order-2 relative flex justify-end lg:block">
            {/* Menu Items */}
            <div className="absolute right-8 lg:right-full top-1/2 -translate-y-1/2 flex items-center lg:mr-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className={`
                    mr-4 lg:mr-8 text-sm lg:text-lg font-normal text-zinc-600
                    transition-all duration-500 ease-in-out
                    ${item.delay}
                    ${isMenuOpen 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-16 pointer-events-none'
                    }
                  `}
                >
                  {item.title}
                </a>
              ))}
            </div>
            
            {/* Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none relative z-10"
              aria-label="Toggle menu"
            >
              <Menu className="mt-2 h-4 w-4 lg:h-6 lg:w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Rest of the content remains unchanged */}
      <main id='biography' className="px-4 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="lg:w-3/5">
            <h2 className="font-medium text-2xl mb-6">hello, i'm . . .</h2>
            <div className="space-y-6">
              <p className="font-light text-sm">
                kyle ton, a <span className="font-semibold">sophomore</span> at{" "}
                <span className="font-semibold">orange coast college</span> studying{" "}
                <span className="font-semibold">computer science!</span> i am an 
                aspiring software engineer with a passion for creating and developing 
                full-stack applications.
              </p>
              <p className="font-light text-sm">
                i have a large interest in machine learning and ai, particularly in 
                language models and llms. i want to one day specialize in{" "}
                <span className="font-semibold">natural language processing</span> and 
                be able to work on integrating nlp alongside machine learning models.
              </p>
              <p className="font-light text-sm">
                my goal for my career one day is to become a{" "}
                <span className="font-semibold">full-stack software engineer!</span> i 
                am beginning my full-stack journey building my skillsets and creating 
                new projects. i hope one day, i can transition into machine learning 
                and ai engineer roles and contribute to the advancement of the 
                artificial intelligence sector! please feel free to contact me for 
                anything at all!
              </p>
            </div>
          </div>

          <div className="lg:w-2/5">
            <div className="relative aspect-[4/3] w-full max-w-md mx-auto">
              <img 
                src={images[currentImageIndex]} 
                alt={`carousel image ${currentImageIndex + 1}`} 
                className="w-full h-full object-cover rounded-lg border-2 border-zinc-500"
              />
              <p className="mr-2 mt-2 text-xs text-right font-mono">japan 04.2024</p>
            </div>
          </div>
        </div>
      </main>

      <main id='education' className="px-4 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div>
            <h1 className="font-medium text-3xl mb-8">education</h1>
            <div className="space-y-8">
              <div className="space-y-4">
                <div id='individual-edu'>
                  <div id='div-to-hold-headers'>
                    <h4 className='font-medium text-[17.5px]'>b.s. in computer science &nbsp;[transferring to 4-year university]</h4>
                    <div className='text-sm flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                        <p>orange coast college - costa mesa, ca</p>
                        <p className='mr-2 text-xs'>jun 2023 - aug 2025</p>
                    </div>
                  </div>
                    <p id='job-summary' className="mb-10 mt-3 ml-2 lg:w-4/5 font-light text-sm">
                    relevant coursework: object oriented programming, computer architecture and assembly,
                    discrete mathematics, data structures and algorithms, linear algebra, single and 
                    multivariable calculus, differential equations.
                    </p>
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </main>
      
      <main id='experience' className="px-4 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div>
            <h1 className="font-medium text-3xl mb-8">experience</h1>
            <div className="space-y-8">
              <div className="space-y-4">
                <div id='individual-exp'>
                  <div id='div-to-hold-headers'>
                    <h4 className='font-medium text-[17.5px]'>software engineering intern</h4>
                    <div className='text-sm flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                        <p>trace - garden grove, ca</p>
                        <p className='mr-2 text-xs'>aug 2024 - jan 2025</p>
                    </div>
                  </div>
                    <p id='job-summary' className="mb-10 mt-3 ml-2 lg:w-4/5 font-light text-sm">
                    automated version control by scripting python-based automation to extract camera version numbers for documentation and maintainability.
                    developed a remote camera control script using paramiko ssh connections for user-initiated commands, enhancing connectivity testing workflows by 20%.
                    </p>
                </div>
                <div id='individual-exp'>
                  <div id='div-to-hold-headers'>
                    <h4 className='font-medium text-[17.5px]'>ai engineering intern</h4>
                    <div className='text-sm flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                        <p>product manager accelerator - remote</p>
                        <p className='mr-2 text-xs'>oct 2024 - dec 2024</p>
                    </div>
                  </div>
                    <p id='job-summary' className="mb-10 mt-3 ml-2 lg:w-4/5 font-light text-sm">
                      developed a full-stack resume enhancement application tailored for product management, implementing trend analysis and keyword optimization.
                      <br></br>built a fastapi microservice with generative ai using prompt engineering to request resume suggestions.
                      <br></br>stored resume contents in a non-relational database using user's google id as the document id.
                      <br></br>leveraged a custom agent that uses blockchain llms with retrieval augmented generation (rag) with custom datasets to optimize resume improvements.
                      <br></br>optimized backend processes by configuring celery and redis for asynchronous task-queue handling; deployed and managed on heroku.
                    </p>
                </div>
                <div id='individual-exp'>
                  <div id='div-to-hold-headers'>
                    <h4 className='font-medium text-[17.5px]'>ai trainer - language models</h4>
                    <div className='text-sm flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                        <p>dataannotation - remote [part-time]</p>
                        <p className='mr-2 text-xs'>jun 2024 - dec 2024</p>
                    </div>
                  </div>
                    <p id='job-summary' className="mb-10 mt-3 ml-2 lg:w-4/5 font-light text-sm">
                    automated version control by scripting python-based automation to extract camera version numbers for documentation and maintainability.
                    developed a remote camera control script using paramiko ssh connections for user-initiated commands, enhancing connectivity testing workflows by 20%.
                    </p>
                </div>
                <div id='individual-exp'>
                  <div id='div-to-hold-headers'>
                    <h4 className='font-medium text-[17.5px]'>ai software engineering fellow</h4>
                    <div className='text-sm flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                        <p>headstarter ai - remote</p>
                        <p className='mr-2 text-xs'>jul 2024 - sep 2024</p>
                    </div>
                  </div>
                    <p id='job-summary' className="mb-10 mt-3 ml-2 lg:w-4/5 font-light text-sm">
                    completed hands-on projects applying full-stack development concepts with react, firebase, and next.js, showcasing collaborative coding and ai integration.
                    acquired experience using a variety of apis, such as openai api and stripe
                    </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      <main id='projects' className="px-4 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div>
            <h1 className="font-medium text-3xl mb-8">projects</h1>
            <div className="space-y-8">
              <div className="space-y-4">
                <div id='individual-project'>
                  <div id='div-to-hold-headers'>
                    <h4 className='font-medium text-[17.5px]'>project in progress</h4>
                    <div className='text-sm flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                        <p>incomplete, will be finished by february?</p>
                        <p className='mr-2 text-xs'></p>
                    </div>
                  </div>
                    <p id='job-summary' className="mb-10 mt-3 ml-2 lg:w-4/5 font-light text-sm">

                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main id='skills' className="px-4 lg:px-12 py-4">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div>
            <h1 className="font-medium text-3xl mb-2">skills</h1>
            
              <div id='skillset' className="ml-2 font-light text-[15px] space-y-1">
                <p><b className='font-semibold'>languages:</b> html/css, javascript, python, java, c++</p>
                <p><b className='font-semibold'>frameworks:</b> rest api, react, express, fastapi, next.js</p>
                <p><b className='font-semibold'>tools/applications:</b> git, firebase, mongodb, postman, visual studio code</p>
                <p><b className='font-semibold'>libraries:</b> numpy, pandas, matplotlib, tailwind css,</p>
              </div>
          </div>
        </div>
      </main>

      <main id='socials' className="px-4 lg:px-12 py-8 mb-32">
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

    </div>
  );
}