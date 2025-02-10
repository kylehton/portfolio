import NameAndMenu from './components/NameAndMenu';
import Intro from './components/Intro';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Socials from './components/Socials';
import Footer from './components/Footer';


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NameAndMenu />
          <Intro />
          <Education />
          <Projects />
          <Skills />
          <Socials />
      <Footer />
    </div>
  );
}