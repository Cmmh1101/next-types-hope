import React from 'react'
import Link from 'next/link'
import {FaYoutubeSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import classes from './socialIcons.module.css'

interface Props {
    className?: string
  }

const SocialIcons = ({className}: Props) => {
  return (
    <div className={classes.icons}>
      <a href='https://www.facebook.com/hopeforthenations7' role="link" aria-label="facebook link" className={classes.fb} target="_blank" rel="noreferrer">
        <FaFacebookSquare aria-label="facebook link" />
      </a>
      <a href='https://www.instagram.com/hopeforthenations7' role="link" aria-label="instagram link" className={classes.in} target="_blank" rel="noreferrer">
        <BsInstagram aria-label="instagram link" />
      </a>
      <a href='https://www.youtube.com/channel/UCN0GdsHHo__oHqqZ63IUB7g' role="link" aria-label="youtube link" className={classes.yt} target="_blank" rel="noreferrer">
        <FaYoutubeSquare aria-label="youtube link" />
      </a>
    </div>
    
  )
}

export default SocialIcons