import React, { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import BannerItem from "./BannerItem";

const Banner = () => {
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=95f2419536f533cdaa1dadf83c606027",
    fetcher
  );
  const movies = data?.results || [];
  console.log("Banner", movies);
  return (
    <section className="banner h-[500px] bg-white page-container mb-20 overflow-hidden">
      <Swiper grabCursor={"true"} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
export default Banner;
