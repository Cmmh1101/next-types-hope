import React from "react";
import Button from "../ui/Button";
import classes from './contactForm.module.css'

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <form className={classes.form} name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name: <input type="text" name="name" placeholder="Name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" placeholder="Email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" placeholder="Write our message" />
        </label>
      </p>
      <p>
        <button className={classes.btn} type="submit">Send</button>
      </p>
    </form>
  );
};

export default ContactForm;
