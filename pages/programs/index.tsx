import React from 'react'
import ProgramsList from '../../components/programs/ProgramsList'
import Header from '../../components/ui/Header'
import { getAllPrograms } from '../../programsData'
import heroImg from "../../public/images/programs/hunger5.png"
import classes from "../../components/ui/list.module.css"


type Props = {}

const ProgramsPage = (props: Props) => {

  const programs = getAllPrograms()

  return (
    <section className={classes.section}>
    <Header title='Our Programs' description="We have a variety of programs that beneffit different communities, from the little ones to the elderly. We help the needed with tools, assistance, love, adn God's word" image={heroImg} altText="Volunteer serving food to kids lined up" />
    <main>
      <ProgramsList programs={programs} listTitle="Featured Programs" />
    </main>
    </section>
    
  )
}

export default ProgramsPage