import Button from './Button';
import classes from './header.module.css'
import Image, { StaticImageData } from 'next/image'

interface Props {
  background?: string;
  title?: string;
  titleWIthEffect?: string;
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
  titleWIthEffect,
  buttonText,
  description,
  className,
  bannerTitle,
  overlay,
  altText,
  image
}: Props) => {
  return (
    <header className={classes.header}>
        <div className={`${classes.container} container`}>
            <div className={classes.section}>
                <h1>{title}</h1>
                <p>{description}</p>
                {buttonText && <Button link="/programs" text={buttonText} />}
            </div>
            <div className={classes.img}>
              {image && <div><Image src={image} alt={altText} height={450} width={450} layout="intrinsic" /></div>}
            </div>
        </div>
    </header>
  );
};

export default Header;