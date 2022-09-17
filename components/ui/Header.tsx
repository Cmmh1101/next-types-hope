import Button from './Button';
import classes from './header.module.css'
import Image from 'next/image'
import heroImg from '../../public/images/general/hero-image.jpg'

interface Props {
  background?: string;
  title?: string;
  titleWIthEffect?: string;
  description?: string;
  buttonText?: string | undefined;
  className?: string;
  bannerTitle?: string;
  overlay?: boolean;
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
                <div><Image src={heroImg} alt='litle boy' height={500} width={500} layout="intrinsic" /></div>
                
            </div>
        </div>
    </header>
  );
};

export default Header;