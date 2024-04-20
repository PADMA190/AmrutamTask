import React from 'react'
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import four from '../assets/four.png';
import {
    ApproachCon,
    ApproachTitle,
    ApproachDes,
    ApproachCardCon,
} from './styled';
import ApproachCard from './ApproachCard';
const ApproachList=[
    {
       id:1,
       img:one,
       title:'Make Appointment',
       about:'You must make an appointment in advance, to choose the service and date.',
    },
    {
        id:2,
        img:two,
        title:'Consultations',
        about:'The next stage involves a thorough consultation with an Ayurveda practitioner.',
     },
     {
        id:3,
        img:three,
        title:'Treatment Planning',
        about:'The Ayurvedic practitioner creates a personalized treatment plan for you',
     },
     {
        id:4,
        img:four,
        title:'Maintenance',
        about:'These visits allow for assessment of progress, adjustments to the treatment.',
     },
];
function Approach() {
  return (
    <ApproachCon>
    <ApproachTitle>Our ayurvedic approach</ApproachTitle>
    <ApproachDes>At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions.</ApproachDes>
    <ApproachCardCon>
    {ApproachList.map((eachItem) => (
        <ApproachCard key={eachItem.id} details={eachItem} />
      ))}
    </ApproachCardCon>
    </ApproachCon>
  )
}

export default Approach
