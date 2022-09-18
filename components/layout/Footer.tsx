import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import classes from './footer.module.css'
import logo from '/public/logo.png'
import NavLinks from './NavLinks'
import SocialIcons from '../ui/SocialIcons'
import DonateBtn from '../ui/DonateBtn'


const Footer = () => {
  return (
    <footer className={`container ${classes.footer}`}>
      <NavLinks className={classes.navigation} donateLink={classes.donateLink} />
      <div className={classes.section}>
      <Link href="/" className={classes.logo}>
        <a>
        <Image src={logo} alt="logo" height={200} width={200} />
        </a>
      </Link>
      <DonateBtn className={classes.donate} />
      <SocialIcons className={classes.socials} />
      </div>
    </footer>
  )
}

export default Footer