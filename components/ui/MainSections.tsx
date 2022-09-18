import React from 'react'
import classes from './main-section.module.css'

interface Props {
    children: JSX.Element | JSX.Element[]
}

const MainSections = ({children}: Props) => {
  return (
    <main className={classes.main}>{children}</main>
  )
}

export default MainSections