import React, { useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import useSWR from "swr";
import Image from "next/image";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Gallery = () => {
  const { data, error } = useSWR(
    "https://hope-a0b0b-default-rtdb.firebaseio.com/images.json",
    fetcher
  );

  console.log(data);

  useEffect(() => {
    if (data) {
      const galleryItems = [];
    }
  }, []);

  return (
    <div>
      {data &&
        data.map((item: any) => {
          return (
            <div>
              <h4>{item?.title}</h4>
              <p>{item?.alt}</p>
              <Image src={item?.url} alt={item?.alt} width={100} height={100} />
            </div>
          );
        })}
    </div>
  );
};

export default Gallery;

// https://photos.app.goo.gl/JeaPoYTow9WdfEJQ9
