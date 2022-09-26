import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
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
      <div>
        <Link href="/">
          <a className={`${router.pathname == '/' && classes.active}`} onClick={toggle}>
            Home<span></span>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/aboutUs">
          <a className={`${router.pathname == '/aboutUs' && classes.active}`} onClick={toggle}>
            About us<span></span>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/programs">
          <a className={`${router.pathname.includes('/programs') && classes.active}`} onClick={toggle}>
            Programs
            <span></span>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/newsAndStories">
          <a className={`${router.pathname.includes('/newsAndStories') && classes.active}`} onClick={toggle}>
            Beneficiaries<span></span>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/ContactUs">
          <a className={`${router.pathname == '/ContactUs' && classes.active}`} onClick={toggle}>
            Contact Us<span></span>
          </a>
        </Link>
      </div>

      <div className={donateLink}>
        <Link
          href="https://www.paypal.com/donate?hosted_button_id=JWBZEQHW76WC4"
          target="_blank"
        >
          <a>
            Donate<span></span>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default NavLinks;
