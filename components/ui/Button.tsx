import Link from 'next/link'
import React from 'react'
import classes from './button.module.css'

interface Props {
    className?: string
    link: string | undefined
    text: string | undefined
}

const ctaButton = ({text, link, className}: Props) => {
  return (
    <Link href={link!} className={`${className} ${classes.btn}`}>{text}</Link>
  )
}

export default ctaButton