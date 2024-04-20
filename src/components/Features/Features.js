import React from 'react';
import COC from '../assets/COC.png';
import EP from '../assets/EP.png';
import PTP from '../assets/PTP.png';
import SET from '../assets/SET.png';
import { FeaturesCon } from './styled';
import FeaturesCard from './Featurescard';

const FeaturesList = [
  {
    id: 1,
    imgUrl: COC,
    FeatureText: 'Convenient Online & In-Clinic Consultations',
  },
  {
    id: 2,
    imgUrl: SET,
    FeatureText: 'Safe And Effective Treatment',
  },
  {
    id: 3,
    imgUrl: EP,
    FeatureText: 'Experienced Ayurvedic Practitioners',
  },
  {
    id: 4,
    imgUrl: PTP,
    FeatureText: 'Personalized Treatment Plans & Guidance',
  },
];

function Features() {
  return (
    <FeaturesCon>
      {FeaturesList.map((eachItem) => (
        <FeaturesCard key={eachItem.id} details={eachItem} />
      ))}
    </FeaturesCon>
  );
}

export default Features;
