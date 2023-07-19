import Button from "./Button";
import classes from "./header.module.css";
import Image, { StaticImageData } from "next/image";

interface Props {
  title?: string;
  titleDeco?: string;
  subtitleDeco?: string;
  description?: string;
  buttonText?: string | undefined;
  bannerTitle?: string;
  overlay?: string;
  image?: StaticImageData | string;
  altText?: string;
  link?: string;
  videoSrc?: string;
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
  link,
  videoSrc,
}: Props) => {
  return (
    <header className={ image ? classes.smallHeader : classes.header}>
      {image ? <Image
        className={classes.imgBox}
        src={image}
        alt={altText!}
        fill
        style={{objectFit: 'cover', objectPosition: 'center top'}}
        priority
      /> : <video className={classes.imgBox} loop autoPlay muted playsInline>
      <source src={videoSrc} type="video/mp4" />
    </video>}
      
      <div className={`${classes.container} container`}>
        <div className={classes.section}>
          <h1>{title}</h1>
          {titleDeco && (
            <>
              <span>{subtitleDeco}</span>
              <h1 className={classes.titleDeco}>{titleDeco}</h1>
            </>
          )}
          <p>{description}</p>
          {buttonText && <Button link={link} text={buttonText} />}
        </div>
      </div>
      {overlay && overlay === "light" ? (
        <div className={classes.overlay}></div>
      ) : (
        <div className={classes.darkOverlay}></div>
      )}
    </header>
  );
};

export default Header;
