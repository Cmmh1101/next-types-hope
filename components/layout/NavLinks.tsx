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
        <Link href="/" aria-role="link" aria-name="home page link">
          <a className={`${router.pathname == '/' && classes.active}`} onClick={toggle}>
            Home
          </a>
        </Link>
        <Link href="/aboutUs" aria-role="link" aria-name="about us page link">
          <a className={`${router.pathname == '/aboutUs' && classes.active}`} onClick={toggle}>
            About us
          </a>
        </Link>
        <Link href="/programs" aria-role="link" aria-name="programs page link">
          <a className={`${router.pathname.includes('/programs') && classes.active}`} onClick={toggle}>
            Programs
          </a>
        </Link>
        <Link href="/newsAndStories" aria-role="link" aria-name="stories page link">
          <a className={`${router.pathname.includes('/newsAndStories') && classes.active}`} onClick={toggle}>
            News & Stories
          </a>
        </Link>
        <Link href="/ContactUs" aria-role="link" aria-name="contact us page link">
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
