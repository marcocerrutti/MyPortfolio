import React from 'react';
import "./home.css";

import Typewriter from 'typewriter-effect';
import MyResume from '../../image/uchenna resumeAnd.pdf';
import { BsFillMoonStarsFill,BsFillSunFill } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';

import { Link } from 'react-scroll';





const Home = ({theme,changeTheme}) => {
    return ( 
        <div className='container-fluid home' id='home'
        >
            <div className='theme-change' onClick={changeTheme}>
                {theme ==="light"? (<p><BsFillMoonStarsFill size={40} /></p>) : (<p className='sun-theme-icon'><BsFillSunFill size={40}  /></p>)}

            </div>
            <div className='container home-content'>
                <Fade right>

                
                <h1>Hi, I'm Steven </h1>
                <h3>
                <Typewriter
                    options={{
                            strings: [
                                'Full Stack Software Developer',
                                'Backend Developer (Heavy)',
                                'DotNet Developer',
                                'MEAN Stack Developer',
                                'MERN Stack Developer',
                                 'Mobile Developer',
                                  'C# Developer',
                                 'Cloud Solutions Architect'
                            ],
                                
                        autoStart: true,
                            loop: true,
                            delay:5
                    }}
                 />
                </h3>
                </Fade>


                <Fade bottom>
                    <div className='button-for-action'>
                    <Link to="contact"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                            
                        >
                        <div className='hire-me-button'>
                            
                       
                                Hire Me
                        
                    </div>
                    </Link>
                    <div className='get-resume-button'>
                        <a href={MyResume} download="uche_cv.pdf">
                        Get Resume
                        </a>
                       
                    </div>
                    </div>
                </Fade>
            </div>
        </div>
     );
}
 
export default Home;