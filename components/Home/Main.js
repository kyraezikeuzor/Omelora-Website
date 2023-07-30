import React from 'react'
import campaigns from 'content/campaigns.json'
import FundCard from '../Global/FundCard'
import style from './Main.module.css'
import Button from '../Global/Button'

export default function Main() {
  return (
    <div className={style["main"]}>
        <div>
            <h2>Help Support Our Campaigns</h2>
            <p>At vero eos et accusamus et iusto odio 
                dignissimos ducimus qui blanditiis praesentium 
                voluptatum deleniti atque corrupti quos dolores et quas 
                molestias excepturi sint occaecati cupiditate non provident, 
                similique sunt in culpa qui officia deserunt mollitia animi, 
                id est laborum et dolorum fuga.</p>
        </div>

        <div className={style["campaigns"]}>
            {campaigns.map((item, index) => (
                <FundCard key={index}
                src={item.src}
                name={item.name}
                description={item.description}
                raised={item.raised}
                goal={item.goal}
                />
            ))}
        </div>
        <div className={style["support-section"]}>
            <div className={style["support-text-container"]}>
            <h2>Support Us by Volunteering</h2>
                <p>At vero eos et accusamus et iusto odio 
                    dignissimos ducimus qui blanditiis praesentium 
                    voluptatum deleniti atque corrupti quos dolores et quas 
                    molestias excepturi sint occaecati cupiditate non provident, 
                    similique sunt in culpa qui officia deserunt mollitia animi, 
                    id est laborum et dolorum fuga.</p>
                <Button>Learn More</Button>
            </div>
            <img src="divine-wounds-img-1.jpg"/>
        </div>
        
    </div>
  )
}
