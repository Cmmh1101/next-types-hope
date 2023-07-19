import React, { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "../../Gallery";
import classes from "./Gallery.module.css";
import DonateBtn from "../ui/DonateBtn";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface ImageProps {
  url: string;
  alt: string | undefined;
}

const Gallery = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleNext = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const handlePrev = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  const entries = Object.entries(images);

  const imagesArr: string[] = [];

  console.log(imagesArr, "IMAGES ARRAY");

  const [currentImage, setCurrentImage] = useState<ImageProps>();

  const prevIsDisable = counter === 0;
  const nextIsDisable = counter === images.length - 1;

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
      <div className={classes.text}>
        <div>
          <p>
            Your support is helping us change lives in Venezuelan-needed
            communities. We have blessed families, the elderly, and children
            thanks to supporters like you, so we want to say, THANK YOU! <br />
          </p>
          <p>
            This Christmas, we plan to bring joy to Venezuelan children and we
            still need your help to provide Christmas presents to as many
            children as possible.
          </p>
          <strong>Thank you for your continued support!</strong>
          <br />
          <small>Hope For The Nations</small>
        </div>
        <DonateBtn />
      </div>
      <div className={classes.gallery}>
        <div className={classes.img}>
          <span className={classes.btnGroup}>
            <button
              className={prevIsDisable ? classes.inactive : ""}
              disabled={counter === 0}
              onClick={() => {
                handlePrev();
              }}
            >
              <FaAngleLeft aria-label="previous image" />
            </button>
            <button
              className={nextIsDisable ? classes.inactive : ""}
              disabled={nextIsDisable}
              onClick={() => {
                handleNext();
              }}
            >
              <FaAngleRight aria-label="next image" />
            </button>
          </span>
          <Image
            src={currentImage?.url!}
            alt={currentImage?.alt!}
            width={600}
            height={600}
            // commented for now. needs version update change
            // layout="responsive"
            // objectFit="cover"
            className={`${classes.img}`}
          />
          <figcaption>{currentImage?.alt}</figcaption>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
