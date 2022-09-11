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
          <Image src={logo} alt="logo" height={100} width={100} />
          </a>
        </Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar