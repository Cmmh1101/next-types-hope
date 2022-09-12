import React from 'react'
import Link from 'next/link'
import classes from './navbar.module.css'
import Image from 'next/image'
import logo from '/public/logo.png'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <a>
          <Image src={logo} alt="logo" layout='responsive' />
          </a>
        </Link>
      </div>
      <nav className={classes.navigation}>
          <NavLinks />
      </nav>
    </header>
  )
}

export default Navbar