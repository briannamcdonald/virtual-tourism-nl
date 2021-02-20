import React from "react";
import Tour from "../tour/tour";
import whaleImage from "./images/whale.png";

const Tours = () => {
  return (
    <Tour
      title="Whale Watching Tour"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      location="St. John's"
      link="/"
      price="16"
      image={whaleImage}
      stars="4.96"
      type="LIVE"
    />
  );
};

export default Tours;
