import React from "react";
import "./Education.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Education = () => {
  const clients = [
    {
      degree:'B.tech',
      collegeName: 'Indian Insttitute of Technology(IIT) Ropar',
      review:'Mechanical Engineering',
      year:'2019-2023'
    },
    {
      degree:'Senior Secondary',
      collegeName:"Rajasthan Board of Secondary Education "   ,
      review:'Science side',
      year:'2019'
    },
    {
      degree:'Secondary',
      collegeName:"Uttar Pradesh Board of Secondary Education"   ,
      review:'Science side',
      year:'2017'
    },
  ];

  return (
    <div className="t-wrapper" id='Education'>
      <div className="t-heading">
        <span>Education</span>
       
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <span>{client.degree}</span>
                <span>{client.collegeName}</span>
                <span>{client.review}</span>
                <span>{client.year}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Education;