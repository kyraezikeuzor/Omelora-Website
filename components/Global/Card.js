import React from 'react'
import style from './Card.module.css'

export default function Card(props) {
  return (
    <div className={style["card"]}>
        <img src={props.src} alt={props.alt}></img>
        
        <h3>{props.name}</h3>
        <p>{props.description}</p>

        <svg xmlns="http://www.w3.org/2000/svg" width="322" height="32" viewBox="0 0 322 32" fill="none">
        <path d="M322 0.806152L0 18.8062V31.3062H322V0.806152Z" fill={props.color}/>
        </svg>
    </div>
  )
}
