import React from "react";
import CarouselMovie from "../../layouts/home/components/carousel/CarouselMovie";
import MovieList from "../../layouts/home/components/movie-list/MovieList";
import News from "../../layouts/home/components/news/News";

export default function HomePage() {
  return (
    <div className="py-5">
      <CarouselMovie />
      <MovieList />
      <News />
    </div>
  );
}
