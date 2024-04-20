import styled from "styled-components";

export const ApproachCon=styled.div`
padding:40px 40px 40px 40px;
text-align:center;
`;
export const ApproachTitle=styled.h2`
text-decoration:underline;
font-size:28px;
color:#3A643B;
text-align:center;
`;
export const ApproachDes=styled.p`
font-size:18px;
color:#3A643B;
text-align:center;
width:40%;
margin-left:30%;
@media screen and (max-width:576px){
    width:80%;
    margin-left:10%;
}
`;
export const ApproachCardCon=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
padding:10px;
@media screen and (max-width:576px){
    flex-direction:column;
    justify-content:center;
}
`;
export const ApproachCardContainer=styled.div`
background-color:#FFF7E2;
padding:15px;
border-top:5px solid #3A643B;
text-align:center;
margin-right:10px;
border-radius:10px;
width:22%;
@media screen and (max-width:576px){
    width:90%;
    margin-bottom:10px;
}
`;
export const ApproachImg=styled.img`

`;
export const ApproachName=styled.h2`
color:#3A643B;
font-size:18px;
`;
export const ApproachText=styled.p`
color:#3A643B;
font-size:14px;
`;