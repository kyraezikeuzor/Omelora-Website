import React from 'react'
import style from './FundCard.module.css'
import Link from 'next/link'
import Button from './Button'

export default function FundCard(props) {
  return (
    <div className={style["campaign"]}>
        <img src={props.src} alt={props.alt}></img>
        <div className={style["campaign-text-container"]}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
        <div className={style["progress-bar"]}></div>

        <div className={style["status"]}>
            <div>
                <b>Donation Raised</b>
                $ {props.raised}
            </div>
            <div>
                <b>Donation Goal</b>
                $ {props.goal}
            </div>
        </div>

        <div className={style["card-links"]}>
            <Button>Donate</Button>
        </div>
    </div>
  )
}
