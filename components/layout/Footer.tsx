import Link from "next/link";
import Image from "next/image";
import React from "react";
import classes from "./footer.module.css";
import logo from "/public/logo.png";
import NavLinks from "./NavLinks";
import SocialIcons from "../ui/SocialIcons";
import DonateBtn from "../ui/DonateBtn";
import FooterNavLinks from "./FooterNavLinks";

const Footer = () => {
  return (
    <footer className={`container ${classes.footer}`}>
      {/* <NavLinks
        className={classes.navigation}
        donateLink={classes.donateLink}
      /> */}
      <FooterNavLinks className={classes.navigation} />
      <div className={classes.section}>
        <div className={classes.logo}>
          <Link href="/">
            <a>
              <Image
                src={logo}
                alt="logo"
                height={200}
                width={200}
                layout="responsive"
                priority
              />
            </a>
          </Link>
        </div>
        <DonateBtn />
        <SocialIcons className={classes.socials} />
      </div>
    </footer>
  );
};

export default Footer;
