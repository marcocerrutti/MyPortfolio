import React,{useState} from 'react';
import './techStack.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const TechStack = () => {

    const data = [
        {
            name: "Full Stack Developer"
        },
        {
            name: "Node Js"
        },
        {
            name: "Express Js"
        },
        {
            name: "React Js"
        },
        {
            name: "Angular Js"
        },
        {
            name: "MongoDb"
        },
        {
            name: "Postgres SQL"
        },
        {
            name: ".NET"
        },
        {
            name: "Azure"
        },
        {
            name: "Azure Devops"
        },
        {
            name: "JavaScript"
        },
        {
            name: "TypeScript"
        },
        {
            name: "C++"
        },
        {
            name: "UI/UX Design"
        },
        {
            name: "RestFul API"
        },
        {
            name: "xUnit"
        },
        {
            name: "MSTest"
        },
        {
            name: "Mocha"
        },
        {
            name: "React-Native"
        },
        {
            name: "Flutter/Dart"
        },
        {
            name: "WordPress"
        }
    ];

    const colors = [
        '#F8C471',
        '#C39BD3',
        '#138D75',
        '#58D68D',
        '#F4D03F',
        '#E59866',
        '#AF7AC5',
        '#ABEBC6',
        '#85C1E9',
        '#EC7063',
        '#1F618D',
        '#2874A6',
        '#229954',
        '#6C3483',
        '#F39C12',
        '#34E3F1 ',
        '#0E6251',
        '#FAD7A0',
        '#27AE60',
        '#7F8C8D',
        '#808000'
    ];
     
    const [showMoreTechStack, setShowMoreTechStack] = useState(9);
    const loadMore = () => {
        setShowMoreTechStack((prev) => prev + 3);
    }
    return (  
        <div className="container techstack-section" id="techstack">
            <div className="section-title">
                <h5>Tech Stack</h5>
                <span className="line"></span>
            </div>

            <div className="row">
                {data.slice(0,showMoreTechStack).map((item,index) => (
                    
                    <Fade right>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                        <div className={index ===0 ? "tech-content-marked  tech-content":"tech-content"}>
                            <span
                                className="tech-number" style={{ backgroundColor: colors[index] }}>
                                {index + 1}
                            </span>
                            <p>{item.name}</p>
                        </div>
                    </div>
                  </Fade>
                ))}
            </div>
           
            {showMoreTechStack >= data.length ? null : (
             <Zoom>
                <span className='load-more-tech-stack' onClick={loadMore}>
                Load More
                </span>
             </Zoom>
            )}
        
        </div>
    )
}
 
export default TechStack;