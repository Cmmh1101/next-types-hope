import React from 'react'
import classes from './quoteBlock.module.css'

interface Props {
    children: JSX.Element | JSX.Element[]
    verse?: boolean
}

const QuoteBlock = ({children, verse}: Props) => {
  return (
    <>
    {!verse ? <section className={classes.quote}>{children}</section> : <section className={classes.verse}>{children}</section>}
    </>
  )
}

export default QuoteBlock