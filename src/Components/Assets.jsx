import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Assets() {
  const cards = [
    {
      id: 1,
      icon: "fa-solid fa-chart-simple",
      number: 1,
      firstLine: "Total Sales",
      secondLine: "+8% from yesterday",
      bgColor: "#FFE2E5",
      iconColor: "#FA5A7D",
    },
    {
      id: 2,
      icon: "fa-solid fa-cubes",
      number: 300,
      firstLine: "Total Order",
      secondLine: "+8% from yesterday",
      bgColor: "#FFF0DE",
      iconColor: "#FF947A",
    },
    {
      id: 3,
      icon: "fa-solid fa-tag",
      number: 8,
      firstLine: "Products Sold",
      secondLine: "+8% from yesterday",
      bgColor: "#DCFCE7",
      iconColor: "#3CD856",
    },
    {
      id: 4,
      icon: "fa-solid fa-user-plus",
      number: 300,
      firstLine: "New Customers",
      secondLine: "+8% from yesterday",
      bgColor: "#F3E8FF",
      iconColor: "#BF83FF",
    },
    {
      id: 5,
      icon: "fa-solid fa-comment-dollar",
      number: 5,
      firstLine: "Total Offers",
      secondLine: "+8% from yesterday",
      bgColor: "#FFF4DE",
      iconColor: "#FF947A",
    },
    {
      id: 1,
      icon: "fa-solid fa-chart-simple",
      number: 1,
      firstLine: "Total Sales",
      secondLine: "+8% from yesterday",
      bgColor: "#FFE2E5",
      iconColor: "#FA5A7D",
    },
    {
      id: 4,
      icon: "fa-solid fa-user-plus",
      number: 300,
      firstLine: "New Customers",
      secondLine: "+8% from yesterday",
      bgColor: "#F3E8FF",
      iconColor: "#BF83FF",
    },
  ];
  return (
    <div className="p-6 bg-white rounded-lg mb-6 mx-12">
      <h2 className="text-right text-[#05004E] font-bold text-2xl mb-6">الاصول</h2>
      <Swiper
        slidesPerView={4}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        pagination={true}
        modules={[Pagination]}
        className="max-w-lg xl:max-w-5xl"
      >
        {cards.map((card, index) => {
          return (
            <SwiperSlide key={index} className="mb-12">
              <div className="p-2 lg:p-4 flex flex-col space-y-2 rounded-xl" style={{ backgroundColor: card.bgColor }}>
                <i className={`${card.icon} text-white p-2 lg:p-4 w-fit rounded-full`} style={{ backgroundColor: card.iconColor }}></i>
                <span className="text-lg font-bold">{card.number}</span>
                <span className="">{card.firstLine}</span>
                <span className="text-[#4079ED]">{card.secondLine}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Assets;
