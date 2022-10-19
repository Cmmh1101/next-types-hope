import React from "react";
import Image from "next/image";
import { IStoriesData } from "../../interfaces/StoriesData";
import ArticleSections from "../ui/ArticleSection";
import Heading from "../ui/Heading";
import QuoteBlock from "../ui/QuoteBlock";
import classes from "./story-post.module.css";
import ImagesSection from "../ui/ImagesSection";

interface Props {
  story: IStoriesData;
}

const StoryPost = ({ story }: Props) => {
  return (
    <ArticleSections>
      <section className={classes.section}>
        <div className={classes.article}>
          <div className={classes.text}>
            <div className={classes.float}>
              <Image
                src={story.storyImage3.image}
                alt={story.alt}
                height={300}
                width={300}
                layout="responsive"
                objectFit="cover"
                priority
              />
            </div>
            {story.content.map((paragraph, i) => {
              return <p key={i}>{paragraph}</p>;
            })}
          </div>
        </div>
        <ImagesSection imageLeft={story.storyImage1.image} altLeft={story.alt} imageRight={story.storyImage2.image} altRight={story.alt} />
      </section>
      <QuoteBlock>
        <p>{story.highligh}</p>
      </QuoteBlock>
    </ArticleSections>
  );
};

export default StoryPost;
