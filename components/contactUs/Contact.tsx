import React from "react";
import classes from "./contact.module.css";
import GoogleMaps from "./GoogleMaps";

const Contact = () => {
  return (
    <section className={classes.section}>
      <div className={classes.info}>
        <h3>Hours</h3>
        <p>9 am to 5 pm Monday - Friday</p>
        <h3>Locations</h3>
        <p>Memphis, TN - Caracas, Venezuela.</p>
        <h3>Contact us</h3>
        <p>
          Phone: <a href="tel:+1555-555-1212">+1(901)555-5555</a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:support@example.com, subject=Mail from our Website">
            Send Email
          </a>
        </p>
      </div>
      <GoogleMaps className={classes.map} />
    </section>
  );
};

export default Contact;
