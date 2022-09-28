import Image, { StaticImageData } from 'next/image'
import React from 'react'
import classes from './banner.module.css'

interface Props {
    background: string;
    title?: string;
    description?: string;
    className?: string;
  }

const Banner = ({
    background,
    title,
    description,
    className
  }: Props) => {
  return (
    <section className={classes.banner} style={{ backgroundImage: `url(${background})` }}>
        <main className='container'>
            <h2>{title}</h2>
            <p>{description}</p>
        </main>
        <div className={classes.overlay}></div>
    </section>
  )
}

export default Banner