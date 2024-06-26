import Styled from "styled-components";

export const MainContainer = Styled.div`

background-size:cover;
background-color:#FFF7E2;

align-items:center;

`;
export const TestContainer = Styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-bottom:0px;
margin-right:30px;

`;

export const Heading = Styled.h1`
color: #3A643B;
text-decoration:underline;
font-size: 40px;
margin-bottom: 0px;
  @media screen and (max-width:576px){
    font-size: 34px;
   
    text-align: center;
  }

`;
export const ConsumerCon = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: -30px;
  gap:50px;
  
`;
export const CRLOGO = Styled.h2`
width: 20px;
height: 25px;
top: 1290px;
left: 770px;
color:#244886;
font-size: 40px;
margin: 0px;
`;

export const Con = Styled.div`
display: flex;
flex-direction:column;
gap: 10px;
margin-top:25px;

`;

export const CrEle = Styled.p`
  margin: -7px;
  padding: 0px;
  color: #244886;
  font-size: 17px;
`;

export const Desc = Styled.p`
  color: #B7B6BD;
  font-size: 20px;
  margin-top:50px
  font-weight: 500;
  margin-top:100px;
  width: 70%;
  @media screen and (max-width:576px){
    font-size: 15px;
    font-family: "roboto";
    margin: 60px 0 0 20px;
    text-align: center;
    width: 90%;
    text-shadow: 0px 0px 0px;
  }
`;
export const SliderCon = Styled.div`
padding-left:20px;

@media screen and (max-width:576px){
  gap:30px;
}
`;

// background: linear-gradient(to left, #333, #333 55%, #eee 100%, #333 75%);
