import React, { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import useSWR from "swr";
import Image from "next/image";
import { images } from "../../Gallery";

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
    <div>
      <ImageGallery items={images} autoPlay lazyLoad />
    </div>
  );
};

export default Gallery;

// https://photos.app.goo.gl/JeaPoYTow9WdfEJQ9
