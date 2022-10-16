import React from "react";
import StoriesList from "../../components/stories/StoriesList";
import Header from "../../components/ui/Header";
import { getAllStories } from "../../storiesData";
import heroImg from "../../public/images/programs/light-of-hope-hair-style.jpg"
import classes from "../../components/ui/list.module.css"

const BlogPage = () => {

const story = getAllStories()

  return (
    <section className={classes.section}>
      <Header
        title="Stories Of Hope"
        description="We have a variety of programs that benefit different communities, from the little ones to the elderly." image={heroImg} altText="Beneficiarie of light of hope program, receiving tools to open their heir style business"
      />
      <main>
        <StoriesList stories={story} listTitle='Beneficiaries' />
      </main>
    </section>
  );
};

export default BlogPage;
