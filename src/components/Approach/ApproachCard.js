import React from 'react';
import {
     ApproachCardContainer,
     ApproachImg,
     ApproachText,
     ApproachName,
} from './styled';

const ApproachCard = (props) => {
  const { details } = props;
  const { img,title,about } = details; // Using destructuring to get imgUrl and FeatureText

  return (
    <ApproachCardContainer>
      <ApproachImg src={img} alt="not found" />
      <ApproachName>{title}</ApproachName>
      <ApproachText>{about}</ApproachText>
    </ApproachCardContainer>
  );
};

export default ApproachCard;
