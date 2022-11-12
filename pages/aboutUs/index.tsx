import { GetStaticProps, NextPage } from "next";
import React from "react";
import Leadership from "../../components/aboutUs/Leadership";
import Purpose from "../../components/aboutUs/Purpose";
import ArticleSections from "../../components/ui/ArticleSection";
import Header from "../../components/ui/Header";
import { getAllMembers, teamMembers } from "../../leadership";
import heroImg from "../../public/images/team/voluntarios.jpg";

interface Members {
  teamMembers: TeamMemberProps[];
}

interface TeamMemberProps {
  fullName: string;
  ocupation: string;
  photo: string;
}

const AboutUs: NextPage<Members> = ({ teamMembers }) => {
  console.log(teamMembers, "member here");

  return (
    <>
      <Header
        subtitleDeco="About Us"
        titleDeco="Who we are"
        image={heroImg}
        altText="Hope for the nations Venezuela Volunteers group"
        overlay="dark"
      />
      {/* <div>
        {teamMembers.map((item, i) => {
          return (
            <div key={i}>
              <p>{item.fullName}</p>
            </div>
          );
        })}
        team
      </div> */}
      <ArticleSections>
        <Purpose />
        <Leadership teamMembers={teamMembers} />
      </ArticleSections>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const member = await getAllMembers();
  return {
    props: {
      teamMembers: member,
    },
  };
};

export default AboutUs;
