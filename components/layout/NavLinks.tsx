import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import DonateBtn from "../ui/DonateBtn";
import classes from './navlinks.module.css'

interface Props {
  className?: string;
  donateLink?: string
  toggle?: () => void
  open?: boolean 
}

const NavLinks = ({ className, donateLink, toggle, open }: Props) => {
  const router = useRouter()

  return (
    <nav id="menu" className={`${className} ${classes.navLinks}`} aria-hidden={open ? false : true}>
      <Link href="/" className={`${router.pathname == '/' && classes.active}`} onClick={toggle} role="link" aria-label="home page link">
            Home
        </Link>
        <Link href="/aboutUs" className={`${router.pathname == '/aboutUs' && classes.active}`} onClick={toggle} role="link" aria-label="about us page link">
            About us
        </Link>
        <Link href="/programs" className={`${router.pathname.includes('/programs') && classes.active}`} onClick={toggle} role="link" aria-label="programs page link">
            Programs
        </Link>
        <Link href="/newsAndStories" className={`${router.pathname.includes('/newsAndStories') && classes.active}`} onClick={toggle} role="link" aria-label="stories page link">
            News & Stories
        </Link>
        <Link href="/ContactUs" className={`${router.pathname == '/ContactUs' && classes.active}`} onClick={toggle} role="link" aria-label="contact us page link">
            Contact Us
        </Link>
      <div className={`${donateLink} ${classes.bonate}`}>
        <DonateBtn />
      </div>
       
    </nav>
  );
};

export default NavLinks;
