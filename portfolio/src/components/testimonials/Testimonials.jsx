import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
function Testimonials() {
  const data = [
    {
      avatar: AVTR1,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi obcaecati facere ut rerum, deleniti in enim nobis? Sequi hic quasi magnam inventore quos dicta corrupti nulla eveniet rem autem.",
    },
    {
      avatar: AVTR2,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi obcaecati facere ut rerum, deleniti in enim nobis? Sequi hic quasi magnam inventore quos dicta corrupti nulla eveniet rem autem.",
    },
    {
      avatar: AVTR3,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi obcaecati facere ut rerum, deleniti in enim nobis? Sequi hic quasi magnam inventore quos dicta corrupti nulla eveniet rem autem.",
    },
    {
      avatar: AVTR4,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi obcaecati facere ut rerum, deleniti in enim nobis? Sequi hic quasi magnam inventore quos dicta corrupti nulla eveniet rem autem.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
