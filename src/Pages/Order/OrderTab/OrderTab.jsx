import FoodCard from "../../../Components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
  };

  return (
    <div>
      {/* Swiper Slide */}
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
          fill:"row"
        }}
        spaceBetween={15}
        pagination={pagination}
        modules={[Grid, Pagination]}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
      >
          {items.map((item) => (
            <SwiperSlide className="py-10" key={item._id}>
              <FoodCard item={item}></FoodCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
