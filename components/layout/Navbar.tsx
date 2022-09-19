import React, { useState } from 'react'
import Link from 'next/link'
import classes from './navbar.module.css'
import Image from 'next/image'
import logo from '/public/logo.png'
import NavLinks from './NavLinks'

const Navbar = () => {

  const [toggle, setToggle] = useState<boolean>()
  const [open, setOpen] = useState<boolean>(false)

  const setNavOpen = () => {
    setOpen(!open)
  }

  return (
    <nav className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <a>
          <Image src={logo} alt="logo" layout='responsive' />
          </a>
        </Link>
      </div>
      <div className={classes.navigation}>
          <p className={classes.show} onClick={setNavOpen}>toggle</p>
          <NavLinks className={open ? `${classes.mobileNav}` : `${classes.hide}`} toggle={setNavOpen} />
      </div>
    </nav>
  )
}

export default Navbar