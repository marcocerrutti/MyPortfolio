import React from "react";
import "./education.css";
import { FaUserGraduate } from "react-icons/fa";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  const data = [
    {
      name: "University of Central Lancashire",
      degree: "MSc Applied Data Science",
      year: "2024 -Present",
      des: "I am pursuing a Masters in Applied Data Science and Artificial Intelligence at the University of Central Lancashire which will commence soon.",
    },
    {
      name: "University of Central Lancashire",
      degree: "BSc Business Computing & Information System",
      year: "2018 -2020",
      des: "During my Bachelor program, I gained a solid foundation in computer science principles.Through hands-on projects coupled with course work I was able to develop competency in programming languages, software development, Networking Security, System Analysis and Implementation. This program equipped me with an insight of the interaction between software and hardware components enabling me to face technical challenges succinctly with a holistic perspectivr .",
    },
    {
      name: "NCC Education",
      degree: "Diploma in Computing",
      year: "2014 -2016",
      des: "I did a diploma in computing where i gathered hands-on experience in Computer Networks, Algorithms,database design and development and software development techniques.The program enabled me to develop competency in practicalizing my IT skills by building and implement enterprise systems.",
    },
    {
      name: "Koenig Institute India",
      degree: "Diploma in Software Engineering",
      year: "2023 -present",
      des: "I did a program on the Microsoft tech stack which included Web Development, Web Services, Database development and esktop development. I was also able acquire certifications after I completed the program.",
    },
  ];

  const colors = ["#58D68D", "#808000", "#E59866", "#AF7AC5"];

  return (
    <div className="container education-section" id="education">
      <div className="section-title">
        <h5>Education</h5>
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
              icon={<FaUserGraduate />}
            >
              <h3 className="vertical-timeline-element-title">{item.name}</h3>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ color: "black" }}
              >
                {item.degree}
              </h5>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
