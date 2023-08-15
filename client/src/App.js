import React,{useState,createContext} from 'react';
import Sidebar from './components/sidebar/sidebar';
import About from './components/about/about';
import TechStack from './components/techStack/techStack';
import Projects from './components/projects/project';
import WorkExperience from './components/workExperience/workExperience';
import Education from './components/education/education';
import Testimonial from './components/Testimonial/testimonial';
import Contact from './components/contact/contact';
import './App.css';

import ScrollToTop from "react-scroll-to-top";
import NavbarMobileView from './components/sidebar/navbarMobileView';

export const ThemeContext = createContext(null);

const App = () => {

  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev)=> (prev ==="light" ? "dark": "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div id={theme}>
        <NavbarMobileView changeTheme={changeTheme} theme={theme}/>

        <Sidebar changeTheme={changeTheme} theme={theme} />
        <About />
        <WorkExperience />
        <TechStack />
        <Education />
        <Projects />
        <Testimonial />
        <Contact />
      </div>
     
     

      <ScrollToTop smooth={true}
        top="20"
        color='white'
        height='20'
        width='20'
        style={{borderRadius:"90px", backgroundColor: "#38004c"}}
      />
    </ThemeContext.Provider>
    
   
  );
}

export default App;