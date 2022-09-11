import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import classes from './footer.module.css'
import logo from '/public/logo.png'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className={classes.footer}>footer <Link href="/">
    <a>
    <Image src={logo} alt="logo" height={80} width={80} />
    </a>
  </Link></footer>
  )
}

export default Footer