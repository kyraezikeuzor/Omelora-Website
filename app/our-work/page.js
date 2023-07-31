import React from 'react'
import style from './page.module.css'
import FundCard from '../../components/Global/FundCard'
import Banner from '../../components/Global/Banner'
import campaigns from 'content/campaigns.json'

export default function page() {
  return (
    <main className={style.main}>
        <header>
            <h1>We work to change the lives of children through <i>charitable</i> activities</h1>
            <p>Improving the health and education of children in southern Nigeria through activism and charitable activities.</p>
        </header>
        <Banner text="CAMFED catalyzes the power of the most vulnerable girls and young women to create the future they imagine: for themselves, for their communities, and for Africa."/>
        <div className={style.campaigns}>
            {campaigns.map((item, index) => (
                <FundCard key={index}
                name={item.name}
                src={item.src}
                description={item.description}
                raised={item.raised}
                goal={item.goal}
                />
            ))}
        </div>

    </main>
  )
}
