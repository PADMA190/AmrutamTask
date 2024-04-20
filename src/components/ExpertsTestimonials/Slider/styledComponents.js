import Styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

export const Main = Styled.div`
position:on;
background-color:#D7D7D7;
`;
const StyledSwiper = Styled(Swiper)`
    @media screen and (max-width: 576px) {
        .swiper-slide {
            width: calc(100% / 2); // Set width for mobile view
        }
    }
`;

export const MainContainer = Styled.div`
display: flex;
flex-direction:column;
padding: 10px;
height:350px;
margin-top:30px;
width:450px;
background-color: white !important;

@media screen and (max-width:576px){
    width:280px;
    height:200px;
    margin-left:-10px;
  }
`;

export const CardTitle=Styled.p`
background-color:#3A643B;
font-size:16px;
height:17%;
padding:15px 20px 5px 20px;
margin:0;
cursor:pointer;
border-bottom-left-radius:30px;
border-bottom-right-radius:30px;
color:white;
text-align:center;

`;
