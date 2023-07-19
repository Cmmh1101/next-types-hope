import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import DonateBtn from "../ui/DonateBtn";
import classes from "./navlinks.module.css";

interface Props {
  className?: string;
}

const FooterNavLinks = ({ className }: Props) => {
  const router = useRouter();
  return (
    <nav className={className}>
      <Link href="/" role="link" className={`${router.pathname == "/" && classes.active}`} aria-label="home page link">
        Home
      </Link>
      <Link href="/aboutUs" className={`${router.pathname == "/aboutUs" && classes.active}`} role="link" aria-label="about us page link">
          About us
      </Link>
      <Link href="/programs" className={`${
            router.pathname.includes("/programs") && classes.active
          }`} role="link" aria-label="programs page link">
          Programs
      </Link>
      <Link href="/newsAndStories" className={`${
            router.pathname.includes("/newsAndStories") && classes.active
          }`} role="link" aria-label="stories page link">
          News & Stories
      </Link>
      <Link href="/ContactUs" className={`${router.pathname == "/ContactUs" && classes.active}`} role="link" aria-label="contact us page link">
          Contact Us
      </Link>
    </nav>
  );
};

export default FooterNavLinks;
