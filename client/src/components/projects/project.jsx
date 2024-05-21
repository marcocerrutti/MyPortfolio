import React from "react";
import ProjectList from "./projectList";
import "./project.css";

const Project = () => {
  const data = [
    {
      name: "Node Js App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus iusto at laudantium tenetur ab, fuga quis nulla doloremque repellendus omnis ducimus voluptatum autem, saepe ipsam inventore accusamus alias sapiente eaque blanditiis, nihil maiores. Praesentium perferendis unde saepe earum pariatur quo, quam ducimus cum delectus sint necessitatibus expedita totam commodi?",
      projectLink: "https://google.com",
      github: "https://github.com/marcocerrutti/Vivo-Movies2",
      techUsed: [
        {
          techName: "Node Js",
        },
        {
          techName: "JavaSscript",
        },
        {
          techName: "MongoDb",
        },
        {
          techName: "JSON ",
        },
        {
          techName: "Hapi/Joi",
        },
        {
          techName: "Heroku",
        },
      ],
    },
    {
      name: ".Net FringeSports App",
      description:
        "A simple e-commerce application that follows the classic approach applied by ecommerce stores. An online product catalog was created where customers can browse by category and page, a shopping used in adding and removing products as well as a checkout  where customers will be able to enter shipping details. There is a management section  where the administration and management of the application is performed that includes the CRUD functionality that facilitates the management of the application. This management area is accessible only to the administrators who make changes on the application",
      projectLink: "https://google.com",
      github: "https://github.com/marcocerrutti/FringeSportsStore6",
      techUsed: [
        {
          techName: ".Net",
        },
        {
          techName: "ORM",
        },
        {
          techName: "MSSQL",
        },
        {
          techName: "xUnit ",
        },
        {
          techName: "Bootstrap",
        },
        {
          techName: "LINQ",
        },
        {
          techName: "MOQ",
        },
      ],
    },
    {
      name: ".Net MicroService e-Commerce App",
      description:
        "I built multiple apis in a Microservice project using .net core with each api having a specific functionality i.e. Authentication and Authorization API using .net identity, a Product, Email, Coupon Shopping Cart, Order, and Rewards API. An MVC Application was built to interact with all the individual Microservices and to bring everything together. After building the APIs, communication had to be established between the APIs using Azure service Bus a third party tool which comprises of queues, topics and subscriptions to handle asynchronous communication between the APIs. After I was done with communication, I configured a gateway using Ocelot an open source tool used for encapsulating the the microservices. Finally i deployed the entire code on Azure. The focus of this project was to build multiple APIs loosely coupled and independently deployable that work in conjucton with each other to produce a seamless final solution.",
      projectLink: "https://google.com",
      github: "https://github.com/marcocerrutti/hermea-microservices-.Net8MVC",
      techUsed: [
        {
          techName: "VS 2022",
        },
        {
          techName: ".NET 8",
        },
        {
          techName: "Azure",
        },
        {
          techName: "Ocelot",
        },
        {
          techName: "SQL Server",
        },
        {
          techName: "SSMS",
        },
        {
          techName: "EF Core",
        },
        {
          techName: "Service Bus ",
        },
      ],
    },
    {
      name: "React Native App",
      description:
        "A Mobile blog built with react-native where a user can make a post and publish it for other users t see.....",
      projectLink: "https://google.com",
      github: "https://github.com/marcocerrutti/Blog-App",
      techUsed: [
        {
          techName: "react-native",
        },
        {
          techName: "Restful API",
        },
        {
          techName: "MongoDb",
        },
        {
          techName: "JSON ",
        },
        {
          techName: "Hapi/Joi",
        },
        {
          techName: "Heroku",
        },
      ],
    },
    {
      name: "Node Js App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus iusto at laudantium tenetur ab, fuga quis nulla doloremque repellendus omnis ducimus voluptatum autem, saepe ipsam inventore accusamus alias sapiente eaque blanditiis, nihil maiores. Praesentium perferendis unde saepe earum pariatur quo, quam ducimus cum delectus sint necessitatibus expedita totam commodi?",
      projectLink: "https://google.com",
      github: "https://github/marcocerrutti/Vivo-Movies2",
      techUsed: [
        {
          techName: "Node Js",
        },
        {
          techName: "JavaSscript",
        },
        {
          techName: "MongoDb",
        },
        {
          techName: "JSON ",
        },
        {
          techName: "Hapi/Joi",
        },
        {
          techName: "Heroku",
        },
      ],
    },
    {
      name: "Bench App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus iusto at laudantium tenetur ab, fuga quis nulla doloremque repellendus omnis ducimus voluptatum autem, saepe ipsam inventore accusamus alias sapiente eaque blanditiis, nihil maiores. Praesentium perferendis unde saepe earum pariatur quo, quam ducimus cum delectus sint necessitatibus expedita totam commodi?",
      projectLink: "https://google.com",
      github: "https://github/marcocerrutti/Vivo-Movies2",
      techUsed: [
        {
          techName: ".Net",
        },
        {
          techName: "C#",
        },
        {
          techName: "Angular Js",
        },
        {
          techName: "JSON ",
        },
        {
          techName: "MobX",
        },
        {
          techName: "Sqlite",
        },
        {
          techName: "TypeScript",
        },
        {
          techName: "Git",
        },
      ],
    },
    {
      name: "Scheduler App",
      description:
        "An Application that enables a user to view activities that are available for them to sign up to. If an activity is cicked on, the details of the activity is displayed. Details like who is going to the activity and whether a user is following an activity. The application has a chart system which utilized signal R, and enable someone on the internet to see comments popping up on the browser. An events are created on the app and an event creator can manage manage events and makes updates in the activity. A user can can cancel their place in an activity and gets removed from the attendance list  as well as follow other users ",
      projectLink: "https://google.com",
      github: "https://github.com/marcocerrutti/ActivityScheduler2-",
      techUsed: [
        {
          techName: ".Net",
        },
        {
          techName: "ORM",
        },
        {
          techName: "VSCode",
        },
        {
          techName: "React",
        },
        {
          techName: "MobX",
        },
        {
          techName: "Postman",
        },
        {
          techName: "Typescript ",
        },
        {
          techName: "Axios",
        },
        {
          techName: "Formik",
        },
      ],
    },

    {
      name: ".Net Ecommerce App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus iusto at laudantium tenetur ab, fuga quis nulla doloremque repellendus omnis ducimus voluptatum autem, saepe ipsam inventore accusamus alias sapiente eaque blanditiis, nihil maiores. Praesentium perferendis unde saepe earum pariatur quo, quam ducimus cum delectus sint necessitatibus expedita totam commodi?",
      projectLink: "https://google.com",
      github: "https://github/marcocerrutti/Vivo-Movies2",
      techUsed: [
        {
          techName: ".Net",
        },
        {
          techName: "ORM",
        },
        {
          techName: "SQL",
        },
        {
          techName: "JWT ",
        },
        {
          techName: "Axios",
        },
        {
          techName: "Paypal",
        },
        {
          techName: "Formik",
        },
      ],
    },

    {
      name: "Flutter Meal App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus iusto at laudantium tenetur ab, fuga quis nulla doloremque repellendus omnis ducimus voluptatum autem, saepe ipsam inventore accusamus alias sapiente eaque blanditiis, nihil maiores. Praesentium perferendis unde saepe earum pariatur quo, quam ducimus cum delectus sint necessitatibus expedita totam commodi?",
      projectLink: "https://google.com",
      github: "https://github/marcocerrutti/meals_app",
      techUsed: [
        {
          techName: "flutter",
        },
        {
          techName: "Android",
        },
        {
          techName: "IOS",
        },
        {
          techName: "Firebase",
        },
      ],
    },
    {
      name: "Travel Blog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus iusto at laudantium tenetur ab, fuga quis nulla doloremque repellendus omnis ducimus voluptatum autem, saepe ipsam inventore accusamus alias sapiente eaque blanditiis, nihil maiores. Praesentium perferendis unde saepe earum pariatur quo, quam ducimus cum delectus sint necessitatibus expedita totam commodi?",
      projectLink: "https://google.com",
      github: "https://github/marcocerrutti/meals_app",
      techUsed: [
        {
          techName: "Wordpress",
        },
        {
          techName: "Photopea",
        },
        {
          techName: "Canva",
        },
        {
          techName: "MySQL",
        },
        {
          techName: "Elementor",
        },
        {
          techName: "FontAwesome",
        },
        {
          techName: "Php",
        },
      ],
    },
  ];
  return (
    <div className="container" id="projects">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <ProjectList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
