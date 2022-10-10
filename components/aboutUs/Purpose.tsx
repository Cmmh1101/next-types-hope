import React from "react";
import Image from "next/image";
import QuoteBlock from "../ui/QuoteBlock";
import classes from "./purpose.module.css";
import Heading from "../ui/Heading";
import logo from "../../public/logo.png";
import volunteeers from "../../public/images/team/voluntarios.jpg";

const Purpose = () => {
  return (
    <section className={classes.section}>
      <Heading
        title="Our Beginning"
      />
      <div className={classes.div}>
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
          <em>
            I felt the need to help those in such an overwhelmingly difficult
            situation.
          </em>
          It was necessary to bring hope to people who felt hopeless by sharing
          the hope we have in Christ. We can take a bad situation and be the
          hands and feet that the Lord uses to turn it into something good and
          special. My hope is for our brothers in Venezuela to know and embrace
          “The Hope” and to know that God has NOT forgotten this nation.
        </p>
        <div className={classes.divImg}>
          <Heading subtitle="Who we are" />
          <div className={classes.imgFloat}>
            <Image
              src={logo}
              width={350}
              height={350}
              alt="Founder Luzbell Woods"
              layout="intrinsic"
            />
          </div>
          <p>
            Hope for the Nations is a non-profit, Christian organization. We
            count on a ministry of ambassadors that serves children, older
            people, and families in Venezuela`&aposs most impoverished area. As we
            help them, we bring the gospel nurturing not only with physical
            needs but we spiritual needs as well.
          </p>
          <p>
            We began our work formerly in 2018. In 2020 we started with a series
            of sustainable programs to bring solutions while bringing God`&aposs
            Hope.
          </p>
        </div>
        <div className={classes.divImg}>
          <Heading subtitle="Our Mission" />
          <div className={classes.imgFloatLeft}>
            <Image
              src={volunteeers}
              width={350}
              height={350}
              alt="Founder Luzbell Woods"
              layout="intrinsic"
            />
          </div>
          <p>
            Our mission is to bring hope through the gospel of Christ to
            Venezuelans by teaching the word of God to all people so that
            everyone knows the good news of this Gospel to meet the physical
            needs for families living in extreme poverty, to transform lives and
            communities through the Word of God.
          </p>
          <p>
            We created different sustainable programs to allow them to
            participate and grow as they become independent.
          </p>
          <p>
            Our purpose is to transform lives and communities through the Word
            of God. We created different sustainable programs to allow them to
            participate and grow as they become independent and productive
            community members.
          </p>
        </div>
        <QuoteBlock>
          <q>
            We plant the seed in them, and we hope this seed flourish and give
            back their fruits. All these projects aim to help people be
            sustainable because we do not want to treat the problem; we are
            looking for long-term solutions.
          </q>
        </QuoteBlock>
      </div>
      <div></div>
    </section>
  );
};

export default Purpose;
