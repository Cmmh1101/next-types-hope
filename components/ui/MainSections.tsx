import React from 'react'
import classes from './mainSection.module.css'

interface Props {
    children: JSX.Element | JSX.Element[]
    className?: string
}

const MainSections = ({children, className}: Props) => {
  return (
    <main className={`${classes.main} ${className}`}>{children}</main>
  )
}

export default MainSections