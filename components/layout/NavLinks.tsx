import Link from 'next/link'
import React from 'react'

interface Props {
    className?: string
}

const NavLinks = ({className}: Props) => {
  return (
    <div className={className}><Link href="/">Home</Link>
    <Link href="/">Who we are</Link>
    <Link href="/">Programs</Link>
    <Link href="/">Blog</Link>
    <Link href="/">Donate</Link></div>
  )
}

export default NavLinks