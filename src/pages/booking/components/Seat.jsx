import React, { useState } from "react";

export default function Seat(props) {
  const [isSelected, setIsSelected] = useState(false);

  const populateClassName = () => {
    if (props.item.daDat) {
      return "btn-secondary";
    }

    if (isSelected) {
      return "btn-primary";
    }

    if (props.item.loaiGhe === "Vip") {
      return "btn-warning";
    }

    return "btn-dark";
  };

  const handleSelectSeat = () => {
    setIsSelected(!isSelected);

    props.handleSelect(props.item);
  };

  return (
    <button
      onClick={handleSelectSeat}
      disabled={props.item.daDat}
      style={{ width: 50, height: 50, padding: 0 }}
      className={`mr-1 mb-1 btn ${populateClassName()} `}
    >
      {props.item.tenGhe}
    </button>
  );
}
