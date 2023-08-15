import React from 'react';
import './about.css';
import ProfilePic from '../../image/UCHE-PIX.jpg';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const About = () => {
    return ( 
        <div className='container about-section' id="about">
            <div className="row">
                <Fade bottom>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">

                        <div className="about-image">
                            <img src={ProfilePic} alt='Profile Photo' />
                        </div>
                    </div>
               </Fade>
                    
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="about-details">
                        <Flip left>
                            <div className="about-title">
                                <h5>About Me</h5>
                                <span className="line"></span>
                            </div>
                        </Flip>
                        <Fade right>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias saepe similique omnis harum adipisci maiores distinctio eligendi modi iure mollitia, molestiae dolorum non, dolorem accusamus blanditiis minus voluptas amet? Non aut quod adipisci deleniti? Saepe nulla, sint pariatur ullam corrupti eos neque. Fugiat pariatur aliquid error laboriosam? Nesciunt neque sint voluptates sapiente natus dolores porro voluptas! Ducimus dolor doloremque atque, dolore in nihil nulla assumenda veniam mollitia dolorum. Voluptas ipsam beatae voluptates assumenda, excepturi vel commodi fugiat optio sapiente rerum vitae dicta laudantium non aut voluptatibus ipsum ducimus repellat perferendis? Voluptatum, delectus? Ad, provident sit. Hic magnam labore repellat obcaecati!</p>
                        </Fade>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default About;