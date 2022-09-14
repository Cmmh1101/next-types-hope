import React from 'react'
import Header from '../../components/ui/Header'
import programs from '../../programsData'


type Props = {}

const ProgramsPage = (props: Props) => {
  return (
    <>
    <Header title='Our Programs' description="We have a variety of programs that target different communities, from the little ones to the elderly. We help the needed with tools, assistance, love, adn God's word" />
    <main>
      {programs.map((item: any, index: number) => {
        return (
          <p key={index}>{item.name}</p>
        )
      })}
    </main>
    </>
    
  )
}

export default ProgramsPage