import styled from "styled-components";

import background from '../assets/bookingbackground.png';
import mobilebooking from '../assets/bookingbackground.png';

export const BookingCon = styled.div`
  background-image: url(${background});
  background-size: 100% 100%; /* Ensure the background image covers the entire container */
  background-repeat: no-repeat; /* Prevent the background image from repeating */
  background-position: center; /* Center the background image */
   /* Set the width to 100% of the viewport width */
  text-align:center;
  padding:70px 80px 70px 80px;
  @media screen and (max-width:576px){
    background-image: url(${mobilebooking});
  }
`;
export const BookingTitle=styled.h1`
 color:#FFF7E2;
 font-size:44px;
 text-align:center;
 font-weight:300;
 margin-bottom:20px;
`;
export const BookingButton=styled.button`
padding:5px 10px 5px 10px;
background-color:#3A643B;
color:white;
border-radius:20px;
width:15%;
height:50px;
border:none;
@media screen and (max-width:576px){
    width:40%;
}
`;