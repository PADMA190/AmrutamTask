import React from 'react'
import AppStore from '../assets/AppStore.png';
import GooglePlay from '../assets/GooglePlay.png';
import Mobile from '../assets/Mobile.png';
import iphone from '../assets/iPhone.png';
import {
    GetAppCon,
    Left,
    AppName,
    AppAbout,
AppTag,
AppTitle,
AppsCon,
AppImg,
Right,
IphoneImg,
} from './styled';

function GetApp() {
  return (
    <GetAppCon>
    <Left>
    <AppName>Amrutam Home App</AppName>
    <AppAbout>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</AppAbout>
    <IphoneImg src={iphone} alt="not found"></IphoneImg>
    <AppTitle>Get a diet & lifestyle consultation with ayurvedic experts across the globe </AppTitle>
    <AppTag>Get The App Now</AppTag>
    <AppsCon>
    <AppImg src={GooglePlay} alt="not found"></AppImg>
    <AppImg src={AppStore} alt="not found"></AppImg>
    </AppsCon>
    </Left>
    <Right src={Mobile} alt="not found">
    
    </Right>
    </GetAppCon>
  )
}

export default GetApp
