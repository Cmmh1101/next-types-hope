import React from "react";
import Image from "next/image";
import { IProgramsData } from "../../interfaces/ProgramsData";
import ArticleSections from "../ui/ArticleSection";
import Heading from "../ui/Heading";
import QuoteBlock from "../ui/QuoteBlock";
import classes from "./singleProgram.module.css";
import ImagesSection from "../ui/ImagesSection";

interface IPrograms {
  program: IProgramsData;
}

const SingleProgram = ({ program }: IPrograms) => {
  return (
    <ArticleSections>
      <section className={classes.section}>
        <Heading title={program.title} />
        <div className={classes.article}>
          <div className={classes.text}>
            <div className={classes.float}>
              <Image
                src={program.programImage1.image}
                alt={program.alt}
                height={300}
                width={300}
                layout="responsive"
              />
            </div>
            {program.content?.map((paragraph, i) => {
              return <p key={i}>{paragraph}</p>;
            })}
          </div>
        </div>
        <ImagesSection
          imageLeft={program.programImage2.image}
          altLeft={program.alt}
          imageRight={program.programImage3.image}
          altRight={program.alt}
        />
      </section>
      <QuoteBlock>
        <p>{program.highligh}</p>
      </QuoteBlock>
    </ArticleSections>
  );
};

export default SingleProgram;
