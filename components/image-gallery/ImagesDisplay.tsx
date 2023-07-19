import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  url: string | StaticImageData;
  alt: string;
  customClass?: string;
  imgClass?: string;
}

const ImagesDisplay = ({ url, alt, customClass, imgClass }: Props) => {
  return (
    <span className={customClass}>
      <Image
        src={url}
        alt={alt}
        width="400"
        height="400"
        // commented for now. needs v13 changes update
        // layout="fill"
        // objectFit="cover"
        className={imgClass}
      />
    </span>
  );
};

export default ImagesDisplay;
