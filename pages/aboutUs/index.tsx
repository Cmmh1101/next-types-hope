import { GetStaticProps, NextPage } from "next";
import React from "react";
import Leadership from "../../components/aboutUs/Leadership";
import Purpose from "../../components/aboutUs/Purpose";
import ArticleSections from "../../components/ui/ArticleSection";
import Header from "../../components/ui/Header";
import { getAllMembers, getAllVolunteers, volunteers } from "../../leadership";
import heroImg from "../../public/images/team/voluntarios.jpg";

interface Members {
  teamMembers: TeamMemberProps[];
  volunteers: VolunteerProps[];
}

interface TeamMemberProps {
  fullName: string;
  ocupation: string;
  photo: string;
}

interface VolunteerProps {
  fullName: string;
  ocupation: string;
  project: string;
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
      <ArticleSections>
        <Purpose />
        <Leadership teamMembers={teamMembers} volunteers={volunteers} />
      </ArticleSections>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const members = await getAllMembers();
  const volunteers = await getAllVolunteers();
  return {
    props: {
      teamMembers: members,
      volunteers: volunteers,
    },
  };
};

export default AboutUs;
