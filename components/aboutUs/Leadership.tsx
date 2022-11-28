import Image from "next/image";
import React from "react";
import Heading from "../ui/Heading";
import classes from "./leadership.module.css";
import luzProfile from "../../public/images/team/profile-luz.png";
// import { getAllMembers, getAllVolunteers } from "../../leadership";
// import { GetStaticProps, InferGetStaticPropsType } from "next";

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

const Leadership = ({ teamMembers, volunteers }: Members) => {
  return (
    <section className={classes.section}>
      <Heading subtitle="Meet Our Leadership Team" />
      <div className={classes.flex}>
        <div className={classes.content}>
          <p>
            Luzbell Woods Founder of Hope for The Nations, is from Venezuela and
            currently resides in Tennessee, US. Where she serves youth students
            teaching and sharing God`&aposs word.
          </p>
          <p>
            Her passion has always been to help and serve others, which lead her
            to found Hope For The Nations, where her and her family have been
            dedicating to help unfortunate communities in her home country
            Venezuela through God`&aposs word and donations received she shares
            Hope and opportunities to the needed.
          </p>
        </div>
        <div className={classes.img}>
          <Image
            src={luzProfile}
            width={350}
            height={350}
            alt="Founder Luzbell Woods"
            layout="intrinsic"
          />
        </div>
      </div>
      <Heading subtitle="Leadership Team" />
      <div className={classes.flex}>
        {teamMembers?.map((member) => {
          return (
            <div key={member.fullName} className={classes.memberBox}>
              <div className={classes.teamImg}>
                <Image
                  src={member.photo}
                  width={200}
                  height={200}
                  layout="fixed"
                  alt={member.fullName}
                />
              </div>
              <div className={classes.info}>
                <h4>{member.fullName}</h4>
                <p>{member.ocupation}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Heading subtitle="Venezuelan Team" />
      <div className={classes.flex}>
        {volunteers?.map((member) => {
          return (
            <div key={member.fullName} className={classes.memberBox}>
              <div className={classes.smallBox}>
                <h4>{member.fullName}</h4>
                <p>{member.ocupation}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   const members = await getAllMembers();
//   const volunteers = await getAllVolunteers();
//   return {
//     props: {
//       teamMembers: members,
//       volunteers: volunteers,
//     },
//   };
// };

export default Leadership;
