import Button from './Button';
import classes from './header.module.css'
import Image, { StaticImageData } from 'next/image'

interface Props {
  title?: string;
  titleDeco?: string
  subtitleDeco?: string;
  description?: string;
  buttonText?: string | undefined;
  bannerTitle?: string;
  overlay?: string;
  image: StaticImageData | string
  altText?: string
  link: string
}

const Header = ({
  title,
  subtitleDeco,
  buttonText,
  description,
  titleDeco,
  overlay,
  altText,
  image,
  link
}: Props) => {
  return (
    <header className={classes.header}>
      <Image className={classes.imgBox} src={image} alt={altText} layout="fill" objectFit='cover' objectPosition='center top' />
        <div className={`${classes.container} container`}>
            <div className={classes.section}>
                <h1>{title}</h1>
                {titleDeco && <><span>{subtitleDeco}</span><h1 className={classes.titleDeco}>{titleDeco}</h1></>}
                <p>{description}</p>
                {buttonText && <Button link={link} text={buttonText} />}
            </div>
        </div>
        {overlay && overlay === 'light' ? <div className={classes.overlay}
        ></div> : <div className={classes.darkOverlay}
        ></div> }
    </header>
  );
};

export default Header;