import React from "react";
import ReactPlayer from "react-player/youtube";
import QuoteBlock from "../ui/QuoteBlock";
import BibleVerses from "../verses/BibleVerses";
import classes from "./HomeIntro.module.css";

const HomeIntro = () => {
  return (
    <section className={classes.section}>
      <div>
        <p>
          Hope for the Nations was born from the desperate situation that the
          people of Venezuela are experiencing, an economic crisis so deep that
          it brought with it
        </p>
        <ul>
          <li>a lack of food</li>
          <li>hospitals without supplies</li>
          <li>an increase in abandoned children</li>
          <li>an increasing number of people eating from garbage dumps</li>
          <li>a great, unprecedented exile in this Latin American country</li>
        </ul>
        <p>
          It was necessary to bring hope to people who felt hopeless by sharing
          the hope we have in Christ. We can take a bad situation and be the
          hands and feet that the Lord uses to turn it into something good and
          special.
        </p>
      </div>
      {/* <div>
        <iframe
          src="https://www.youtube.com/embed/Pch09DVpw10"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div> */}
    </section>
  );
};

export default HomeIntro;
