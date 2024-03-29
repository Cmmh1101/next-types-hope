import React from "react";
import Image from "next/image";
import christmas2024 from "../../public/images/general/christmas2023.png";
import classes from "./events.module.css";
import Heading from "../ui/Heading";
import DonateBtn from "../ui/DonateBtn";
import Link from "next/link";

type Props = {};

const Events = (props: Props) => {
  return (
    <section className={classes.section}>
      {/* <div className={classes.div}>
        <p>
          You are invited to join us for a{" "}
          <em>Latin Christmas Dinner &quot; A NIGHT OF HOPE&quot;</em> to raise
          fund to build &quot;Casa Esperanza&quot;: a house of hope in Venezuela
          which will provide the space needed to continue our programs with
          children, youth, and the elderly.
        </p>
        <h3>Where?</h3>
        <address>
          <em>
            3049 Davies Plantation Rd
            <br /> Lakeland, TN 38002
          </em>
        </address>
        <h3>When?</h3>
        <time dateTime="2022-12-16">
          <em>December 16 2022</em>
        </time>
        <br />
        <time dateTime="18:00">
          <em>6 pm to 9 pm</em>
        </time>
        <h3>How?</h3>
        <p style={{ marginBottom: 0 }}>
          <a
            href="https://www.eventbrite.com/e/444950668427"
            role="link"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Buy your tickets here
          </a>
        </p>
      </div> */}
        <Image src={christmas2024} className={classes.img}  alt="Christmas banner" priority />
      
      <DonateBtn className={classes.button } />
      {/* <div className={classes.donate}>
        <p>
          If you would like to become one of our sponsors for this event, please{" "}
          <Link href="/ContactUs" className={classes.link}>
            Contact us
          </Link>
          and we will give you more details. If you can not attend, but you
          would like to support our cause and projects, you can use the button
          below to donate
        </p>
        <DonateBtn />
      </div> */}
    </section>
  );
};

export default Events;
