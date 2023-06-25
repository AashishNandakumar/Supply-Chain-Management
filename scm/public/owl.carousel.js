import $ from "jquery";
import "owl.carousel/dist/owl.carousel.min.js";

// Export jQuery globally
global.$ = global.jQuery = $;
import React, { useEffect } from "react";
const CardSlider = () => {
  useEffect(() => {
    // Initialize Owl Carousel on component mount
    $(".owl-carousel").owlCarousel();
  }, []);

  return (
    <div className="owl-carousel">
      <div className="card">{/* Card Content */}</div>
      <div className="card">{/* Card Content */}</div>
      <div className="card">{/* Card Content */}</div>
    </div>
  );
};

export default CardSlider;
