import React from 'react'
import style from './Banner.module.css'

export default function Banner(props) {
  return (
    <div className={style["banner"]}>
        {props.text}
    </div>
  )
}
