import Link from "next/link";
import Image from "next/image";
import React from "react";
import classes from "./footer.module.css";
import logo from "/public/logo.png";
import SocialIcons from "../ui/SocialIcons";
import DonateBtn from "../ui/DonateBtn";
import FooterNavLinks from "./FooterNavLinks";
import {FaMailBulk} from 'react-icons/fa'
import Heading from "../ui/Heading";

const Footer = () => {
  return (
    <footer className={`container ${classes.footer}`}>
      <FooterNavLinks className={classes.navigation} />
      <div className={classes.section}>
        <div className={classes.logo}>
          <Link href="/" role="link" aria-label="home page link">
              <Image
                src={logo}
                alt="logo"
                height={100}
                width={100}
                priority
              />
          </Link>
        </div>
        <div className={classes.contact}>
          <h5>Contact:</h5>
          <a href="mailto:admin@hopeforthenations7.org, subject=Mail from our Website">
          <FaMailBulk aria-label="Email link" />{" "}admin@hopeforthenations7.org
          </a>
        </div>
        <DonateBtn />
        <SocialIcons className={classes.socials} />
      </div>
    </footer>
  );
};

export default Footer;
