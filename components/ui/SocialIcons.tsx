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
      <a href='https://facebook.com' className={classes.fb} target="_blank">
        <SiFacebook />
      </a>
      <a href='https://instagram.com' className={classes.in} target="_blank">
        <TiSocialInstagramCircular />
      </a>
      <a href='https://youtube.com' className={classes.yt} target="_blank">
        <SiYoutubemusic />
      </a>
    </div>
    
  )
}

export default SocialIcons