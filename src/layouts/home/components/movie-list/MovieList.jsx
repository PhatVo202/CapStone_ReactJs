import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMovieListApi } from "../../../../services/movie";

import { Button } from "antd";
import { useMovieList } from "../../../../hooks/useMovieList";

export default function MovieList() {
  const navigate = useNavigate();
  const movieList = useMovieList();

  const renderMovieList = () => {
    return movieList.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <div
            className="card movie-card"
            style={{ marginBottom: 20, height: 500 }}
          >
            <img
              style={{ height: 350, objectFit: "cover" }}
              className="card-img-top"
              src={item.hinhAnh}
              alt="movie"
            />
            <div className="card-body">
              <h5 className="card-title">{item.tenPhim}</h5>

              <Button
                onClick={() => navigate(`/movie-detail/${item.maPhim}`)}
                type="dashed"
                size="large"
              >
                XEM CHI TIẾT
              </Button>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className="row mt-3 mx-auto w-75">{renderMovieList()}</div>;
}
