import React from "react";
import Header from "../../components/ui/Header";
import { useRouter } from "next/router";
import { getAllStories, getStoryByName } from "../../storiesData";
import StoryPost from "../../components/story-detail/StoryPost";
import heroImg from "../../public/images/programs/light-of-hope-hair-style.jpg";
import StoriesList from "../../components/stories/StoriesList";

type Props = {};

const SingleStoryPage = (props: Props) => {
  const router = useRouter();

  const storyName = router.query.storyName;

  const story = getStoryByName(storyName);

  const stories = getAllStories().filter(story => story.name !== storyName)

  if (!story) {
    return <p>No story found</p>;
  }

  return (
    <>
      <Header
        title="News & Stories"
        description={story.title}
        image={heroImg}
        altText={""}
      />
      <StoryPost story={story} />
      <StoriesList stories={stories} listTitle='More Stories' />
    </>
  );
};

export default SingleStoryPage;
