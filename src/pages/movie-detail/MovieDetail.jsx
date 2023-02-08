import React from "react";
import Detail from "./components/detail/Detail";
import ShowTime from "./components/showtime/ShowTime";

export default function MovieDetail() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <Detail />
          <ShowTime />
        </div>
      </div>
    </div>
  );
}
