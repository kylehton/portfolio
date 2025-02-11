import NameAndMenu from './components/main/NameAndMenu';
import Intro from './components/main/Intro';
import Education from './components/main/Education';
import Experience from './components/main/Experience';
import Projects from './components/main/Projects';
import Skills from './components/main/Skills';
import Socials from './components/main/Socials';
import Footer from './components/main/Footer';


export default function Home() {
  return (
    <div id='all-component-wrapper' className="px-4 lg:px-0 min-h-screen bg-white">
      <NameAndMenu />
          <Intro />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Socials />
      <Footer />
    </div>
  );
}