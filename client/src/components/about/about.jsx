import React from "react";
import "./about.css";
import ProfilePic from "../../image/UCHE-PIX.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={ProfilePic} alt="Profile Photo" />
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
              <p>
                A skilled and motivated Software Developer with over 7 years of
                hands-on experience designing, developing and deploying robust
                software solutions. Possesses a proven track record of
                delivering successful projects within teams. Proficient in Azure
                environments, with expertise in C#, .Net Core, React and NodeJs.
                Skilled in web development and coding with a commitment in
                staying abreast in emerging technologies, adept in implementing
                object orientated principles, development methodologies and
                design patterns. T SQL and database knowledge combined with
                proficiency in software tools such as Visual Studio.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
