import React, { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "../../Gallery";
import classes from "./Gallery.module.css";
import DonateBtn from "../ui/DonateBtn";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

interface ImageProps {
  url: string;
  alt: string;
}

const Gallery = () => {
  const [next, setNext] = useState(false);
  const [distance, setDistance] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);
  const [display, setDisplay] = useState<number>(0);

  const handleNext = () => {
    setCounter((prevCount) => prevCount + 1);
    // setDisplay((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCounter((prevCount) => prevCount - 1);
    // setDisplay((prev) => prev - 1);
  };

  const entries = Object.entries(images);

  const imagesArr: string[] = [];

  const mapping = entries.map((ent) => imagesArr.push(ent[1].url));

  console.log(
    entries
      .filter((current, index) => index === counter)
      .map((img, i) => {
        console.log(img[1].url, "UUUURRRRLLLLL", i);
      })
  );

  console.log(imagesArr, "IMAGES ARRAY");

  const [currentImage, setCurrentImage] = useState<ImageProps>();

  const getImage = () => {
    entries
      .filter((current, index) => index === counter)
      .map((img, i) => {
        setCurrentImage(img[1]);
      });
  };

  useEffect(() => {
    getImage();
  }, [counter]);

  console.log();

  return (
    <section className={classes.section}>
      <div className={classes.gallery}>
        <div className={classes.img}>
          <span className={classes.btnGroup}>
            <button
              className={classes.btnPrev}
              disabled={counter === 0}
              onClick={() => {
                handlePrev();
              }}
              style={
                counter === 0
                  ? { backgroundColor: "#03307d98", color: "#ffffff9d" }
                  : {}
              }
            >
              <FaAngleDoubleLeft aria-label="previous image" />
            </button>
            <button
              className={classes.btnNext}
              disabled={counter === images.length - 1}
              onClick={() => {
                handleNext();
              }}
              style={
                counter === images.length - 1
                  ? { backgroundColor: "#03307d98", color: "#ffffff9d" }
                  : {}
              }
            >
              <FaAngleDoubleRight aria-label="next image" />
            </button>
          </span>
          <Image
            src={currentImage?.url!}
            alt={currentImage?.alt}
            width={600}
            height={600}
            layout="responsive"
            objectFit="cover"
            className={`${classes.img}`}
          />
          <figcaption>{currentImage?.alt}</figcaption>
        </div>
      </div>
      <div className={classes.text}>
        <p>
          We are getting ready to bring some joy children in need in Venezuela,
          thank you for your donations and for helping us contunie to bring Hope
          to our Venezuelan kids.
        </p>
        <DonateBtn />
      </div>
    </section>
  );
};

export default Gallery;
