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
          title="Our Mission"
          description="At Hope for the Nations, we are dedicated to fostering sustainable change in the lives of low-income families and children across Venezuela. Our mission is to empower, educate, and uplift communities through the Word of God. We believe in the power of economic empowerment to transform communities. By supporting sustainable programs, we empower families to create sustainable livelihoods, fostering economic independence and resilience"
          background={"/images/general/home-mission-hope.jpg"}
        />
        {/* </MainSections>
        <Events />
        <MainSections> */}
        <Banner
          title="What We Do"
          imgLeft
          description="At the present time, we have programs are open to communities in need from the children to the elder members. We believe we can make a difference in the lives of children, parents, grandparents and families, to break the circle of poverty in our community"
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
