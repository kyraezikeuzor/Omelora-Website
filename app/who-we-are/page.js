import React from 'react'
import style from './page.module.css'
import Socials from '../../components/Global/Socials'
import Banner from '../../components/Global/Banner'

export default function page() {
  return (
    <div className={style.main}>
        <header>
          <h1>We work to improve the <b>welfare</b> of children in <i>southern</i> Nigeria</h1>
          <p>Improving the health and education of children in southern Nigeria through activism and charitable activities.</p>
          
          <Socials/>
          <img src="/modern-bold-asterisk.png" alt="Red Asterisk"></img>
        </header>
        
        <Banner text="CAMFED catalyzes the power of the most vulnerable girls and young women to create the future they imagine: for themselves, for their communities, and for Africa."></Banner>
        
    </div>
  )
}
