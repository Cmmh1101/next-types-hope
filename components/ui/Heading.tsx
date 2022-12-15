import React from "react";
import classes from "./heading.module.css";

interface Props {
  title?: string;
  subtitle?: string;
  decoText?: string;
}

const Heading = ({ title, subtitle, decoText }: Props) => {
  return (
    <div className={classes.heading}>
      <h2 className="wavy">{title}</h2>
      {subtitle && <h3 className="wavy">{subtitle}</h3>}
      {decoText && <span>{decoText}</span>}
    </div>
  );
};

export default Heading;
