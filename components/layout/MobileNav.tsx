import React from 'react'
import Link from 'next/link'
import classes from './mobile-nav.module.css'
import Image from 'next/image'
import logo from '/public/logo.png'
import NavLinks from './NavLinks'

type Props = {}

const MobileNav = (props: Props) => {
  return (
    <nav className={classes.header}>
      <div className={classes.logo}>
        <Link href="/" role="link" aria-label="home page link">
          <a>
          <Image src={logo} alt="logo" layout='responsive' width={200} height={200} priority />
          </a>
        </Link>
      </div>
      <div className={classes.navigation}>
          <NavLinks />
      </div>
    </nav>
  )
}

export default MobileNav