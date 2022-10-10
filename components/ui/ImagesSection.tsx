import React from 'react'
import Image, { StaticImageData } from 'next/image'
import classes from './imagesSection.module.css'

interface Props {
    imageLeft: string | StaticImageData
    altLeft: string
    imageRight: string | StaticImageData
    altRight: string
}

const ImagesSection = ({imageLeft, altLeft, imageRight, altRight}: Props) => {
  return (
    <div className={classes.images}>
          <div className={classes.img}>
            <Image
              src={imageLeft}
              alt={altLeft}
              height={400}
              width={400}
              layout="responsive"
            />
          </div>
          <div className={classes.img}>
            <Image
              src={imageRight}
              alt={altRight}
              height={400}
              width={400}
              layout="responsive"
            />
          </div>
        </div>
  )
}

export default ImagesSection