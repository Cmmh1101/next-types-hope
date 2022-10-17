import Image from "next/image";
import React from "react";
import { IStoriesData } from '../../interfaces/StoriesData';
import classes from "./story-item.module.css";

interface IStory {
  story: IStoriesData;
}

const StoryItem = ({ story }: IStory) => {
  return (
    <section className={classes.story}>
      <div className={classes.img}>
        <Image
          src={story.image}
          alt={story.title}
          width={300}
          height={300}
          layout="responsive"
        />
      </div>

      <div className={classes.description}>
        <h3>{story.title}</h3>
        <p>{story.content.toString().substring(0, 100)}...</p>
        <span>Read story...</span>
      </div>
    </section>
  );
};

export default StoryItem;
