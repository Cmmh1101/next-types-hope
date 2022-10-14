import React from 'react'
import Image from 'next/image'
import eventPost from '../../public/images/general/eventPost.svg'
import classes from './events.module.css'
import Heading from '../ui/Heading'
import DonateBtn from '../ui/DonateBtn'

type Props = {}

const Events = (props: Props) => {
  return (
    <section className={classes.section}>
        <div className={classes.div}>
            <h4>Where?</h4>
            <address>Lakeland: 12345 Lakeland drive</address>
            <h4>When?</h4>
            <time dateTime="2022-12-16">December 16 2022</time>
            <time dateTime="18:00">6:00 pm</time>
            <h4>How?</h4>
            <p>Tickets availabe now: <a href="/eventbrite.com" aria-role="link" className={classes.link}>Click here</a></p>
            <p>
            We would love it if you can join us on our Christmas Harvest for good help us give hope and happiness to as many children as possible this Christmas.
            </p>
        </div>
        <div className={`${classes.div} ${classes.img}`}>
            <Image src={eventPost} alt="Event Post" layout='responsive' />
        </div>
        <div className={classes.donate}>
        <p>If you can not attend, but you would like to support our cause, you can use the button below to donate</p>
            <DonateBtn />
        </div>
        
    </section>
  )
}

export default Events