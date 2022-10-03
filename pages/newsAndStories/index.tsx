import React from "react";
import StoriesList from "../../components/stories/StoriesList";
import Header from "../../components/ui/Header";
import { getAllStories } from "../../storiesData";
import heroImg from "../../public/images/programs/light-of-hope-hair-style.jpg"

const BlogPage = () => {

const story = getAllStories()

  return (
    <>
      <Header
        title="Meet Some Of Our Beneficiaries"
        description="We have a variety of programs that benefit different communities, from the little ones to the elderly. We help the needed with tools, assistance, love, adn God's word" image={heroImg} altText="Beneficiarie of light of hope program, receiving tools to open their heir style business"
      />
      <main>
        <StoriesList stories={story} listTitle='Beneficiaries' />
      </main>
    </>
  );
};

export default BlogPage;
