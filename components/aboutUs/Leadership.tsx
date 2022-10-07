import Image from 'next/image'
import React from 'react'
import Heading from '../ui/Heading'
import QuoteBlock from '../ui/QuoteBlock'
import classes from './leadership.module.css'
import luzProfile from '../../public/images/team/profile-luz.png'

const Leadership = () => {
  const teamMembers = [
    {
      fullName: "Luzbell Wood",
      ocupation: "Founder & Director",
      photo: "/images/leadership/profile-luz.png",
    },
    {
      fullName: "Aimee Wood",
      ocupation: "Director & Digital Designer",
      photo: "/images/leadership/profile-gaby.png",
    },
    // {
    //   fullName: "Nancy Valera",
    //   ocupation: "Assist. Director Development",
    //   photo: "/images/face-placeholder.png",
    // },
    {
      fullName: "Carla Montano",
      ocupation: "Tech Director",
      photo: "/images/leadership/profile-carla.png",
    },
    {
      fullName: "Maria Brady",
      ocupation: "Project Manager",
      photo: "/images/face-placeholder.png",
    },
    {
      fullName: "Ana Salcedo",
      ocupation: "Leader - Caracas, Vzla",
      photo: "/images/leadership/profile-ana.png",
    },
    // {
    //   fullName: "Evel Castro",
    //   ocupation: "Leader - Caracas, Vzla",
    //   photo: "../../../images/leadership/profile-carla.png",
    // },
  ];

  const volunteers = [
    {
      fullName: "Nancy Valera",
      ocupation: "Assist. Director Development", project: ""
    },
    { fullName: "Lerymar Castillo", ocupation: "Media", project: "" },
    { fullName: "Barbara Poncio", ocupation: "Operativa", project: "" },
    {
      fullName: "Lizllisay de Lopez",
      ocupation: "Assist. Director Finance",
      project: "",
    },
    { fullName: "Yliana Sosa", ocupation: "Legal Dpt", project: "" },
    {
      fullName: "Eladio Lopez",
      ocupation: "Operations",
      project: "Fishing Farming Program",
    },
    {
      fullName: "Cecilio Olivo",
      ocupation: "Communities affairs",
      project: "Community Garden Program",
    },
    {
      fullName: "Hugo Valera",
      ocupation: "Ambassador",
      project: "Community Garden Program",
    },
  ];

  return (
    <section className={classes.section}>
        <Heading subtitle="Meet Our Leadership Team" />
        <div className={classes.flex}>
          <div className={classes.content}>
            <p>Luzbell Woods Founder of Hope for The Nations, is from Venezuela and currently resides in Tennessee, US. Where she serves youth students teaching and sharing God's word.</p>
            <p>Her passion has always been to help and serve others, which lead her to found Hope For The Nations, where her and her family have been dedicating to help unfortunate communities in her home country Venezuela through God's word and donations received she shares Hope and opportunities to the needed.</p>
          </div>
          <div className={classes.img}>
            <Image src={luzProfile}
              width={350}
              height={350}
              alt="Founder Luzbell Woods"
              layout="intrinsic" />
          </div>
        </div>
        <Heading subtitle="Us Team" />
        <div className={classes.flex}>
          {teamMembers.map(member=> {
            return (
              <div key={member.fullName} className={classes.memberBox}>
                <h4>{member.fullName}</h4>
                <p>{member.ocupation}</p>
              </div>
            )
          })}
        </div>
        <Heading subtitle="Venezuelan Team" />
        <div className={classes.flex}>
          {volunteers.map(member=> {
            return (
              <div key={member.fullName} className={classes.memberBox}>
                <h4>{member.fullName}</h4>
                <p>{member.ocupation}</p>
              </div>
            )
          })}
        </div>
        
    </section>
  )
}

export default Leadership