import React from 'react'
import {Logo} from './Logo'
import style from './Footer.module.css'
import Socials from './Socials'
import pages from 'content/pages.json'

export default function Footer() {
  return (
    <div className={style["footer"]}>
        <Logo/>
        <p>Creating a better world, one cause at a time</p>
        <span/>
        <Socials/>

        <div className={style["footer-links"]}>
            {pages.map((item, index) => (
                <div key={index}>
                    <h4 >{item.name}</h4>
                    {item.sections.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </div>
            ))}
        </div>
    </div>
  )
}