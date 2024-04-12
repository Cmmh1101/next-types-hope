import Image from "next/image";
import React from "react";
import classes from "./banner.module.css";

interface Props {
  background?: string;
  title?: string;
  description?: string;
  className?: string;
  imgLeft?: boolean;
}

const Banner = ({ background, title, description, imgLeft }: Props) => {
  const splitText = description?.split(".")
  return (
    <section className={imgLeft ? classes.imgLeft : classes.banner}>
      <main>
        <h2>{title}</h2>
        {splitText?.map((text, i) => <p key={i}>{text}.</p>)}
      </main>
      {/* <div className={classes.overlay}></div> */}
      <div className={classes.img}>
        <Image src={background!} alt="Venezuela Volunteers" width={500} height={400}/>
      </div>
    </section>
  );
};

export default Banner;
