import "./testimonials.css";

import AVTR1 from "./../../assets/avatar1.jpg";
import AVTR2 from "./../../assets/avatar2.jpg";
import AVTR3 from "./../../assets/avatar3.jpg";
import AVTR4 from "./../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Show",
    review:
      "This is not recommended, because copying methods are best used with pure functions. In this case, we can choose to iterate the array twice",
  },
  {
    avatar: AVTR2,
    name: "James Freeman",
    review:
      "an existing, yet-unvisited element of the array is changed by callbackFn, its value passed to the callbackFn will be the value at the time that element gets visited. Deleted elements are not visited.",
  },
  {
    avatar: AVTR3,
    name: "Kwame despite",
    review:
      "Concurrent modifications of the kind described above frequently lead to hard-to-understand code and are generally to be avoided (except in special cases).",
  },
  {
    avatar: AVTR4,
    name: "Mary Jane",
    review:
      "The following code shows how map works when a function requiring one argument is used with it. The argument will automatically be assigned from each element of the array as map loops through the original array",
  },
];

export const Testimonials = () => {
  return (
    <section className="testimonials">
      <h5>Review for clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map(({ avatar, name, review }) => {
          return (
            <SwiperSlide className="testimonial" key={avatar}>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar 1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
