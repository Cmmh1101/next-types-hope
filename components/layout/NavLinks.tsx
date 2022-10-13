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
    <nav className={className}>
        <Link href="/">
          <a className={`${router.pathname == '/' && classes.active}`} onClick={toggle}>
            Home
          </a>
        </Link>
        <Link href="/aboutUs">
          <a className={`${router.pathname == '/aboutUs' && classes.active}`} onClick={toggle}>
            About us
          </a>
        </Link>
        <Link href="/programs">
          <a className={`${router.pathname.includes('/programs') && classes.active}`} onClick={toggle}>
            Programs
          </a>
        </Link>
        <Link href="/newsAndStories">
          <a className={`${router.pathname.includes('/newsAndStories') && classes.active}`} onClick={toggle}>
            News & Stories
          </a>
        </Link>
        {/* <Link href="/events">
          <a className={`${router.pathname.includes('/events') && classes.active}`} onClick={toggle}>
            Events
          </a>
        </Link> */}
        <Link href="/ContactUs">
          <a className={`${router.pathname == '/ContactUs' && classes.active}`} onClick={toggle}>
            Contact Us
          </a>
        </Link>
      <div className={donateLink}>
        <DonateBtn />
      </div>
    </nav>
  );
};

export default NavLinks;
