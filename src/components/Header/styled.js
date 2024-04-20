import styled from 'styled-components';

export const HeaderCon=styled.div`
background-color:#FFF7E2;
height:7vh;
width:100%;

`;
export const ItemCon=styled.div`

display:none;
@media screen and (max-width:576px){
    display:flex;
flex-direction:row;
justify-content:space-around;
padding:6px 10px 4px 20px;
}
`;
export const Logos=styled.img`
@media screen and (max-width:576px){
    margin-left:-150px;

}

`;