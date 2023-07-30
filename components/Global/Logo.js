import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from './Logo.module.css'

export const Logo = ({}) => {

  return (
    <Link href='/' className={style["logo"]}> 
        <Image width={30} height={30} src='/omelora-logo.png' alt="" />
        <p>Omelora</p>
    </Link>
  );
};

export default Logo;