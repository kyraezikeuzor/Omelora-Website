import React from 'react'
import style from './Connect.module.css'
import Button from '../Global/Button'
import Socials from '../Global/Socials'

export default function Connect() {
  return (
    <div className={style["connect"]}>
        <div>
            <h2>Connect with us on social media</h2>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
            <Socials/>
        </div>

        <img src="/divine-wounds-img-1.jpg"></img>
    </div>
  )
}
