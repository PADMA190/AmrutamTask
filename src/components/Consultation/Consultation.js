import React from 'react'
import con1 from '../assets/con1.png';
import con2 from '../assets/con2.png';
import con3 from '../assets/con3.png';
import {
    ConsultationCon,
    ConsultationTitle,
    ConsultationCardsCon,
    ConsultationCardOne,
    ConsultationCardTwo,
    ConsultationCardThree,
    ConsultationCardFour,
    
    CTitle,
    CDescript,
    Cimg,
    ConImg,
} from './styled';
function Consultation() {
  return (
    <ConsultationCon>
    <ConsultationTitle>
    What sets Ayurvedic consultations apart?
    </ConsultationTitle>
    <ConsultationCardsCon>
    <ConsultationCardOne>
    <CTitle>
    स्वस्थस्य स्वास्थ्य रक्षणं,<br /> आतुरस्य विकार प्रशमनं ।"
    </CTitle>
    <CDescript>
    [ Meaning: The Goal of Ayurveda is to maintain the health of a<br /> healthy person and to cure the disease of a diseased person. ]
    </CDescript>
    </ConsultationCardOne>
    <Cimg>
    <ConImg src={con1} alt="not found"></ConImg>
    </Cimg>
    <ConsultationCardTwo>
    <CTitle>
    precise diagnosis
    </CTitle>
    <CDescript>
    Ayurveda's core principles<br /> revolve around Vata, Pitta,<br /> and Kapha doshas, guiding<br /> you with precise diagnosis<br /> and treatment.
    </CDescript>
    </ConsultationCardTwo>
    <ConsultationCardThree>
    <CTitle>
    Zero side-effects
    </CTitle>
    <CDescript>
    Ayurvedic treatments are<br /> devoid of chemicals, and<br /> are based completely on<br /> natural herbs 
    </CDescript>
    </ConsultationCardThree>
    <Cimg>
    <ConImg src={con2} alt="not found"></ConImg>
    </Cimg>
    <ConsultationCardFour>
    <CTitle>
    Individual Treatment
    </CTitle>
    <CDescript>
    all Treatments are<br /> personalized based on a<br /> person's unique constitution<br /> and health concerns.
    </CDescript>
    </ConsultationCardFour>
    <Cimg>
    <ConImg src={con3} alt="not found"></ConImg>
    </Cimg>
    </ConsultationCardsCon>
    </ConsultationCon>
  )
}

export default Consultation
