import { useRouter } from "next/router";
import React, { SyntheticEvent } from "react";
import classes from "./contactForm.module.css";

type Props = {};

const ContactForm = (props: Props) => {
  const router = useRouter();

  // const handleSubmit = (e: SyntheticEvent) => {
  //   e.preventDefault()
  //   router.push("/success");
  // };

  return (
    <form
      className={classes.form}
      name="contact"
      method="POST"
      action="/success"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className={classes.hidden}>
        <label>
          Don&apos;t fill this out if you&apos;re human:{" "}
          <input name="bot-field" />
        </label>
      </p>

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
