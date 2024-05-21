import React from "react";
import "./workExperience.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      companyname: "Hermes Gold Solutions",
      position: "Senior .Net Developer",
      desc: "Senior .Net Developer with over eight years of IT experience in various phases of software development life cycle (SDLC) - Project Analysis, Requirements, Development, Testing, Development and Documentation. An extensive experience in .Net Framework, Web and windows based application development using the Microsoft tech stack including ASP.NET, C#, Entity Framework, ADO.NET WCF, WPF, Javascript, REST and SQL Server",
      year: "2023 - present",
      techSkills: [
        {
          techName: ".NetCore",
        },
        {
          techName: "Azure",
        },
        {
          techName: "C#",
        },
        {
          techName: "D Patterns",
        },
        {
          techName: "SQL Server",
        },
        {
          techName: "JavaScript",
        },
      ],
    },
    {
      companyname: "Synchrony Limited",
      position: "Backend Developer",
      desc: "Experienced backend developer with five years experience developing and maintaining high-performance systems. A proven track record of increasing website traffic and conversion rates. Skilled in implementing new data management systems, streamliningdata processing and improving accuracy by 20%. Strong collaborator with a track record for delivering on-time and on budget projects and initiatives.",
      year: "2020-2023",
      techSkills: [
        {
          techName: "NodeJs",
        },
        {
          techName: "Express",
        },
        {
          techName: "REST API",
        },
        {
          techName: "MVC",
        },
        {
          techName: "NoSQL",
        },
        {
          techName: "GraphQL",
        },
      ],
    },
    {
      companyname: "Code Sauce",
      position: "React Native Developer",
      desc: "Skilled Mobile App Developer with three years experience in developing and implementing applications on IOS and Android platforms. Proven track record in increasing user engagement and through implementing automated testing processes and team collaboration to design and implement new user interfaces. Strong expertise and application integration with backend services as well as optimizing app performance ",
      year: "2019-2020",
      techSkills: [
        {
          techName: "JSX",
        },
        {
          techName: "Expo CLI",
        },
        {
          techName: "Express",
        },
        {
          techName: "Formik",
        },
        {
          techName: "Redux",
        },
        {
          techName: "Ngrok",
        },
      ],
    },
    {
      companyname: "TechWeave",
      position: "Full Stack Developer",
      desc: "Experienced .Net Full Stack Developer with eight years of experience developing and maintaining xloud based applications, web services, and RESTful APIs. Proven track record in reducing operational costs, increasing system efficiency, and improving user engagement and growth. Skilled in collaborating with cross-functional teams, implementing and driving process optimization for successful project delivery",
      year: "2018-2019",
      techSkills: [
        {
          techName: "C#",
        },
        {
          techName: "Azure",
        },
        {
          techName: "Web API",
        },
        {
          techName: "MVC",
        },
        {
          techName: "EFramework",
        },
        {
          techName: "JavaScript",
        },
        {
          techName: "React",
        },
        {
          techName: "Unit Testing",
        },
      ],
    },
    {
      companyname: "Tess Solutions",
      position: "NodeJS Developer",
      desc: "A developer with three years of experience in optimizing and deploying high-performance applications for e-commerce and financial services industries. Proven track record in improving system performance, reduing development time. A collaborative team player with expertise in microservices architecture, RESTful API optimization, and data protection protocols",
      year: "2017-2018",
      techSkills: [
        {
          techName: "Node.js",
        },
        {
          techName: "RESTful API",
        },
        {
          techName: "JavaScript(ES6+)",
        },
        {
          techName: "Redux",
        },
        {
          techName: "MongoDB",
        },
        {
          techName: "MySQL",
        },
      ],
    },
    {
      companyname: "Tech Base Solutions",
      position: "React Developer",
      desc: "Highly skilled React Developer with 4 years of experience in developing and implementing front-end architectures that have resulted in significant increases in page load speed and user engagement. Proficient in collaborating with back-end teams to integrate user-facing elements with server-side logic, implementing automated testing platforms, and optimizing components for maximum performance. Adept at identifying and resolving performance and scalability issues, staying up-to-date with emerging technologies and frameworks, and reducing development time for new projects.",
      year: "2014-2017",
      techSkills: [
        {
          techName: "React",
        },
        {
          techName: "Redux",
        },
        {
          techName: "Node.js",
        },
        {
          techName: "Git",
        },
        {
          techName: "RESTful API",
        },
        {
          techName: "Postgres SQL",
        },
      ],
    },
  ];

  const colors = [
    "#E59866",
    "#2874A6",
    "#229954",
    "#6C3483",
    "#F39C12",
    "#C39BD3",
    "#0E6251",
  ];
  return (
    <div className="container workexperience-section" id="workexperience">
      <div className="section-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>

      <div className="timeline-section">
        <VerticalTimeline lineColor="#FF1042">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<MdGroupWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>

              <div className="row">
                {item.techSkills.map((tec, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tec.techName}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.desc}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;
