import React,{useState} from 'react';
import { FcExpand, FcCollapse } from "react-icons/fc";
import { FaExternalLinkAlt } from "react-icons/fa";
import Zoom from 'react-reveal/Zoom';


const ProjectList = ({name, description, projectLink, github, techUsed}) => {
   
    const [show, setShow] = useState(false);

    const handleShowAndCollapse = () => {
        setShow(!show);
    };

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
         <Zoom  > 
            <div className={show ? "project-list-opened project-list" : "project-list"}
                onClick={handleShowAndCollapse}
            
                onMouseEnter={() => setShow(true)}
                //onMouseLeave={() => setShow(false)}
            >

                
                
                <div className='title-and-collapse-option'>
                <h5>{name}</h5>
                    <p>
                    {show ?<FcCollapse size={20} /> :  <FcExpand size={20} />}
                    </p>
                </div>

                
                <div className='description'>
                {show ? <p>{description}</p> : <p>{description.substring(0, 50)}...<p style={{color:"blue"}}>Read more</p></p>}
                </div>

                <div className='row'>
                    {techUsed && techUsed.map((tech, index) => (
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' key={index}>
                            <div className='tech-used-in-project'>
                                <p style={{backgroundColor: colors[index]}}>{tech.techName}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='row'>
                <div className='live-demo-button'>
                        <a target='_' href={projectLink}>Live Demo</a>
                </div>

                <div className='github-button'>
                        <a target='_' href={github}><FaExternalLinkAlt size={25} /> Projects</a>
                </div>
                </div>
            
            </div>
         </Zoom>  
     );
}
 
export default ProjectList;