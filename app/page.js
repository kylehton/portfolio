import NameAndMenu from './page-components/main/NameAndMenu';
import Intro from './page-components/main/Intro';
 import AboutMe from './page-components/main/AboutMe';
import Education from './page-components/main/Education';
import Experience from './page-components/main/Experience';
import Projects from './page-components/main/Projects';
import Skills from './page-components/main/Skills';
import Socials from './page-components/main/Socials';
import Footer from './page-components/main/Footer';


export default function Home() {
  return (
    <div id='all-component-wrapper' className="px-4 lg:px-0 min-h-screen bg-white">
      <NameAndMenu />
          <Intro />
          <AboutMe />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Socials />
      <Footer />
    </div>
  );
}