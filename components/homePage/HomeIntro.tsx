import React from 'react'
import ReactPlayer from 'react-player/youtube'
import classes from './HomeIntro.module.css'

type Props = {}

const HomeIntro = (props: Props) => {
  return (
    <section className={classes.section}>
        <div>
        <p>Hope for the Nations was born from the desperate situation that the people of Venezuela are experiencing an economic crisis so deep that it brought with it</p>
          <ul>
            <li>
              a lack of food
            </li>
            <li>
            hospitals without supplies
            </li>
            <li>
            an increase in abandoned children
            </li>
            <li>
            an increasing number of people eating from garbage dumps
            </li>
            <li>
            a great, unprecedented exile in this Latin American country
            </li>
          </ul>
          <p>The Lord Jesus Christ told us in Matthew 25:35, “Because I was hungry, and you gave me food; I was thirsty, and you gave me to drink; I was a stranger, and you took me in; I was naked, and you covered me; sick, and you visited me; I was in prison, and you came to me.”
        </p>
        </div>
        <div>
        <ReactPlayer url='https://www.youtube.com/embed/Pch09DVpw10' />
        </div>
        {/* <h3>Our Beginnings</h3> */}
        
    </section>
  )
}

export default HomeIntro