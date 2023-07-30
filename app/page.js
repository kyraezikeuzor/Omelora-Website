import Image from 'next/image'
import styles from './page.module.css'
import Hero from '../components/Home/Hero'
import Banner from '../components/Global/Banner'
import Mission from '../components/Home/Mission'
import Work from '../components/Home/Work'
import Main from '../components/Home/Main'
import Connect from '../components/Home/Connect'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <Banner text="CAMFED catalyzes the power of the most 
      vulnerable girls and young women to create the future they imagine: for themselves, 
      for their communities, and for Africa."/>
      <Mission/>
      <Banner text="CAMFED catalyzes the power of the most 
      vulnerable girls and young women to create the future they imagine: for themselves, 
      for their communities, and for Africa."/>
      <Work/>
      <Banner text="CAMFED catalyzes the power of the most 
      vulnerable girls and young women to create the future they imagine: for themselves, 
      for their communities, and for Africa."/>
      <Main/>
      <Banner text="CAMFED catalyzes the power of the most 
      vulnerable girls and young women to create the future they imagine: for themselves, 
      for their communities, and for Africa."/>
      <Connect/>
      <Banner text="CAMFED catalyzes the power of the most 
      vulnerable girls and young women to create the future they imagine: for themselves, 
      for their communities, and for Africa."/>
      
    </main>
  )
}
