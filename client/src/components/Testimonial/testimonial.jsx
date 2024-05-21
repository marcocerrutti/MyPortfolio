import React from "react";
import "./testimonial.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from "react-reveal/Zoom";

const Testimonial = () => {
  const data = [
    {
      name: "Joy",
      position: "CEO",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, iure nihil dolores aliquam eius soluta iste accusamus aliquid. Quaerat, omnis!",
      img: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Lucy",
      position: "Product Manager",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, iure nihil dolores aliquam eius soluta iste accusamus aliquid. Quaerat, omnis!",
      img: "https://images.pexels.com/photos/9136162/pexels-photo-9136162.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      name: "George",
      position: "Sales Representative",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, iure nihil dolores aliquam eius soluta iste accusamus aliquid. Quaerat, omnis!",
      img: "https://images.pexels.com/photos/1937791/pexels-photo-1937791.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Martin",
      position: "Project Lead",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, iure nihil dolores aliquam eius soluta iste accusamus aliquid. Quaerat, omnis!",
      img: "https://media.istockphoto.com/id/1088488846/photo/man-posing-for-the-camera.jpg?s=612x612&w=0&k=20&c=2RF8KrF0OlBU6nPe2TCi6zCN-6Z8MzkFJNpjuHoaDdA=",
    },
    {
      name: "Rachel",
      position: "Project Manager",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, iure nihil dolores aliquam eius soluta iste accusamus aliquid. Quaerat, omnis!",
      img: "https://media.istockphoto.com/id/491020536/photo/official-portrait-of-a-blonde-woman.jpg?s=612x612&w=0&k=20&c=66v74t9UtCy6g_JCsfgS8S-dqtf0zS1fePHU4z4o6J0=",
    },
    {
      name: "Dimeji",
      position: "Database Administrator",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, iure nihil dolores aliquam eius soluta iste accusamus aliquid. Quaerat, omnis!",
      img: "https://media.istockphoto.com/id/1082486532/photo/beautiful-black-man-in-front-of-a-colored-background.jpg?s=612x612&w=0&k=20&c=JnPcURc8GWHrfst2hSGBp159JYK0jrTopUvq1flQ2_E=",
    },
    {
      name: "Anne",
      position: "UI/Ux Designer",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, iure nihil dolores aliquam eius soluta iste accusamus aliquid. Quaerat, omnis!",
      img: "https://images.pexels.com/photos/3754438/pexels-photo-3754438.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container testimonial-section" id="testimonial">
      <div className="section-title">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>

      <div className="testimonial-slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Zoom>
              <div className="content-slider-main">
                <div className="content-slider" key={index}>
                  <img
                    src={item.img}
                    alt="testimonial-image"
                    className="center-image"
                  />
                  <p>{item.name}</p>
                  <p>{item.position}</p>
                  <p>{item.des}</p>
                </div>
              </div>
            </Zoom>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
