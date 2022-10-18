import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import DonateBtn from "../ui/DonateBtn";
import classes from './navlinks.module.css'

interface Props {
  className?: string;
  donateLink?: string
  toggle?: () => void
}

const NavLinks = ({ className, donateLink, toggle }: Props) => {
  const router = useRouter()

  return (
    <nav className={`${className} ${classes.navLinks}`}>
      <Link href="/" role="link" aria-label="home page link">
          <a className={`${router.pathname == '/' && classes.active}`} onClick={toggle}>
            Home
          </a>
        </Link>
        <Link href="/aboutUs" role="link" aria-label="about us page link">
          <a className={`${router.pathname == '/aboutUs' && classes.active}`} onClick={toggle}>
            About us
          </a>
        </Link>
        <Link href="/programs" role="link" aria-label="programs page link">
          <a className={`${router.pathname.includes('/programs') && classes.active}`} onClick={toggle}>
            Programs
          </a>
        </Link>
        <Link href="/newsAndStories" role="link" aria-label="stories page link">
          <a className={`${router.pathname.includes('/newsAndStories') && classes.active}`} onClick={toggle}>
            News & Stories
          </a>
        </Link>
        <Link href="/ContactUs" role="link" aria-label="contact us page link">
          <a className={`${router.pathname == '/ContactUs' && classes.active}`} onClick={toggle}>
            Contact Us
          </a>
        </Link>
      <div className={`${donateLink} ${classes.bonate}`}>
        <DonateBtn />
      </div>
       
    </nav>
  );
};

export default NavLinks;
