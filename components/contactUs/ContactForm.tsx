import { useRouter } from "next/router";
import React from "react";
import classes from "./contactForm.module.css";

type Props = {};

const ContactForm = (props: Props) => {
  const router = useRouter();

  // const handleSubmit = () => {
  //   router.push("/ContactUs/success");
  // };

  return (
    <form
      className={classes.form}
      name="contact"
      method="POST"
      // action="/success"
      // onSubmit={() => handleSubmit()}
      data-netlify="true"
    >
      <input type="hidden" name="contact" value="contact" />
      <p>
        <label htmlFor="name">Your Name:</label> <br />
        <input type="text" name="name" id="name" />
      </p>
      <p>
        <label htmlFor="email">Your Email:</label> <br />
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="message">Message:</label> <br />
        <textarea name="message" id="message"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default ContactForm;
