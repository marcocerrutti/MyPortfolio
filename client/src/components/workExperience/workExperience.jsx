import React from 'react';
import './workExperience.css';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { MdGroupWork } from 'react-icons/md';

const WorkExperience = () => {

    const data = [
        {
            companyname: "Synchrony Limited",
            position: "Full Stack Developer",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel doloremque dolores dolor placeat blanditiis sapiente in, nobis assumenda provident, voluptate adipisci tempora laudantium, maiores sed laborum fuga officia. Incidunt eius repudiandae quidem facere quasi quibusdam molestiae cupiditate laudantium placeat ea distinctio, impedit temporibus quos, ipsum totam maxime quam culpa!",
            year: "2020-2023",
            techSkills: [
                {
                    techName: "Node"
                },
                {
                    techName: "Express"
                },
                {
                    techName: "Angular"
                },
                {
                    techName: "Material UI"
                },
            ]
        },
        {
            companyname: "Code Sauce",
            position: "Senior .Net Developer",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel doloremque dolores dolor placeat blanditiis sapiente in, nobis assumenda provident, voluptate adipisci tempora laudantium, maiores sed laborum fuga officia. Incidunt eius repudiandae quidem facere quasi quibusdam molestiae cupiditate laudantium placeat ea distinctio, impedit temporibus quos, ipsum totam maxime quam culpa!",
            year: "2019-2020",
            techSkills: [
                {
                    techName: ".Net"
                },
                {
                    techName: "C#"
                },
                {
                    techName: "EF"
                },
                {
                    techName: "MSSQL"
                },
                {
                    techName: "Rest API"
                },
            ]
        },
        {
            companyname: "google",
            position: "Full Stack Developer",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel doloremque dolores dolor placeat blanditiis sapiente in, nobis assumenda provident, voluptate adipisci tempora laudantium, maiores sed laborum fuga officia. Incidunt eius repudiandae quidem facere quasi quibusdam molestiae cupiditate laudantium placeat ea distinctio, impedit temporibus quos, ipsum totam maxime quam culpa!",
            year: "2018-2019",
            techSkills: [
                {
                    techName: "Node"
                },
                {
                    techName: "Express"
                },
                {
                    techName: "Graph Ql"
                },
                {
                    techName: "Schmatic"
                },
            ]
        },
        {
            companyname: "Tass Solutions",
            position: "Mobile Developer",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel doloremque dolores dolor placeat blanditiis sapiente in, nobis assumenda provident, voluptate adipisci tempora laudantium, maiores sed laborum fuga officia. Incidunt eius repudiandae quidem facere quasi quibusdam molestiae cupiditate laudantium placeat ea distinctio, impedit temporibus quos, ipsum totam maxime quam culpa!",
            year: "2017-2018",
            techSkills: [
                {
                    techName: "RNative"
                },
                {
                    techName: "Formik"
                },
                {
                    techName: "JavaScript"
                },
                {
                    techName: "Redux"
                }
            ]
        },
        {
            companyname: "HGSL",
            position: "Lead Developer",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel doloremque dolores dolor placeat blanditiis sapiente in, nobis assumenda provident, voluptate adipisci tempora laudantium, maiores sed laborum fuga officia. Incidunt eius repudiandae quidem facere quasi quibusdam molestiae cupiditate laudantium placeat ea distinctio, impedit temporibus quos, ipsum totam maxime quam culpa!",
            year: "2014-2017",
            techSkills: [
                {
                    techName: ".Net Core"
                },
                {
                    techName: "React Js"
                },
                {
                    techName: "MobX"
                },
                {
                    techName: "Axios"
                }
            ]
        },
        {
            companyname: "Egg Head Solutions",
            position: "Software Developer",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel doloremque dolores dolor placeat blanditiis sapiente in, nobis assumenda provident, voluptate adipisci tempora laudantium, maiores sed laborum fuga officia. Incidunt eius repudiandae quidem facere quasi quibusdam molestiae cupiditate laudantium placeat ea distinctio, impedit temporibus quos, ipsum totam maxime quam culpa!",
            year: "2012-2014",
            techSkills: [
                {
                    techName: "Django"
                },
                {
                    techName: "Postgres"
                },
               
                {
                    techName: "Next"
                },
                {
                    techName: "Bootstrap"
                }
            ]
        },
    ];

    const colors = [
        '#E59866',
        '#2874A6',
        '#229954',
        '#6C3483',
        '#F39C12',
        '#C39BD3',
        '#0E6251', 
    ];
    return ( 
        <div className='container workexperience-section' id="workexperience">


             <div className="section-title">
                <h5>Work Experience</h5>
                <span className="line"></span>
            </div>

            <div className='timeline-section'>

            

            <VerticalTimeline lineColor='#FF1042'>
                            
                            {data.map((item, index) => (

                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: colors[index], color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #FFBB24' }}
                        date={item.year}
                        dateClassName='date-class'
                        iconStyle={{ background: colors[index], color: '#fff' }}
                        icon={<MdGroupWork />}
                        >
                        <h3 className="vertical-timeline-element-title">{item.companyname }</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.position}</h4>
                        
                        <div className='row'>
                            {item.techSkills.map((tec, index) => (
                            
                                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                                    <div className='tech-skills'>
                                        <p>{ tec.techName}</p>
                                </div>
                                </div>
                            ))}
                        </div>
                    
                    
                        <p>
                        {item.desc}
                        </p>
                        </VerticalTimelineElement>
            ))}       
            </VerticalTimeline>
</div>
        </div>
     );
}
 
export default WorkExperience;