import React from 'react'
import style from './page.module.css'
import Card from '../../components/Global/Card'

export default function page() {
  return (
    <main className={style.main}>
        <header>
            <h1>Keep track of <i>disasters</i> and crisis events in Nigeria</h1>
            <p>Improving the health and education of children in southern Nigeria through activism and charitable activities.</p>
        </header>
        <section>
            <h2>What does this map track?</h2>
            <p>Violence erupted on April 15th, in a culmination of weeks of tensions between Gen. Abdel-Fattah Burhan, the commander of the Sudanese Armed Forces, and Gen. Mohammed Hamdan Dagalo, the head of the Rapid Support Forces (RSF), a powerful Sudanese paramilitary group.</p>
        </section>
        <div className={style.cards}>
    
        </div>
        
    </main>
  )
}
