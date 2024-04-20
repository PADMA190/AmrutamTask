import React from 'react'
import {WelcomeCon,WelcomeTextCon,WelcomeTitleOne,WelcomeTitleTwo,WelcomeTitleThree,WelcomeBtn,TransparentBg} from './styled';

function Welcome() {
  return (
    <WelcomeCon>
    <TransparentBg />
    <WelcomeTextCon>
    <WelcomeTitleOne>
    Namasthe Welcome to Amrutam
    </WelcomeTitleOne>
    <WelcomeTitleTwo>
    Step into Holistic Healing with Ayurveda <br />
    Book Consultation With Certified Experts.
    </WelcomeTitleTwo>
    <WelcomeTitleThree>
    Dive into the world of ayurveda and experience personalized health solutions and <br />
    holistic guidance from trusted ayurvedi doctors anytime, anywhere.
    </WelcomeTitleThree>
    <WelcomeBtn>
    BOOK AN APPOINTMENT
    </WelcomeBtn>
    </WelcomeTextCon>
    </WelcomeCon>
  )
}

export default Welcome
