import React from 'react'
import classes from './quoteBlock.module.css'

interface Props {
    children: JSX.Element | JSX.Element[]
}

const QuoteBlock = ({children}: Props) => {
  return (
    <div className={classes.verse}>{children}</div>
  )
}

export default QuoteBlock