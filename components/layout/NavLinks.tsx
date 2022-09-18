import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import classes from './navlinks.module.css'

interface Props {
  className?: string;
  donateLink?: string
}

const NavLinks = ({ className, donateLink }: Props) => {
  const router = useRouter()

  return (
    <div className={className}>
      <div>
        <Link href="/">
          <a className={`${router.pathname == '/' && classes.active}`}>
            Home<span></span>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/aboutUs">
          <a className={`${router.pathname == '/aboutUs' && classes.active}`}>
            About us<span></span>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/programs">
          <a className={`${router.pathname.includes('/programs') && classes.active}`}>
            Programs
            <span></span>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/beneficiaries">
          <a className={`${router.pathname.includes('/beneficiaries') && classes.active}`}>
            Beneficiaries<span></span>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/ContactUs">
          <a className={`${router.pathname == '/ContactUs' && classes.active}`}>
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
    </div>
  );
};

export default NavLinks;
