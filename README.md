This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<!-- ## gallery setup

import React, { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import useSWR from "swr";
import Image from "next/image";
import { images } from "../../Gallery";

// const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Gallery = () => {
  const [imagesArr, setImagesArr] = useState<[]>([]);
  // const { data, error } = useSWR(
  //   "https://hope-a0b0b-default-rtdb.firebaseio.com/images.json",
  //   fetcher
  // );

  // console.log(data);

  // useEffect(() => {
  //   if (data) {
  //     const galleryItems = [];
  //   }
  // }, []);
  // const imagesData = images.map((image) => image.photo);

  let arrImg: any = null;

  useEffect(() => {
    images.map((img) => arrImg.push(img.photo));

    // arrImg.push()
    // setImagesArr();
  }, []);
  console.log(arrImg);

  return (
    <div>
      {images.map((item: any, i: number) => {
        return (
          <div key={i}>
            {item !== null && (
              <>
                {" "}
                <h4>{item?.title}</h4>
                <p>{item?.alt}</p>
                <Image
                  src={item?.url}
                  alt={item?.alt}
                  width={300}
                  height={300}
                />
                {/* <img src={item?.image} alt={item.alt} /> */}
              </>
            )}
          </div>
        );
      })}
      <ImageGallery items={arrImg} />
    </div>
  );
};

export default Gallery;

// https://photos.app.goo.gl/JeaPoYTow9WdfEJQ9 -->
