import React from 'react'
import fb from '../assets/fb.png';
import insta from '../assets/insta.png';
import yt from '../assets/yt.png';
import tw from '../assets/tw.png';
import lnkdn from '../assets/lnkdn.png';
import pntrst from '../assets/pntrst.png';


import { ContactCon, InTouch,HeadName,TextLine, IconsCon,IconImg, Info, Subscribe,
    SearchBar,
    One,
    Two,
    PlaceName,
    SubscribeText,
 } from './styled'

function Contact() {
  return (
    <ContactCon>
    <InTouch>
    <HeadName>Get in touch</HeadName>
    <TextLine>support@amrutam.co.in</TextLine>
    <TextLine>Amrutam Pharmaceuticals Pvt Ltd.,<br />
    chitragupt ganj,Nai Sadak,Lashkar,<br />
    Gwalior - 474001</TextLine>
    <TextLine>+919713171999</TextLine>
    <IconsCon>
    <IconImg src={fb} alt="not found"></IconImg>
    <IconImg src={insta} alt="not found"></IconImg>
    <IconImg src={yt} alt="not found"></IconImg>
    <IconImg src={tw} alt="not found"></IconImg>
    <IconImg src={lnkdn} alt="not found"></IconImg>
    <IconImg src={pntrst} alt="not found"></IconImg>
    </IconsCon>
    </InTouch>
    <Info>
    <HeadName>Information</HeadName>
    <TextLine>About Us</TextLine>
    <TextLine>TErms and Conditions</TextLine>
    <TextLine>Privacy Policy</TextLine>
    <TextLine>Privacy Policy for Mobile Apps</TextLine>
    <TextLine>Shipping and Returns Policy</TextLine>
    <TextLine>International Delivery</TextLine>
    <TextLine>For Businesses, Hotels and Resorts</TextLine>
    </Info>
    <Subscribe>
    <HeadName>Subscribe to our Newsletter and join<br />
    Amrutam Family today!</HeadName>
    <SearchBar>
    <One>
    <PlaceName>Your Email Address</PlaceName>
    </One>
    <Two>
    <SubscribeText>Subscribe</SubscribeText>
    </Two>
    </SearchBar>
    </Subscribe>
    </ContactCon>
  )
}

export default Contact
