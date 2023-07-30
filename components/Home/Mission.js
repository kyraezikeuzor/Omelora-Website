import React from 'react'
import Button from '../Global/Button'
import Card from '../Global/Card'
import pillars from 'content/pillars.json'
import style from './Mission.module.css'

export default function Mission() {
  return (
    <div className={style["mission-section"]}>
        <div className={style["mission-text-container"]}>
            <h2>Nurturing <b>Minds</b>, Nourishing Lives.</h2>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            <div className={style["mission-btns"]}>
                <Button>Donate</Button>
                <Button>View Our Campaigns</Button>
            </div>
            <img className={style["top-right-img"]} src="/yellow-four-triangles.png" alt="Four Yellow Triangles"></img>
            <img className={style["bottom-left-img"]} src="/red-flower-shape.png" alt="Red Flower Shape"></img>
        </div>
        <div className={style["pillars-section"]}>
            <svg xmlns="http://www.w3.org/2000/svg" width="931" height="15" viewBox="0 0 931 15" fill="none">
                <path d="M137.36 8.92183C140.662 9.17409 143.972 8.54279 146.949 7.09278V7.09278C150.228 5.49592 153.903 4.89519 157.52 5.36489L187.875 9.30705L226.168 9.30704L288.395 10.9352L344.127 5.51C350.037 4.93465 355.99 4.94569 361.898 5.54294L381.734 7.54809L397.9 8.67962C403.861 9.09687 409.849 8.91939 415.775 8.14981L442.764 4.64486L489.433 2.70938L509.748 0.655776C515.339 0.0906028 520.971 0.0502946 526.569 0.53538L551.659 2.70938L623.923 4.64486L722.782 9.30704L770.275 5.53086C777.675 4.94245 785.12 5.27193 792.439 6.51178L801.479 8.04298C806.445 8.88421 811.473 9.30704 816.51 9.30704H928.25C929.769 9.30704 931 10.5381 931 12.0566V12.0566C931 13.5751 929.769 14.8062 928.25 14.8062H864.077H611.582L315.918 14.8062H252.495H217.792H187.875H163.942H136.419H81.3728H3.33463C1.49296 14.8062 0 13.3132 0 11.4715V11.4715C0 9.41531 1.84281 7.84906 3.87213 8.18049L10.7699 9.30704L14.4709 9.72666C21.5424 10.5284 28.6912 10.3422 35.7114 9.17338L37.6445 8.85152C42.842 7.98615 48.1291 7.7921 53.376 8.27413L55.7699 8.49405C61.6208 9.03156 67.5207 8.4997 73.1811 6.92448V6.92448C78.6008 5.41627 84.2417 4.86403 89.8509 5.29253L137.36 8.92183Z" fill="#E1E88F"/>
            </svg>
            <div className={style["pillars-section-content"]}>
                <div className={style["pillars-text-container"]}>
                    <h2>Our Pillars</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
                </div>
                
                
                <div className={style["pillars"]}>
                    {pillars.map((item, index) => (
                        <Card key={index}
                        src="/divine-wounds-img-1.jpg"
                        alt="Nigeria"
                        name={item.name} 
                        description="Social justice starts with educated girls, supporting each other to become independent, influential women, working together with communities to provide equal access to tools and opportunities for all."
                        color={item["svg-color"]}
                        />
                    ))}
                </div> 
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="931" height="15" viewBox="0 0 390 15" fill="none">
                <path d="M333.216 6.52916C331.445 6.19546 329.632 6.84724 328.479 8.23224C327.184 9.78785 325.075 10.4019 323.147 9.78445L311.298 5.98856L295.257 5.98856L279.799 4.99086C272.766 4.53697 265.706 5.14289 258.853 6.78831L254.177 7.91109C246.257 9.81307 237.994 9.77707 230.09 7.80615C223.174 6.61212 216.073 7.10664 209.389 9.24763L209.015 9.36754C206.029 10.324 202.952 10.967 199.833 11.2861L187.88 12.5089C185.945 12.7068 184.027 13.0423 182.14 13.5129C176.089 15.0218 169.773 15.1285 163.674 13.825L162.252 13.5211C160.025 13.0451 157.767 12.7308 155.494 12.5807L128.636 10.8062L95.6629 6.97033C90.0706 6.31975 84.4111 6.54019 78.8863 7.62379L70.045 9.35784C65.2306 10.3021 60.2442 9.79646 55.7174 7.90492C52.69 6.63994 49.4416 5.98856 46.1605 5.98856L2.84119 5.98856C1.27203 5.98856 -3.05176e-05 4.71651 -3.05176e-05 3.14736C-3.05176e-05 1.5782 1.27203 0.306153 2.84119 0.306153L28.0345 0.306153L133.806 0.306153L257.661 0.306152L284.229 0.306152L298.766 0.306152L311.298 0.306152L321.324 0.306152L332.853 0.306152L355.913 0.306152L386.977 0.306152C388.647 0.306152 390 1.6596 390 3.32916C390 5.47102 387.834 6.93354 385.847 6.13316L385.488 5.98856L384.095 5.59881C381.1 4.76111 377.911 4.94787 375.034 6.12945L374.144 6.49491C372.066 7.34824 369.776 7.53977 367.585 7.04334L367.187 6.95309C364.473 6.33817 361.626 6.88383 359.333 8.45843C357.143 9.96126 354.446 10.5297 351.836 10.038L333.216 6.52916Z" fill="#E1E88F"/>
            </svg>
        </div>
    </div>
  )
}
