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
      <a href='https://facebook.com' aria-role="link" aria-label="facebook link" className={classes.fb} target="_blank" rel="noreferrer">
        <SiFacebook aria-label="facebook link" />
      </a>
      <a href='https://instagram.com' aria-role="link" aria-label="instagram link" className={classes.in} target="_blank" rel="noreferrer">
        <TiSocialInstagramCircular aria-label="instagram link" />
      </a>
      <a href='https://youtube.com' aria-role="link" aria-label="youtube link" className={classes.yt} target="_blank" rel="noreferrer">
        <SiYoutubemusic aria-label="youtube link" />
      </a>
    </div>
    
  )
}

export default SocialIcons