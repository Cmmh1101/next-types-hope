import React from 'react'
import Link from 'next/link'
import classes from './navbar.module.css'
import Image from 'next/image'
import logo from '/public/logo.png'

const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <a>
          <Image src={logo} alt="logo" height={80} width={80} />
          </a>
        </Link>
      </div>
      <nav className={classes.navigation}>
          <Link href="/">Home</Link>
          <Link href="/">Who we are</Link>
          <Link href="/">Programs</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Donate</Link>
      </nav>
    </header>
  )
}

export default Navbar