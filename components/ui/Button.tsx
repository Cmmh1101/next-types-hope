import Link from 'next/link'
import React from 'react'
import classes from './button.module.css'

interface Props {
    className?: string
    link: string
    text: string
}

const ctaButton = ({text, link}: Props) => {
  return (
    <Link href={link}><a className={`className ${classes.btn}`}>{text}</a></Link>
  )
}

export default ctaButton