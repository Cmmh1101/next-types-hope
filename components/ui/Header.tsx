import Button from './Button';
import classes from './header.module.css'
import Image, { StaticImageData } from 'next/image'

interface Props {
  background?: string | StaticImageData;
  title?: string;
  titleDeco?: string
  subtitleDeco?: string;
  description?: string;
  buttonText?: string | undefined;
  className?: string;
  bannerTitle?: string;
  overlay?: boolean;
  image: StaticImageData | string
  altText?: string
}

const Header = ({
  background,
  title,
  subtitleDeco,
  buttonText,
  description,
  className,
  titleDeco,
  overlay,
  altText,
  image
}: Props) => {
  return (
    <header className={classes.header} style={{ backgroundImage: `url(${background})` }}>
      <Image className={classes.imgBox} src={image} alt={altText} layout="fill" objectFit='cover' objectPosition='center bottom' />
        <div className={`${classes.container} container`}>
            <div className={classes.section}>
                <h1>{title}</h1>

                {titleDeco && <><span>{subtitleDeco}</span><h1 className={classes.titleDeco}>{titleDeco}</h1></>}
                <p>{description}</p>
                {buttonText && <Button link="/programs" text={buttonText} />}
            </div>
        </div>
        {overlay && <div className={classes.overlay}
        ></div>}
    </header>
  );
};

export default Header;