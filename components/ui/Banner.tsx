import Image from "next/image";
import React from "react";
import classes from "./banner.module.css";

interface Props {
  background?: string;
  title?: string;
  description?: string;
  className?: string;
}

const Banner = ({ background, title, description }: Props) => {
  return (
    <section className={classes.banner}>
      <main className="container">
        <h2>{title}</h2>
        <p>{description}</p>
      </main>
      <div className={classes.overlay}></div>
      <div className={classes.img}>
        <Image src={background!} alt="Venezuela Volunteers" width={400} height={400}/>
      </div>
    </section>
  );
};

export default Banner;
