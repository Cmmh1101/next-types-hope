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
      <Link href="/" aria-role="link" aria-name="home page link">
        <a className={`${router.pathname == "/" && classes.active}`}>Home</a>
      </Link>
      <Link href="/aboutUs" aria-role="link" aria-name="about us page link">
        <a className={`${router.pathname == "/aboutUs" && classes.active}`}>
          About us
        </a>
      </Link>
      <Link href="/programs" aria-role="link" aria-name="programs page link">
        <a
          className={`${
            router.pathname.includes("/programs") && classes.active
          }`}
        >
          Programs
        </a>
      </Link>
      <Link href="/newsAndStories" aria-role="link" aria-name="stories page link">
        <a
          className={`${
            router.pathname.includes("/newsAndStories") && classes.active
          }`}
        >
          News & Stories
        </a>
      </Link>
      <Link href="/ContactUs" aria-role="link" aria-name="contact us page link">
        <a className={`${router.pathname == "/ContactUs" && classes.active}`}>
          Contact Us
        </a>
      </Link>
    </nav>
  );
};

export default FooterNavLinks;
