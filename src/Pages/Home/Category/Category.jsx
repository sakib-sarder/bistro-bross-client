import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "./Category.css";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11:00 am to 10:00 pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper my-12"
      >
        <SwiperSlide className=" pb-16">
          <img src={slide1} className="w-full" alt="Food Image" />
          <h3 className="text-4xl text-white uppercase text-center -mt-16">
            salads
          </h3>
        </SwiperSlide>
        <SwiperSlide className=" pb-16">
          <img src={slide2} alt="Food Image" className="w-full" />
          <h3 className="text-4xl text-white uppercase text-center -mt-16">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide className=" pb-16">
          <img src={slide3} alt="Food Image" className="w-full" />
          <h3 className="text-3xl md:text-4xl text-white uppercase text-center -mt-16">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide className=" pb-16">
          <img src={slide4} alt="Food Image" className="w-full" />
          <h3 className="text-4xl text-white uppercase text-center -mt-16">
            deserts
          </h3>
        </SwiperSlide>
        <SwiperSlide className=" pb-16">
          <img src={slide5} alt="Food Image" className="w-full" />
          <h3 className="text-4xl text-white uppercase text-center -mt-16">
            salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
