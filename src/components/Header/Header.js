import React from 'react'
import { HeaderCon, ItemCon,Logos } from './styled';
import namelogo from '../assets/namelogo.png';
import menu from '../assets/menu.png';

function Header() {
  return (
    <HeaderCon>
    <ItemCon>
    
    <Logos src={menu} alt="not found"></Logos>
    <Logos src={namelogo} alt="not found"></Logos>
    </ItemCon>
    </HeaderCon>
  )
}

export default Header
