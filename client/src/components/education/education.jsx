import React from 'react';
import './education.css';
import { FaUserGraduate } from 'react-icons/fa';



import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Education = () => {

    const data = [
    
        {
            name: 'University of Central Lancashire',
            degree: 'MSc Applied Data Science',
            year: '2023 -present',
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe id officia incidunt veniam numquam impedit eligendi minima voluptatibus assumenda accusamus.",

        },
        {
            name: 'University of Central Lancashire',
            degree: 'BSc Business Computing & Information System',
            year: '2018 -2020',
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe id officia incidunt veniam numquam impedit eligendi minima voluptatibus assumenda accusamus.",

        },
        {
            name: 'NCC Education',
            degree: 'Diploma in Computing',
            year: '2014 -2016',
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe id officia incidunt veniam numquam impedit eligendi minima voluptatibus assumenda accusamus.",

        },
        {
            name: 'Koenig Institute India',
            degree: 'Diploma in Software Engineering',
            year: '2023 -present',
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe id officia incidunt veniam numquam impedit eligendi minima voluptatibus assumenda accusamus.",

        }
       
    ];

    const colors = [
        '#58D68D',
        '#808000',
        '#E59866',
        '#AF7AC5', 
    ];

    return ( 
        <div className='container education-section' id="education">
            
            <div className="section-title">
                <h5>Education</h5>
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
            icon={<FaUserGraduate />}
            >
            <h3 className="vertical-timeline-element-title">{item.name }</h3>
            <h5 className="vertical-timeline-element-subtitle" style={{color:"black"}}>{item.degree}</h5>
        
              
            <p>
              {item.des}
            </p>
            </VerticalTimelineElement>
 ))}       
</VerticalTimeline>
</div>

        </div>
     );
}
 
export default Education;