import React from 'react'
import Image from 'next/image'
import eventPost from '../../public/images/general/eventPost.svg'
import classes from './events.module.css'
import Heading from '../ui/Heading'

type Props = {}

const Events = (props: Props) => {
  return (
    <section className={classes.section}>
        <div>
            <p>
            We would love it if you can join us on our Christmas Harvest for good to help the needed community in Venezuela, and help us give hope and happiness to as many children as possible this Christmas.
            </p>
            <h4>Where?</h4>
            <address>Lakeland: 12345 Lakeland drive</address>
            <h4>When?</h4>
            <time dateTime="2022-12-16">December 16 2022</time>
            <time dateTime="18:00">6:00 pm</time>
            <h4>How?</h4>
            Tickets availabe now: <a href="/eventbrite.com">Click here</a>
        </div>
        <div className={classes.img}>
            <Image src={eventPost} alt="Event Post" layout='responsive' />
        </div>
    </section>
  )
}

export default Events