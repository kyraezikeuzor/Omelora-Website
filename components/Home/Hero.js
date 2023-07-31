import React from 'react'
import style from './Hero.module.css'
import Button from '../Global/Button'

export default function Hero() {
  return (
    <div className={style["hero"]}>
        <div className={style["hero-text-container"]}>
            <h1>Omelora is supporting children to learn, <b>thrive</b>, and <i>change</i></h1>
            <p>Improving the health and education of children in southern 
                Nigeria through activism and charitable activities.</p>
            <Button>Learn More</Button>
        </div>
        <img src="/omelora-hero-image.png" alt="Collage"></img>
    </div>
  )
}