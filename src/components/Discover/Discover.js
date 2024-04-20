import React from 'react'
import pimg from '../assets/discoverimg.png';
import PrincipleOne from '../assets/PrincipleOne.png';
import PrincipleTwo from '../assets/PrincipleTwo.png';
import PrincipleThree from '../assets/PrincipleThree.png';
import PrincipleFour from '../assets/PrincipleFour.png';
import PrincipleFive from '../assets/PrincipleFive.png';
import PrincipleSix from '../assets/PrincipleSix.png';

import {DiscoverCon,
    DiscoverTitle,
    DiscoverDescription,
    PrinciplesCon,
    LeftPrincipleCon,
    PrincipleImg,
    Pimg,
    RightPrincipleCon,
    LeftCon,
    LTitle,
    LDescription,
    Img,
    LeftSpaceCon,
    TextCon,
    RightCon,
    RTitle,
    RDescription,
   
    RightSpaceCon,
    RTextCon,
    PrincipleCardsCon,
} from './styled';
import AyurvedCard from './AyurvedCard';
const AyurvedList=[
  {
    id:1,
    img:PrincipleOne,
    name:'Personalized Wellness',
    about:'Get treatment made just for you based on your individual doshas[body type]',
  },
  {
    id:2,
    img:PrincipleTwo,
    name:'Focus on prevention',
    about:'Stop problems even before they start',
  },
  {
    id:3,
    img:PrincipleThree,
    name:'Mind-Body Connection',
    about:'Keep your mind and body in sync for a happy life.',
  },
  {
    id:4,
    img:PrincipleFour,
    name:'Holistic Healing',
    about:'Fix the root problem for long-lasting health.',
  },
  {
    id:5,
    img:PrincipleFive,
    name:'Natural Remedies',
    about:'Using herbs and natural theraoies for healing.',
  },
  {
    id:6,
    img:PrincipleSix,
    name:'Boosting immunity',
    about:'Stay strong and healthy for life,not just for today.',
  },

];

function Discover() {
  return (
    <DiscoverCon>
    <DiscoverTitle>
    Discover Ayurveda's Magic With Us
    </DiscoverTitle>
    <DiscoverDescription>
    Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality.It's like a journey to better health using ancient wisdom,a totally effective approach for a better life.
    </DiscoverDescription>
    <PrinciplesCon>
    <LeftPrincipleCon>
    <LeftCon>
    <TextCon>
    <LTitle>Personalized Wellness</LTitle>
    <LDescription>Get treatment made just for you based on your individual doshas[body type]</LDescription>
    </TextCon>
    <Img src={PrincipleOne} alt="not found"></Img>
    </LeftCon>
    <LeftSpaceCon>
    <TextCon>
    <LTitle>Focus on prevention</LTitle>
    <LDescription>Stop problems even before they start</LDescription>
    </TextCon>
    <Img src={PrincipleTwo} alt="not found"></Img>
    </LeftSpaceCon>
    <LeftCon>
    <TextCon>
    <LTitle>Mind-Body Connection</LTitle>
    <LDescription>Keep your mind and body in sync for a happy life.</LDescription>
    </TextCon>
    <Img src={PrincipleThree} alt="not found"></Img>
    </LeftCon>
    </LeftPrincipleCon>
    <PrincipleImg>
    <Pimg src={pimg} alt="not found"></Pimg>
    </PrincipleImg>
    <PrincipleCardsCon>
    {AyurvedList.map((eachItem) => (
      <AyurvedCard key={eachItem.id} details={eachItem} />
    ))}
    </PrincipleCardsCon>
    <RightPrincipleCon>
    
    <RightCon>
    <Img src={PrincipleFour} alt="not found"></Img>
    <RTextCon>
    <RTitle>Holistic Healing</RTitle>
    <RDescription>Fix the root problem for long-lasting health.</RDescription>
    </RTextCon>
    
    </RightCon>
    <RightSpaceCon>
    <Img src={PrincipleFive} alt="not found"></Img>
    <RTextCon>
    <RTitle>Natural Remedies</RTitle>
    <RDescription>Using herbs and natural theraoies for healing.</RDescription>
    </RTextCon>
    
    </RightSpaceCon>
    <RightCon>
    <Img src={PrincipleSix} alt="not found"></Img>
    <RTextCon>
    <RTitle>Boosting immunity</RTitle>
    <RDescription>Stay strong and healthy for life,not just for today.</RDescription>
    </RTextCon>
    
    </RightCon>
    </RightPrincipleCon>
    </PrinciplesCon>
    </DiscoverCon>
  )
}

export default Discover
