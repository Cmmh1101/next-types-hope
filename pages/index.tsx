import type { NextPage } from "next";
import Head from "next/head";
import ProgramsList from "../components/programs/ProgramsList";
import StoriesList from "../components/stories/StoriesList";
import Banner from "../components/ui/Banner";
import Header from "../components/ui/Header";
import MainSections from "../components/ui/MainSections";
import FacebookFeed from "../components/facebook/FacebookFeed";
import { getAllPrograms } from "../programsData";
import { getAllStories } from "../storiesData";
import classes from "../styles/Home.module.css";
import BibleVerses from "../components/verses/BibleVerses";
import Events from "../components/events/Events";
// import Gallery from "../components/image-gallery/Gallery";

const Home: NextPage = () => {
  const programs = getAllPrograms();
  const stories = getAllStories().filter((story) => story.featured === true);

  return (
    <section>
      <Head>
        <title>Hope For The Nations</title>
        <meta name="description" content="Non-profit organization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header
          title="Hope For The Nations"
          description="Blessing our communities with the tools to improve their living situation through hope and Gospel"
          buttonText="Go to programs"
          overlay="light"
          link="/programs"
          videoSrc="../images/videos/shortVideo.mp4"
        />
        <MainSections>
        <Banner
          title="What We Do"
          description="At the present time, we have programs are open to communities in need from the children to the elder members. We believe we can make a difference in the lives of children, parents, grandparents and families, to break the circle of poverty in our community."
          background={"/images/programs/hunger9.png"}
        />
        </MainSections>
        <Events />
        <MainSections>
        <Banner
          title="Mission"
          description="Our mission is to bring hope through the gospel of Christ to Venezuelans by teaching  the word of God to all people so that everyone knows the good news of this Gospel and to meet the physical needs for families living in extreme poverty."
          background={"/images/team/leaders.jpg"}
          />
          </MainSections>
        
        <MainSections className={classes.list}>
          <ProgramsList
            programs={programs}
            listTitle="Our Programs"
            className={classes.ul}
          />
        </MainSections>
        <MainSections className={classes.background}>
          <BibleVerses />
        </MainSections>
        <MainSections className={classes.list}>
          <StoriesList
          stories={stories}
          listTitle="Stories of hope"
          className={classes.main}
          />
        </MainSections>
        
        <MainSections className={classes.gray}>
          <FacebookFeed />
        </MainSections>
      </main>
    </section>
  );
};

export default Home;
