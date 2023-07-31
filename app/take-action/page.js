import React from 'react'
import style from './page.module.css'
import Banner from '@/components/Global/Banner'

export default function page() {
  return (
    <div className={style.main}>
        <header>
            <h1>We offer many ways to <i>contribute</i> to our cause</h1>
            <p>Improving the health and education of children in southern Nigeria through activism and charitable activities.</p>
        </header>
        <Banner text="CAMFED catalyzes the power of the most 
      vulnerable girls and young women to create the future they imagine: for themselves, 
      for their communities, and for Africa."/>
    </div>
  )
}
