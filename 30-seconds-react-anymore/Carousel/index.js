import React from "react";
import Carousel from "./Carousel";

const index = () => {
  return (
    <Carousel
      carouselItems={[
        <div>carousel item 1</div>,
        <div>carousel item 2</div>,
        <div>carousel item 3</div>
      ]}
    />
  );
};

export default index;
