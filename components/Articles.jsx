"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import ArticleCard from "./ArticleCard";
const Articles = () => {
  return (
    <div className="articles-wrapper">
      <p className="articles-title">مقالات ما</p>
      <span className="articles-description">دانستنی های جذاب دنیای قهوه</span>
      <main>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          dir="rtl"
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          //   rewind={true}
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper articles_slider"
        >
          <SwiperSlide>
            <ArticleCard />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCard />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCard />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCard />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCard />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCard />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCard />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCard />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCard />
          </SwiperSlide>
        </Swiper>
      </main>
    </div>
  );
};

export default Articles;
