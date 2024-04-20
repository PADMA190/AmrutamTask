import styled from "styled-components";

export const DiscoverCon=styled.div`
padding:30px;
align-items:center;
@media screen and (max-width:576px){
    padding:10px;
}
`;

export const DiscoverTitle=styled.h1`
text-decoration:underline;
font-size:34px;
color:#3A643B;
text-align:center;
`;
export const DiscoverDescription=styled.p`
font-size:18px;
color:#3A643B;
width:40%;
text-align:center;
margin-left:30%;
@media screen and (max-width:576px){
    width:80%;
    text-align:center;
    margin-left:10%;
}
`;
export const PrinciplesCon=styled.div`
display:flex;
flex-direction:row;
padding:20px;
@media screen and (max-width:576px){
    flex-direction:column;
}
`;
export const LeftPrincipleCon=styled.div`
display:flex;
flex-direction:column;
width:30%;
margin-top:20px;
margin-left:40px;
@media screen and (max-width:576px){
    display:none;
}
`;
export const RightPrincipleCon=styled.div`
display:flex;
flex-direction:column;
width:30%;
margin-top:20px;
@media screen and (max-width:576px){
    display:none;
}
`;
export const PrincipleImg=styled.div`
width:30%;
margin-right:5%;

`
export const Pimg=styled.img`

`;

export const Img=styled.img`
height:100px;
width:100px;
`;



export const LeftCon=styled.div`
display:flex;
flex-direction:row;
padding:10px;
margin-bottom:20px;
`;
export const LeftSpaceCon=styled.div`
display:flex;
flex-direction:row;
margin-right:50px;
margin-bottom:20px;
`;
export const TextCon=styled.div`
display:flex;
flex-direction:column;
margin-right:20px;
`;
export const LTitle=styled.h3`
color:#3A643B;
text-align:right;
`;
export const LDescription=styled.p`
color:#3A643B;
text-align:right;
width:80%;
margin-left:50px;
margin-top:-5px;
`;


export const RightCon=styled.div`
display:flex;
flex-direction:row;
padding:10px;
margin-bottom:20px;
`;
export const RightSpaceCon=styled.div`
display:flex;
flex-direction:row;
margin-left:50px;
margin-bottom:20px;
`;
export const RTextCon=styled.div`
display:flex;
flex-direction:column;

margin-left:20px;
`;
export const RTitle=styled.h3`
color:#3A643B;
text-align:left;
`;
export const RDescription=styled.p`
color:#3A643B;
text-align:left;
width:70%;
margin-top:-5px;
`;
export const PrincipleCardsCon=styled.div`
display:none;

@media screen and (max-width:576px){
    display:flex;
    flex-wrap:wrap;
    
}
`;
export const AyurvedCardContainer=styled.div`
padding:25px;
display:flex;
flex-direction:column;

margin-right:10px;
width:35%;
height:300px;
background-color:#FFFFFF;
border:1px solid #515151;
border-radius:20px;
margin-bottom:10px;
justify-content:center;
`;
export const AyurvedImg=styled.img`
margin-left:20%;
width:100px;
height:100px;
`;
export const AyurvedName=styled.h2`
text-align:center;
font-size:24px;
`;
export const AyurvedText=styled.p`
text-align:center;
font-size:18px;
`;