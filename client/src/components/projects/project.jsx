import React from 'react';
import ProjectList from './projectList';
import './project.css';


const Project = () => {
    const data = [
        
        {
            name: "Node Js App",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus iusto at laudantium tenetur ab, fuga quis nulla doloremque repellendus omnis ducimus voluptatum autem, saepe ipsam inventore accusamus alias sapiente eaque blanditiis, nihil maiores. Praesentium perferendis unde saepe earum pariatur quo, quam ducimus cum delectus sint necessitatibus expedita totam commodi?",
            projectLink: "https://google.com",
            github: "https://github.com/marcocerrutti/Vivo-Movies2",
            techUsed: [
                {
                    techName: "Node Js"
                },
                {
                    techName: "JavaSscript"
                },
                {
                    techName: "MongoDb"
                },
                {
                    techName: "JSON "
                },
                {
                    techName: "Hapi/Joi"
                },
                {
                    techName: "Heroku"
                }
            ]
        },
        {
            name: ".Net FringeSports App",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus iusto at laudantium tenetur ab, fuga quis nulla doloremque repellendus omnis ducimus voluptatum autem, saepe ipsam inventore accusamus alias sapiente eaque blanditiis, nihil maiores. Praesentium perferendis unde saepe earum pariatur quo, quam ducimus cum delectus sint necessitatibus expedita totam commodi?",
            projectLink: "https://google.com",
            github: "https://github.com/marcocerrutti/FringeSportsStore6",
            techUsed: [
                {
                    techName: ".Net"
                },
                {
                    techName: "Entity Framework"
                },
                {
                    techName: "MSSQL"
                },
                {
                    techName: "xUnit "
                },
                {
                    techName: "Bootstrap"
                },
                {
                    techName: "LINQ"
                }
            ]
        },
        {
            name: "Node Js App",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus iusto at laudantium tenetur ab, fuga quis nulla doloremque repellendus omnis ducimus voluptatum autem, saepe ipsam inventore accusamus alias sapiente eaque blanditiis, nihil maiores. Praesentium perferendis unde saepe earum pariatur quo, quam ducimus cum delectus sint necessitatibus expedita totam commodi?",
            projectLink: "https://google.com",
            github: "https://github/marcocerrutti/Vivo-Movies2",
            techUsed: [
                {
                    techName: "Node Js"
                },
                {
                    techName: "JavaSscript"
                },
                {
                    techName: "MongoDb"
                },
                {
                    techName: "JSON "
                },
                {
                    techName: "Hapi/Joi"
                },
                {
                    techName: "Heroku"
                }
            ]
        },
        {
            name: "Node Js App",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus iusto at laudantium tenetur ab, fuga quis nulla doloremque repellendus omnis ducimus voluptatum autem, saepe ipsam inventore accusamus alias sapiente eaque blanditiis, nihil maiores. Praesentium perferendis unde saepe earum pariatur quo, quam ducimus cum delectus sint necessitatibus expedita totam commodi?",
            projectLink: "https://google.com",
            github: "https://github/marcocerrutti/Vivo-Movies2",
            techUsed: [
                {
                    techName: "Node Js"
                },
                {
                    techName: "JavaSscript"
                },
                {
                    techName: "MongoDb"
                },
                {
                    techName: "JSON "
                },
                {
                    techName: "Hapi/Joi"
                },
                {
                    techName: "Heroku"
                }
            ]
        },
        {
            name: "Bench App",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus iusto at laudantium tenetur ab, fuga quis nulla doloremque repellendus omnis ducimus voluptatum autem, saepe ipsam inventore accusamus alias sapiente eaque blanditiis, nihil maiores. Praesentium perferendis unde saepe earum pariatur quo, quam ducimus cum delectus sint necessitatibus expedita totam commodi?",
            projectLink: "https://google.com",
            github: "https://github/marcocerrutti/Vivo-Movies2",
            techUsed: [
                {
                    techName: ".Net"
                },
                {
                    techName: "C#"
                },
                {
                    techName: "Angular Js"
                },
                {
                    techName: "JSON "
                },
                {
                    techName: "MobX"
                },
                {
                    techName: "Sqlite"
                },
                {
                    techName: "TypeScript"
                },
                {
                    techName: "Git"
                },
            ]
        },
        {
            name: "Scheduler App",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus iusto at laudantium tenetur ab, fuga quis nulla doloremque repellendus omnis ducimus voluptatum autem, saepe ipsam inventore accusamus alias sapiente eaque blanditiis, nihil maiores. Praesentium perferendis unde saepe earum pariatur quo, quam ducimus cum delectus sint necessitatibus expedita totam commodi?",
            projectLink: "https://google.com",
            github: "https://github/marcocerrutti/Vivo-Movies2",
            techUsed: [
                {
                    techName: ".Net"
                },
                {
                    techName: "React"
                },
                {
                    techName: "MobX"
                },
                {
                    techName: "Typescript "
                },
                {
                    techName: "Axios"
                },
                {
                    techName: "Serilog"
                },
                {
                    techName: "Formik"
                },

                
            ]
        },

        {
            name: ".Net Ecommerce App",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus iusto at laudantium tenetur ab, fuga quis nulla doloremque repellendus omnis ducimus voluptatum autem, saepe ipsam inventore accusamus alias sapiente eaque blanditiis, nihil maiores. Praesentium perferendis unde saepe earum pariatur quo, quam ducimus cum delectus sint necessitatibus expedita totam commodi?",
            projectLink: "https://google.com",
            github: "https://github/marcocerrutti/Vivo-Movies2",
            techUsed: [
                {
                    techName: ".Net"
                },
                {
                    techName: "Entity Framework"
                },
                {
                    techName: "SQL"
                },
                {
                    techName: "Jwt Tokens "
                },
                {
                    techName: "Axios"
                },
                {
                    techName: "Paypal"
                },
                {
                    techName: "Formik"
                },

                
            ]
        }
    ]
    return (
        <div className='container' id='projects'>
            
            <div className="section-title">
                <h5>Projects</h5>
                <span className="line"></span>
            </div>

            <div className='row'>

                {data.map((item, index) => (
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' key={index}>
                        <ProjectList {...item} />
                    </div>
                ))}

                
            </div>
        
        </div>
      );
}
 
export default Project;