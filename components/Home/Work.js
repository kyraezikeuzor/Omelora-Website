import React from 'react'
import style from './Work.module.css'
import Button from '../Global/Button'

export default function Work() {
  return (
    <div className={style["work"]}>
        <div className={style["work-text-container"]}>
            <h2>Our Work</h2>
            <p>"At vero eos et accusamus et iusto odio dignissimos 
                ducimus qui blanditiis praesentium voluptatum deleniti 
                atque corrupti quos dolores et quas molestias excepturi 
                sint occaecati cupiditate non provident, similique sunt in 
                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            <Button>View Our Campaigns</Button>
        </div>
        <img src="/divine-wounds-img-1.jpg" alt="Nigeria"></img>
        <img className={style["top-left-img"]} src="/yellow-four-triangles.png" alt="Four Yellow Triangles"></img>
    </div>
  )
}
