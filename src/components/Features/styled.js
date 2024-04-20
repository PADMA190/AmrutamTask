import styled from "styled-components";

export const FeaturesCon=styled.div`

background-color:#FFF7E2;
padding:30px 40px 30px 40px;
display:flex;
flex-direction:row;
justify-content:space-between;
@media screen and (max-width:576px){
    flex-direction:column;
}
`;
export const FeaturesCardContainer=styled.div`
display:flex;
flex-direction:row;
`;
export const FeaturesImg=styled.img`

`;
export const FeatureText=styled.p`
color:#3A643B;
font-size:18px;
`;