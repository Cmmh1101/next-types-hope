import React from "react";
import QuoteBlock from "../ui/QuoteBlock";
import classes from "./purpose.module.css";
import Heading from "../ui/Heading";
import volunteers from "../../public/images/team/voluntarios.jpg";
import maracay from '../../public/images/team/leadership-maracay.jpg'
import ImagesSection from "../ui/ImagesSection";

const Purpose = () => {
  return (
    <section className={classes.section}>
      <div className={classes.divImg}>
          <Heading title="Who we are" />
          <p>
            Hope for the Nations is a non-profit, Christian organization. We
            count on a ministry of ambassadors that serves children, older
            people, and families in Venezuela&apos;s most impoverished area. As we
            help them, we bring the gospel nurturing not only with physical
            needs but we spiritual needs as well.
          </p>
          <p>
            We began our work formerly in 2018. In 2020 we started with a series
            of sustainable programs to bring solutions while bringing God&apos;s
            Hope.
        </p>
        <Heading
        subtitle="Our Beginning"
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
          {" "}It was necessary to bring hope to people who felt hopeless by sharing
          the hope we have in Christ. We can take a bad situation and be the
          hands and feet that the Lord uses to turn it into something good and
          special. My hope is for our brothers in Venezuela to know and embrace
          “The Hope” and to know that God has NOT forgotten this nation.
        </p>
        
        <ImagesSection imageLeft={volunteers} altLeft={""} imageRight={maracay} altRight={""} />
        <QuoteBlock>
          <q>
            We plant the seed in them, and we hope this seed flourish and give
            back their fruits. All these projects aim to help people be
            sustainable because we do not want to treat the problem; we are
            looking for long-term solutions.
          </q>
        </QuoteBlock>
          <Heading subtitle="Our Mission"/>
          <p>
          At Hope for the Nations, we are dedicated to fostering sustainable change in the lives of low-income families and children across Venezuela. Our mission is to empower, educate, and uplift communities through the Word of God. 
          </p>
          <p>
          We believe in the power of economic empowerment to transform communities. By supporting sustainable programs, we empower families to create sustainable livelihoods, fostering economic independence and resilience.
          </p>
          <Heading subtitle="Our Vision" />
          <p>
          Hope for the Nations desires to preach the Gospel and make the Word of God known in every corner of Venezuela, that there be more witnesses to his love, fidelity, and mercy every day.
          </p>
          </div>
        </div>
      
      <div></div>
    </section>
  );
};

export default Purpose;
