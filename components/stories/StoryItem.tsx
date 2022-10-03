import Image from "next/image";
import React from "react";
import { IStoriesData } from "../../interfaces/storiesData";

interface IStory {
  story: IStoriesData;
}

const StoryItem = ({ story }: IStory) => {
  return (
    <div>
      <Image src={story.image} alt={story.alt} width={200} height={200} />
      <div>
        <h4>{story.name}</h4>
        <p>{story.content.toString().substring(0, 100)}...</p>
      </div>
    </div>
  );
};

export default StoryItem;
