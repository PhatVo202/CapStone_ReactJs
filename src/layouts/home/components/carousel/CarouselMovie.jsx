import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  width: "100%",
  height: "600px",
  objectFit: "cover",
};

export default function CarouselMovie() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange} dotPosition="left" autoplay="true">
      <div style={contentStyle}>
        <img
          src="https://media.doisongphapluat.com/thumb_x1280x857/media/dang-nhat-duy/2022/12/03/poster-phim-tran-thanh-nha-ba-nu-dspl-31220222.jpg"
          alt=""
          style={{ display: "block", width: "100%" }}
        />
      </div>

      <div style={contentStyle}>
        <img
          src="https://media.doisongphapluat.com/thumb_x1280x857/media/dang-nhat-duy/2022/12/03/poster-phim-tran-thanh-nha-ba-nu-dspl-31220222.jpg"
          alt=""
          style={{ display: "block", width: "100%" }}
        />
      </div>
    </Carousel>
  );
}
