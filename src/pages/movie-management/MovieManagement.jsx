import React from "react";
import { useMovieList } from "../../hooks/useMovieList";

export default function MovieManagement() {
  const movieList = useMovieList();

  return <div>Hello management</div>;
}
