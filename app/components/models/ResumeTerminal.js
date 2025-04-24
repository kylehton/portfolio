import { AnimatedSpan, Terminal, TypingAnimation } from '@/components/magicui/terminal';

  export function ResumeTerminal() {
    return (
      <Terminal className='w-full h-full lg:w-[600px] h-[320px]'>
        <TypingAnimation className='text-sm lg:text-base mt-2'>&gt; brew install resume</TypingAnimation>
  
        <AnimatedSpan delay={1750} className="text-sm lg:text-base ml-2 text-green-500">
          <span>✔ Connecting to server.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-sm lg:text-base ml-2 text-green-500">
          <span>✔ Sending download request.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3300} className="text-sm lg:text-base ml-2 text-green-500">
          <span>✔ Retrieving resume.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={4100} className="text-sm lg:text-base ml-2 text-green-500">
          <span>✔ Formatting for user download.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4900} className="text-sm lg:text-base ml-2 text-blue-500">
          <span>ℹ Uploading 1 file:</span>
          <span className="pl-2">- Resume.pdf</span>
        </AnimatedSpan>
  
        <TypingAnimation delay={6000} className="text-sm lg:text-base ml-2 mb-4 text-muted-foreground">
          Success! Resume downloaded.
        </TypingAnimation>
      </Terminal>
    );
  }
  