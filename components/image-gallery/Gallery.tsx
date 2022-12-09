import React, { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "../../Gallery";
import classes from "./Gallery.module.css";
import image1 from "public/images/programs/entrepreneurship.jpg";
import ImagesSection from "../ui/ImagesSection";
import ImagesDisplay from "./ImagesDisplay";
import DonateBtn from "../ui/DonateBtn";

interface ImageProps {
  url: string;
  alt: string;
}

const Gallery = () => {
  const [next, setNext] = useState(false);
  const [distance, setDistance] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);
  const [display, setDisplay] = useState<number>(0);

  // const onNextClick = () => {
  //   setNext(true);
  //   setCounter(+1);
  //   console.log("next clicked");
  //   setDistance(200);
  //   const move = distance * 2;
  //   setDistance(move);
  // };

  const handleNext = () => {
    setCounter((prevCount) => prevCount + 1);
    // setDisplay((prev) => prev + 1);
    // setDistance((dist) => dist * counter);
  };

  const handlePrev = () => {
    setCounter((prevCount) => prevCount - 1);
    // setDisplay((prev) => prev - 1);
    // setDistance((dist) => dist * counter);
  };

  // useEffect(() => {
  //   setDistance(distance + counter);
  // }, [counter]);

  const entries = Object.entries(images);
  console.log(Object.entries(entries), "entries");
  const single = Object.values(entries[display][1]);

  const imagesArr: string[] = [];

  const mapping = entries.map((ent) => imagesArr.push(ent[1].url));
  // } console.log(ent[1].url, "ent"));

  // console.log(single[0], "single");

  console.log(
    entries.map((currElement, index) => {
      console.log("The current iteration is: " + index);
      console.log("The current element is: " + currElement);
      console.log("\n");
      return currElement; //equivalent to list[index]
    })
  );

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

  // getImage();

  useEffect(() => {
    // setDisplay(counter);
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
            >
              PREV
            </button>
            <p>{counter}</p>
            <button
              className={classes.btnNext}
              disabled={counter === images.length - 1}
              onClick={() => {
                handleNext();
              }}
            >
              NEXT
            </button>
          </span>
          <p>{currentImage?.alt}</p>
          <Image
            src={currentImage?.url!}
            alt={currentImage?.alt}
            width={600}
            height="600"
            // layout="fill"
            layout="intrinsic"
            objectFit="cover"
            className={`${classes.img}`}
          />
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

// https://photos.app.goo.gl/JeaPoYTow9WdfEJQ9
