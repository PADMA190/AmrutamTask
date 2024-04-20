import styled from "styled-components";

export const GetAppCon=styled.div`
padding:40px 50px 40px 50px;
display:flex;
flex-direction:row;
background-color:#FFF7E2;
@media screen and (max-width:576px){
    flex-direction:column;
    text-align:center;
}
`;
export const Left=styled.div`
text-align:left;
@media screen and (max-width:576px){
    
    text-align:center;
}
`;
export const Right=styled.img`
display:block;
@media screen and (max-width:576px){
    display:none;
}
`;
export const AppName=styled.h2`
color:#3A643B;
font-size:38px;
`;
export const AppAbout=styled.p`
color:#3A643B;
font-size:20px;
`;
export const AppTitle=styled.h2`
font-size:34px;
font-weight:300;
margin-bottom:15px;
`;
export const AppTag=styled.h2`
font-size:34px;
`;
export const AppsCon=styled.div`
display:flex;
flex-direction:row;
@media screen and (max-width:576px){
    flex-direction:column;
    justify-content:center;
}
`;
export const AppImg=styled.img`
width:220px;

@media screen and (max-width:576px){
    width:300px;
    margin-bottom:10px;
    align-self:center;
}
`;

export const IphoneImg=styled.img`
display:none;
@media screen and (max-width:576px){
    display:block;
}
`