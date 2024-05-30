import PropTypes from "prop-types";

import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { StyledImage, StyledSwiper } from "./style";

import styles from "./Slider.module.css";

import "swiper/css";
import "swiper/css/pagination";

const Slider = ({ images }) => (
  <StyledSwiper
    modules={[Pagination]}
    pagination={{
      enabled: true,
      clickable: true,
      ...styles,
    }}>
    {images.map(image => (
      <SwiperSlide key={image.title}>
        <StyledImage src={image.image} alt={image.title} />
      </SwiperSlide>
    ))}
  </StyledSwiper>
);

Slider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default Slider;
