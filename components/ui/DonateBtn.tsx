import React from "react";
import classes from './donateBtn.module.css'

interface Props {
  className?: string;
}

const DonateBtn = ({ className }: Props) => {
  return (
    <div className={`${classes.btn} ${className}` }>
        <a href="https://www.paypal.com/donate?hosted_button_id=JWBZEQHW76WC4"
        target="_blank" rel="noreferrer">
          Donate
        </a>
    </div>
  );
};

export default DonateBtn;
