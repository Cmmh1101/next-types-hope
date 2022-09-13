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
      <div><Link href="/"><a>Programs<span></span></a></Link></div>
      <div><Link href="/"><a>Blog<span></span></a></Link></div>
      <div><Link href="/"><a>Donate<span></span></a></Link></div>
    </div>
  )
}

export default NavLinks