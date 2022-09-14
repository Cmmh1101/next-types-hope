import Link from 'next/link'
import React from 'react'

interface Props {
    className?: string
}

const NavLinks = ({className}: Props) => {
  return (
    <div className={className}>
      <div><Link href="/"><a>Home<span></span></a></Link></div>
      <div><Link href="/"><a>About us<span></span></a></Link></div>
      <div><Link href="/programs"><a>Programs<span></span></a></Link></div>
      <div><Link href="/beneficiaties"><a>Beneficiaries<span></span></a></Link></div>
      <div><Link href="https://www.paypal.com/donate?hosted_button_id=JWBZEQHW76WC4"
    target="_blank"><a>Donate<span></span></a></Link></div>
    </div>
  )
}

export default NavLinks