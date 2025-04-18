import { AnimatedSpan, Terminal, TypingAnimation } from '@/components/magicui/terminal';

  export function EmailTerminal() {
    return (
      <Terminal className='h-[300px] w-[600px]'>
        <TypingAnimation className='text-base mt-2'>&gt; brew install resume</TypingAnimation>
  
        <AnimatedSpan delay={1750} className="text-base ml-2 text-green-500">
          <span>✔ Connecting to server.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-base ml-2 text-green-500">
          <span>✔ Sending download request.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3300} className="text-base ml-2 text-green-500">
          <span>✔ Retrieving resume.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={4100} className="text-base ml-2 text-green-500">
          <span>✔ Formatting for user download.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4900} className="text-base ml-2 text-blue-500">
          <span>ℹ Downloading 1 file:</span>
          <span className="pl-2">- Resume.pdf</span>
        </AnimatedSpan>
  
        <TypingAnimation delay={6000} className="text-base ml-2 mb-4 text-muted-foreground">
          Success! Resume download completed.
        </TypingAnimation>
      </Terminal>
    );
  }
  