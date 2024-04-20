import styled from "styled-components";

export const ConsultationCon=styled.div`
background-color:#FFF7E2;
padding:30px 30px 30px 30px;
justify-content:center;
@media screen and (max-width:576px){
    padding:10px;
}
`;
export const ConsultationTitle=styled.h2`
text-decoration:underline;
font-size:28px;
color:#3A643B;
text-align:center;
`;
export const ConsultationCardsCon=styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:row;
margin:40px;
@media screen and (max-width:576px){
    flex-direction:column;
    flex-wrap:no-wrap;
    margin:0px;
}
`;
export const ConsultationCardOne=styled.div`
padding:20px;
border-top:solid #3A643B 5px;
border-radius:10px;
text-align:center;
background-color:white;
width:35%;
height:220px;
margin-top:20px;
margin-bottom:10px;
@media screen and (max-width:576px){
    width:92%;
}
`;
export const ConsultationCardTwo=styled.div`
padding:10px;
border-top:solid #3A643B 5px;
border-radius:10px;
text-align:center;
background-color:white;
width:30%;
height:260px;
margin-top:5px;
margin-bottom:10px;
@media screen and (max-width:576px){
    width:95%;
}
`;
export const ConsultationCardThree=styled.div`
padding:10px;
border-top:solid #3A643B 5px;
border-radius:10px;
text-align:center;
background-color:white;
width:25%;
height:250px;
margin-top:5px;
margin-bottom:10px;
@media screen and (max-width:576px){
    width:95%;
}
`;
export const ConsultationCardFour=styled.div`
padding:10px;
border-top:solid #3A643B 5px;
border-radius:10px;
text-align:center;
background-color:white;
width:25%;
height:250px;
margin-top:5px;
margin-bottom:10px;
@media screen and (max-width:576px){
    width:95%;
}
`;

export const CTitle=styled.h2`
color:#3A643B;
font-size:24px;
`;
export const CDescript=styled.p`
color:#3A643B;
font-size:16px;


`;
export const Cimg=styled.div`

`;
export const ConImg=styled.img`
border-radius:10px;
@media screen and (max-width:576px){
    width:100%;
    height:300px;
    margin-left:-5px;
    
}
`;
