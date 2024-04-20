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
export const CardContainer = Styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 10px;
  border: 0px;
  height: 400px;
  width: 400px;
  box-shadow: 0px 4px 4px 0px #00000040;
  margin-bottom: 10px;
  @media screen and (max-width: 576px) {
    height: 250px;
    width: 4000px;
  }
`;

export const CardTitle=Styled.p`
background-color:rgba(236, 254, 231, 1);
font-size:16px;
height:30px;
padding:5px 20px 5px 20px;
margin:0;
border-radius:10px;
`;
export const Stars = Styled.a`
font-size:10px;

`;
export const Para1 = Styled.p`
color:#B7B6BD;

font-size: 18px;
font-weight: 700;
line-height: 33px;
letter-spacing: 0px;
text-align: left;
@media screen and (max-width:576px){
    font-size: 8px;
  }
`;
export const Para2 = Styled.p`
color:#B7B6BD;

font-size: 18px;
font-weight: 400;
line-height: 38px;
letter-spacing: 0px;
text-align: left;
@media screen and (max-width:576px){
    font-size: 8px;
    line-height: 18px;
  }
`;
export const ProfileCon = Styled.div`
display: flex;
flex-direction:row;
gap:20px;
margin-top:10px;
`;
export const Image = Styled.img`
@media screen and (max-width:576px){
    height: 20px;
    width:20px;
  }

`;
export const Details = Styled.div`
display: flex;
flex-direction:column;

`;
export const Name = Styled.a`
color:#2B459B;
font-size:15px;
@media screen and (max-width:576px){

    font-size:10px;
  }
`;
export const Role = Styled.a`
color:#2B459B;
font-size:12px;
@media screen and (max-width:576px){
    font-size:8px;
  }
`;
