import React, { useState } from "react";
import Link from "next/link";
import classes from "./navbar.module.css";
import Image from "next/image";
import logo from "/public/logo.png";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import DonateBtn from "../ui/DonateBtn";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>();
  const [open, setOpen] = useState<boolean>(false);

  const setNavOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={200}
              priority
            />
        </Link>
      </div>
      <div className={classes.navigation}>
        <DonateBtn className={classes.donate} aria-label="donate link" />
        <button
          aria-expanded={open ? true : false}
          aria-haspopup="true"
          aria-controls="menu"
          className={classes.toggle}
          onClick={setNavOpen}
        >
          {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
        <NavLinks
          donateLink={classes.donateLink}
          open={open}
          className={
            open
              ? `${classes.mobileNav}`
              : `${classes.mobileNav} ${classes.hide}`
          }
          toggle={setNavOpen}
        />
      </div>
    </nav>
  );
};

export default Navbar;
