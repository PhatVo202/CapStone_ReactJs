import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { bookTicketApi, fetchTicketDetailApi } from "../../services/ticket";
import Seat from "./components/Seat";

import * as _ from "lodash";

export default function Booking() {
  const [ticketDetail, setTicketDetail] = useState({});

  const [selectedSeatList, setSelectedSeatList] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTicketDetail();
  }, []);

  const getTicketDetail = async () => {
    const result = await fetchTicketDetailApi(params.id);
    console.log(result);
    setTicketDetail(result.data.content);
  };

  const handleSelect = (seat) => {
    const data = [...selectedSeatList];

    const index = data.findIndex((item) => item.maGhe === seat.maGhe);

    if (index !== -1) {
      data.splice(index, 1);
    } else {
      data.push(seat);
    }

    setSelectedSeatList(data);
  };

  //bi bat dong bo

  useEffect(() => {}, [selectedSeatList]);

  const renderSeat = () => {
    return ticketDetail?.danhSachGhe?.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <Seat key={item.maGhe} item={item} handleSelect={handleSelect} />
          {(index + 1) % 16 === 0 && <br />}
        </React.Fragment>
      );
    });
  };

  const bookTicket = async () => {
    const data = {
      maLichChieu: params.id,
      danhSachVe: selectedSeatList.map((item) => {
        return {
          maGhe: item.maGhe,
          giaVe: item.giaVe,
        };
      }),
    };

    await bookTicketApi(data);
    alert("Dat ve thanh cong");
    navigate("/");
  };

  return (
    <div className="py-5">
      <div className="row">
        <div className="col-8 mb-4">
          <div style={{ width: "95%" }} className="mx-auto">
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-secondary">
              Seats are booked
            </div>
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-dark">
              Seats not booked
            </div>
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-primary">
              Seats are being booked
            </div>
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-warning">
              VIP seats
            </div>
          </div>
        </div>
        <div className="col-8">
          <div style={{ width: "95%" }} className="mx-auto">
            {renderSeat()}
          </div>
        </div>
        <div className="col-4">
          <img
            style={{ width: 300, height: 400, objectFit: "cover" }}
            src={ticketDetail?.thongTinPhim?.hinhAnh}
            alt="#"
          />
          <h4 className="mb-0">{ticketDetail?.thongTinPhim?.tenPhim}</h4>
          <h5 className="mb-0">
            Number of seats:
            <div className="d-flex">
              {selectedSeatList.map((item, index) => {
                return (
                  <p key={index} className="badge badge-success mr-2 mb-0">
                    {item.tenGhe}
                  </p>
                );
              })}
            </div>
          </h5>
          <h5>
            Total:
            {/* {selectedSeatList.reduce((total, item) => {
              return (total += item.giaVe);
            }, 0)} */}
            {_.sumBy(selectedSeatList, "giaVe").toLocaleString()} vnd
          </h5>
          <button onClick={bookTicket} className="btn btn-warning">
            BOOK
          </button>
        </div>
      </div>
    </div>
  );
}
