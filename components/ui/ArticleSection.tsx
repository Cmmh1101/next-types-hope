import React from 'react'
import classes from './articleSection.module.css'

interface Props {
    children: JSX.Element | JSX.Element[]
}

const ArticleSections = ({children}: Props) => {
  return (
    <article className={classes.article}>{children}</article>
  )
}

export default ArticleSections