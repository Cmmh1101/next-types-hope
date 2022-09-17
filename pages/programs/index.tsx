import React from 'react'
import ProgramsList from '../../components/programs/ProgramsList'
import Header from '../../components/ui/Header'
import { getAllPrograms } from '../../programsData'


type Props = {}

const ProgramsPage = (props: Props) => {

  const programs = getAllPrograms()

  return (
    <>
    <Header title='Our Programs' description="We have a variety of programs that target different communities, from the little ones to the elderly. We help the needed with tools, assistance, love, adn God's word" />
    <main>
      {/* {programs.map((item: any, index: number) => {
        return (
          <p key={index}>{item.name}</p>
        )
      })} */}

      <ProgramsList programs={programs} />
    </main>
    </>
    
  )
}

export default ProgramsPage