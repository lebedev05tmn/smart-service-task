import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 375px;
  ${({ theme }) => theme.mediaDesktop} {
    width: 279px;
  }
`;

export const StyledImage = styled.img`
  width: 375px;
  height: 369px;
  object-fit: cover;

  ${({ theme }) => theme.mediaDesktop} {
    width: 279px;
    height: 495px;
    border-radius: 8.11px;
  }
`;
