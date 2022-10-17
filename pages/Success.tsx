import Link from "next/link";
import React from "react";
import Button from "../components/ui/Button";
import MainSections from "../components/ui/MainSections";
import Image from "next/image";
import success from "../public/images/general/success.svg";
import Heading from "../components/ui/Heading";
import classes from '../styles/success.module.css'

const Success = () => {
  return (
      <MainSections className={classes.section}>
        <Heading title="Form successfully submitted!" />
        {/* <Link href="/">
          <a>Go To Home Page</a>
        </Link> */}
        <Button link="/" text="Go To Home Page" />
        <div>
        <Image
          src={success}
          alt="success mail sent"
          width={300}
          height={300}
          layout="responsive"
        />
        </div>
      </MainSections>
  );
};

export default Success;
