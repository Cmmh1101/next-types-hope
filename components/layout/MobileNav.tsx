import React from 'react'
import Link from 'next/link'
import classes from './mobile-nav.module.css'
import Image from 'next/image'
import logo from '/public/logo.png'
import NavLinks from './NavLinks'

const MobileNav = () => {
  return (
    <nav className={classes.header}>
      <div className={classes.logo}>
        <Link href="/" role="link" aria-label="home page link">
          <Image src={logo} alt="logo" width={200} height={200} priority />
        </Link>
      </div>
      <div className={classes.navigation}>
          <NavLinks />
      </div>
    </nav>
  )
}

export default MobileNav