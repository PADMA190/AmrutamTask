import React from 'react';
import {
     AyurvedCardContainer,
     AyurvedImg,
     AyurvedText,
     AyurvedName,
} from './styled';

const AyurvedCard = (props) => {
  const { details } = props;
  const { img,name,about } = details; // Using destructuring to get imgUrl and FeatureText

  return (
    <AyurvedCardContainer>
      <AyurvedImg src={img} alt="not found" />
      <AyurvedName>{name}</AyurvedName>
      <AyurvedText>{about}</AyurvedText>
    </AyurvedCardContainer>
  );
};

export default AyurvedCard;
