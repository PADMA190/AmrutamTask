import styled from 'styled-components';
import welcomebg from '../assets/welcome-background.png';

export const WelcomeCon = styled.div`
  background-image: url(${welcomebg});
  background-size: 100% 100%; /* Ensure the background image covers the entire container */
  background-repeat: no-repeat; /* Prevent the background image from repeating */
  background-position: center; /* Center the background image */
  height: 60vh;
  width: 100%; /* Set the width to 100% of the viewport width */
  position: relative; /* Ensure proper positioning */
  z-index: 1; /* Set a higher z-index */
`;

export const WelcomeTextCon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 0px 20px;
  position: relative; /* Ensure proper positioning */
  z-index: 2; /* Set a higher z-index than TransparentBg */
`;

export const WelcomeTitleOne = styled.p`
  color: white;
  font-size: 18px;
  width: 70%;
`;

export const WelcomeTitleTwo = styled.h3`
  color: white;
  font-size: 24px;
  width: 70%;
`;

export const WelcomeTitleThree = styled.p`
  color: white;
  font-size: 16px;
  width: 70%;
`;

export const WelcomeBtn = styled.button`
  padding: 5px 10px 5px 10px;
  background-color: #3a643b;
  color: white;
  border-radius: 10px;
  width: 30%;
  height: 40px;
  border: none;
  @media screen and (max-width:576px){
    width:50%;
    margin-bottom:20px;
  }
`;

export const TransparentBg = styled.div`
  width: 100%;
  background-color: rgba(34, 34, 34, 0.8); /* Adjust the alpha value (0.8) to change transparency */
  top: -50;
  height: 100%;
  position: absolute; /* Ensure proper positioning */
  z-index: 0; /* Set a lower z-index */
`;
