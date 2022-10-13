import React from 'react'
import Link from 'next/link'
import {SiYoutubemusic, SiFacebook} from 'react-icons/si'
import {FaFacebookSquare} from 'react-icons/fa'
import {TiSocialInstagramCircular} from 'react-icons/ti'
import classes from './socialIcons.module.css'

interface Props {
    className?: string
  }

const SocialIcons = ({className}: Props) => {
  return (
    <div className={classes.icons}>
      <a href='https://facebook.com' aria-valuetext="facebook link" className={classes.fb} target="_blank" rel="noreferrer">
        <SiFacebook />
      </a>
      <a href='https://instagram.com' aria-valuetext="instagram link" className={classes.in} target="_blank" rel="noreferrer">
        <TiSocialInstagramCircular />
      </a>
      <a href='https://youtube.com' aria-valuetext="youtube link" className={classes.yt} target="_blank" rel="noreferrer">
        <SiYoutubemusic />
      </a>
    </div>
    
  )
}

export default SocialIcons