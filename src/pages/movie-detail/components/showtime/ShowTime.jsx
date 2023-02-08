import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieShowTimeApi } from "../../../../services/cinema";
import { formatDate } from "../../../../utils";

export default function ShowTime() {
  const params = useParams();

  useEffect(() => {
    getMovieShowTime();
  });

  const [movieShowTime, setMovieShowTime] = useState({});

  const getMovieShowTime = async () => {
    const result = await fetchMovieShowTimeApi(params.id);

    setMovieShowTime(result.data.content);
  };

  const renderTabs = () => {
    return movieShowTime?.heThongRapChieu?.map((item, index) => {
      return (
        <a
          className={`nav-link text-capitalize ${index === 0 ? "active" : ""}`}
          data-toggle="pill"
          href={`#${item.maHeThongRap}`}
          role="tab"
          aria-selected="true"
          key={item.maHeThongRap}
        >
          {item.tenHeThongRap}
        </a>
      );
    });
  };

  const renderTabContent = () => {
    return movieShowTime?.heThongRapChieu?.map((item, index) => {
      return (
        <div
          key={item.maHeThongRap}
          className={`tab-pane fade show ${index === 0 && "active"}`}
          id={item.maHeThongRap}
          role="tabpanel"
        >
          {item?.cumRapChieu?.map((item, index) => {
            return (
              <div className="row mb-5" key={index}>
                <div className="col-1">
                  <img className="img-fluid rounded" src={item.hinhAnh} />
                </div>
                <div className="col-11 pl-0">
                  <h5>{item.tenCumRap}</h5>
                  <span className="text-muted">{item.diaChi}</span>
                </div>
                <div className="col-12">
                  <div className="row">
                    {item?.lichChieuPhim?.map((item, index) => {
                      return (
                        <div className="col-3" key={index}>
                          <Link to={`/booking/${item.maLichChieu}`}>
                            {formatDate(item.ngayChieuGioChieu)}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="col-12 mt-5">
      <div className="row">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills "
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {renderTabs()}
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
