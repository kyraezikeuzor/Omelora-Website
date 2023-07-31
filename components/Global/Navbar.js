'use client'
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { Button } from './Button';
import styles from './Navbar.module.css';
import pageData from '../../content/pages.json';
import Image from 'next/image';
import {Logo} from './Logo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import icons
import {faXmark, faBars} from "@fortawesome/free-solid-svg-icons";

function toPath(item) {
  return '/' + item.toLowerCase().replaceAll(" ", "-")
}

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  useEffect(() => {
    const showButton = () => {
      if(window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    }

    showButton([])

    window.addEventListener('resize', showButton);
    
  }, []);
  
  let itemList = pageData.map((item, index) => {
    if (item.name == "Home") {
        return <li className={styles["nav-item"]} key={index}> <Link onClick={closeMobileMenu} className={styles["nav-links"]} href="/">{item.name} </Link></li>
    }
    else {
        return <li className={styles["nav-item"]} key={index}> <Link  onClick={closeMobileMenu} className={styles["nav-links"]} href={toPath(item.name)}>{item.name} </Link></li>
    }
    
  })

  return (
    <div className={styles["nav"]}>
        <nav className={styles.navbar}>
          
            <div className={styles["navbar-container"]}>
                <div className={styles["nav-logo"]}>
                  <Logo onClick={closeMobileMenu}/>
                </div>
                

                <div className={styles["menu-icon"]} onClick={handleClick}>
                  
                  <FontAwesomeIcon icon={click ? faXmark : faBars } className={click ? styles['fa-times'] : styles['fa-bars']}></FontAwesomeIcon>
                
                </div>

                <ul className={click ? `${styles['nav-menu']} ${styles.active}` : styles['nav-menu']}>

                {itemList}

                  <li className={styles['nav-item']}>
                    <Link href='/about-us' className={styles['nav-links-mobile']} onClick={closeMobileMenu}>
                      Donate
                    </Link>
                  </li>
                  {button && <Button path='/learn-more' buttonStyle='btn--outline'>Donate</Button>}
                
                </ul>
        
            </div>
        </nav>
        <div className={styles["alert-container"]}>
            <p className={styles["alert-text"]}>* Our Spring and Summer Youth Computer Science Virtual Camps for Grades 3-8 Are in Session - Sign Up Today! *</p>
        </div>
    </div>
  )
}

export default Navbar;
