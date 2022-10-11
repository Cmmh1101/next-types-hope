import { title } from "process";
import React from "react";
import Heading from "../ui/Heading";
import SocialIcons from "../ui/SocialIcons";
import classes from "./facebookFeed.module.css";

const FacebookFeed = () => {
  return (
    <section className={classes.section}>
      <Heading title="Follow us" />
      <div className={classes.div}>
        <div className={classes.half}>
          <Heading subtitle="Join us on your favorite social channel" />
          <SocialIcons />
        </div>
        <div className={classes.half}>
          <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhopeforthenations7&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=219567793543299"
          width="340"
          title="Hope For The Nations"
          height="500"
          style={{
            border: "none",
            overflow: "hidden",
            boxShadow: "0px 0px 28px -1px rgba(0, 0, 0, 0.33)",
          }}
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
        </div>
      </div>
    </section>
  );
};

export default FacebookFeed;
