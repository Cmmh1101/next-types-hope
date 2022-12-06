import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
// import useSWR from "swr";
// import Image from "next/image";
import { images } from "../../Gallery";
import classes from "./Gallery.module.css";

// const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Gallery = () => {
  const [imagesArr, setImagesArr] = useState([]);

  // let arrImg: any = [];
  // const imgs = images.map((img) => img.photo);

  // useEffect(() => {
  //   // const imgs = images.map((img) => img.photo);
  //   arrImg.push(imgs);
  //   console.log(arrImg);
  // }, []);

  // console.log(Object.values(arrImg), "val");

  return (
    <div className={classes.img}>
      <ImageGallery
        items={images}
        autoPlay
        lazyLoad
        additionalClass={classes.imageGallery}
      />
    </div>
  );
};

export default Gallery;

// https://photos.app.goo.gl/JeaPoYTow9WdfEJQ9
