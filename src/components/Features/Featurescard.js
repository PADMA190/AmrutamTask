import React from 'react';
import { FeaturesCardContainer, FeaturesImg, FeatureText } from './styled';

const FeaturesCard = (props) => {
  const { details } = props;
  const { imgUrl, FeatureText: featureText } = details; // Using destructuring to get imgUrl and FeatureText

  return (
    <FeaturesCardContainer>
      <FeaturesImg src={imgUrl} alt="not found" />
      <FeatureText>{featureText}</FeatureText>
    </FeaturesCardContainer>
  );
};

export default FeaturesCard;
