import { useRouter } from 'next/router'
import React from 'react'
import SingleProgram from '../../components/program-detail/SingleProgram'
import ProgramsList from '../../components/programs/ProgramsList'
import Header from '../../components/ui/Header'
import { IProgramsData } from '../../interfaces/ProgramsData'
import { getAllPrograms, getProgramByName } from '../../programsData'

interface IPrograms {
  programs: IProgramsData[]
}

const SingleProgramPage = () => {

  const router = useRouter()
  
  const programName = router.query.programsName

  const program: any = getProgramByName(programName)

  const programs = getAllPrograms().filter(program => program.name !== programName)

  if (!program) {
    return <p>No program found</p>
  }

  return (
    <>
      <Header titleDeco={program.title} subtitleDeco='Programs' image={program.image} altText={program.title} overlay="dark" />
      <SingleProgram program={program} />
      <ProgramsList programs={programs} listTitle='More Programs' />
    </>
    
  )
}

export default SingleProgramPage