import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../config";
const MovieList = ({ type = "now_playing" }) => {
  // const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=95f2419536f533cdaa1dadf83c606027`,
    fetcher
  );
  // useEffect(() => {
  //   if (data && data.results) {
  //     setMovies(data.results);
  //   }
  // }, [data]);
  const movies = data?.results || [];
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
